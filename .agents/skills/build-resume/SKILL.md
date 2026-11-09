---
name: build-resume
description: Build or tailor a factual, ATS-friendly resume from the user's Markdown profile and the workspace template. Optionally use a supplied job description as private tailoring context. Save a reviewable Markdown draft.
---

# Build Resume

## Inputs

- Read `profile/**/*.md` and `templates/resume.md` in full, including `profile/contact.md` when present.
- Accept an optional target role, company, job description pasted by the user, or job-description file path.
- If a supplied path is missing or the profile contains no usable facts, ask for the missing input instead of guessing.

## Process

1. Treat profile files as the source of truth. Do not invent employers, titles, dates, degrees, certifications, skills, responsibilities, outcomes, or metrics.
2. Extract the target role's main responsibilities and requirements, then select and order the profile evidence that best demonstrates them. Prefer specific projects, scope, tools, and substantiated outcomes over generic statements. Rephrase for clarity, but preserve the original meaning and level of responsibility.
3. Use job-description language only where it accurately describes documented experience. Do not claim a required skill merely because it appears in the posting.
4. Read `profile/experience.md` as role-based evidence: use its context, scope, responsibilities, team impact, and project references to understand each position. It is not STAR-formatted.
5. Read `profile/projects.md` as project evidence organized by Situation, Task, Action, and Result. Use those details to select technically relevant accomplishments; do not force STAR labels into the finished resume.
6. Use `templates/resume.md` and any supplied resume example as formatting guidance, not a fixed section order. Choose the order that puts the strongest role-relevant evidence first; for hands-on engineering roles, selected technical projects may precede career experience when they provide better proof than broad role summaries. Omit a strengths section when it only repeats the summary or skills. Keep a clear name/contact masthead, concise summary, categorized technical skills, and compact qualifications. Keep the single-column, text-based layout and use a warm, direct, approachable voice without weakening factual precision.
7. Keep Experience focused on role scope, leadership, coaching, collaboration, and responsibilities; use Projects for technical implementation, tools, and project outcomes.
8. Preserve source distinctions between technical leadership, project coordination, coaching, and formal people management. Do not infer direct-report counts, performance-management responsibilities, or which roles included them.
9. Avoid repeating the same accomplishment in Experience and Projects. Experience may establish project ownership or context; keep implementation details and project-specific metrics in the project entry.
10. Keep the result concise and easy to scan without flattening distinctive accomplishments into generic summaries. Retain the strongest relevant examples and their meaningful scale or results when documented; do not omit a project that directly addresses a core job requirement merely to shorten the resume. Omit sections with no supported content and do not include profile placeholders as facts.
11. If an important detail is ambiguous or missing, do not fill it in. Leave a clearly labeled placeholder in the profile source when appropriate; in a finished resume, omit the unknown detail or add a brief HTML review comment at the end, such as `<!-- REVIEW: Confirm the end date for [role]. -->`.
12. Use `profile/contact.md` for the resume header. Include only supplied, non-placeholder fields. Use city and region as the location; never include a street address.
13. Put role location and dates together in one metadata line. Keep education and certification dates on the same line as the credential; do not render dates as standalone bullets or isolated detail lines.
14. Before saving, check that the summary names a credible role identity aligned to the target (rather than defaulting to the candidate's latest title), the most relevant project examples are present and ordered intentionally, and every tool, date, scope statement, and result is supported by the profile. Check for duplicate or awkwardly grouped skills and repeated accomplishments.
15. Create `output/resumes/` if needed, then save the finished draft as Markdown at `output/resumes/<role>-resume.md`, using a short lowercase hyphenated filename. If the filename already exists, choose a distinct filename rather than overwriting it.

The job description is context only: never copy it into the resume or output file. If no target role or job description is supplied, create a general resume from the profile.