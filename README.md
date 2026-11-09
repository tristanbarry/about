# Agent-First Resume Workspace

Keep your career facts in `profile/`, the resume layout in `templates/`, and reusable workflows in `.agents/skills/`. The skills produce reviewable Markdown by default and never invent qualifications or metrics.

## Set Up Your Profile

Replace the prompts in the Markdown files under `profile/` with your own information. Add detail where useful, remove empty sections, and keep dates and claims accurate. You can add more Markdown files there; the skills should read them as additional source material.

## Workflows

Ask your agent to use the relevant skill in `.agents/skills/`:

- **Build a resume:** Use `build-resume` with your profile and `templates/resume.md`. Optionally provide a job description as pasted text or a file. The job description is tailoring context and is not included in the resume. The default output is `output/resumes/<role>-resume.md`.
- **Create a PDF:** Use `resume-to-pdf` with a reviewed Markdown resume. The default output is `output/pdfs/<resume-name>.pdf`.
- **Assess a job:** Use `assess-job-fit` with a job description. The default output is `output/fit-assessments/<role>-fit.md`.

Generated files under `output/` are gitignored. Profile documents and templates are not ignored, so review them before committing if they contain personal information.

## PDF Prerequisite

The PDF workflow uses Pandoc and a LaTeX engine (XeLaTeX by default). Install both before asking the skill to create a PDF. Markdown generation and job-fit assessment do not require them.