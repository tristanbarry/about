import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler, type CreateStatelessMcpHandlerOptions } from "agents/mcp/server";

interface AboutResources {
	name: string
	description: string
	content: () => Promise<string>
}

const PROTOCOL_PREFIX = 'about://'

const toolsAndResources: AboutResources[] = [
	{ name: 'contact', description: "Contact information (currently redacted)", content: async () => (await import('../../profile/contact.md')).default },
	{ name: 'certifications', description: "Technical certifications", content: async () => (await import('../../profile/certifications.md')).default },
	{ name: 'education', description: "Education", content: async () => (await import('../../profile/education.md')).default },
	{ name: 'experience', description: "Professional workplace experiences", content: async () => (await import('../../profile/experience.md')).default },
	{ name: 'projects', description: "Interesting professional projects", content: async () => (await import('../../profile/projects.md')).default },
	{ name: 'skills', description: "Overview of skills built up over the years", content: async () => (await import('../../profile/skills.md')).default },
]

function registerToolsAndResources(server: McpServer) {
	for (const tool of toolsAndResources) {
		server.registerResource(tool.name, `${PROTOCOL_PREFIX}${tool.name}`, {
			title: tool.name,
			mimeType: 'text/plain'
		},
			async uri => ({
				contents: [{ uri: uri.href, text: await tool.content() }]
			})
		)
		// Clients like co-pilots prefer tools over resources - so including it as a tool call as well.
		// "Native servers don't automatically appear in the editor's resource browser"
		// Source: https://code.visualstudio.com/api/extension-guides/ai/mcp#mcp-support-in-copilot
		server.registerTool(
			tool.name,
			{ description: tool.description },
			async () => ({
				content: [{ type: 'text', text: await tool.content() }]
			})
		)
	}
}


function createServer() {
	const server = new McpServer({
		name: "about me",
		version: "1.0.0",
	});

	registerToolsAndResources(server)

	return server;
}

const mcpHandler = createMcpHandler(createServer, {
	route: '/mcp',
	onerror(error) {
		console.error('MCP handler error:', error)
	},
} satisfies CreateStatelessMcpHandlerOptions)

export default {
	fetch(request, env, ctx) {
		return mcpHandler(request, env, ctx);
	},
} satisfies ExportedHandler;