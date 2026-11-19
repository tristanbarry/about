# About

This repo is used to assist with builing an applicable resume. I've added my skills, experience and eduction in a `profile/` folder and added some skills to help assess fitment for a role and produce a decent 'first draft' of a resume for a role.

## Workflows

Ask the agent to use the relevant skill in `.agents/skills/`:

- **Build a resume:** Use `build-resume` with your profile and `templates/resume.md`. Optionally provide a job description as pasted text or a file. The job description is tailoring context and is not included in the resume. The default output is `output/resumes/<role>-resume.md`.
- **Assess a job:** Use `assess-job-fit` with a job description. The default output is `output/fit-assessments/<role>-fit.md`.

Generated files under `output/` are gitignored. Profile documents and templates are not ignored, so review them before committing if they contain personal information.
