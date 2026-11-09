---
name: build-resume
description: Build or tailor a factual, ATS-friendly resume from the user's Markdown profile and the workspace template. Optionally use a supplied job description as private tailoring context. Save a reviewable Markdown draft.
---

# Build Resume

## Inputs

- Read `profile/**/*.md` and `templates/resume.md` in full.
- Accept an optional target role, company, job description pasted by the user, or job-description file path.
- If a supplied path is missing or the profile contains no usable facts, ask for the missing input instead of guessing.

## Process

1. Treat profile files as the source of truth. Do not invent employers, titles, dates, degrees, certifications, skills, responsibilities, outcomes, or metrics.
2. Select and order evidence for the target role. Rephrase for clarity, but preserve the original meaning and level of responsibility.
3. Use job-description language only where it accurately describes documented experience. Do not claim a required skill merely because it appears in the posting.
4. Follow `templates/resume.md`. Keep the result concise, single-column, text-based, and easy to scan. Omit sections with no supported content and remove all template placeholders.
5. If an important detail is ambiguous or missing, do not fill it in. Add a brief HTML comment at the end of the draft, such as `<!-- REVIEW: Confirm the end date for [role]. -->`.
6. Create `output/resumes/` if needed, then save the finished draft as Markdown at `output/resumes/<role>-resume.md`, using a short lowercase hyphenated filename. If the filename already exists, choose a distinct filename rather than overwriting it.

The job description is context only: never copy it into the resume or output file. If no target role or job description is supplied, create a general resume from the profile.