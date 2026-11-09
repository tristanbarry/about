---
name: assess-job-fit
description: Compare a supplied job description with the evidence in the user's Markdown profile and produce a transparent, evidence-based fit assessment.
---

# Assess Job Fit

## Inputs

- Accept a job description as pasted text or a file path.
- Read `profile/**/*.md` in full. If the job description is unavailable or the profile is empty, ask for the missing input.

## Process

1. Extract the role's core responsibilities, required qualifications, preferred qualifications, and any explicit constraints.
2. Compare each important requirement with specific evidence in the profile. Separate direct evidence, transferable evidence, and no evidence found. Do not infer a qualification from a related skill alone.
3. Choose one overall verdict: **Fit**, **Partial fit**, or **Not a fit based on the available evidence**. Explain the decision with the strongest matches, material gaps, and any uncertainty. Do not imply certainty about hiring outcomes.
4. Translate the comparison into application positioning: identify the strongest three to five profile examples to lead with, explain which role needs each example supports, and call out any evidence worth clarifying before making a claim. Prefer distinctive projects, scope, and measured outcomes over generic skill matches.
5. Create `output/fit-assessments/` if needed, then save a Markdown assessment to `output/fit-assessments/<role>-fit.md`, using a short lowercase hyphenated filename. If the filename already exists, choose a distinct filename rather than overwriting it.

## Output Format

Include:

- Role and company, when known
- Overall verdict and a short rationale
- A requirements table with requirement, profile evidence, and assessment
- Strongest matches
- Application positioning: the best evidence to foreground and what it demonstrates
- Gaps or questions to resolve
- A short recommendation on whether to apply, clearly grounded in the evidence

Keep the assessment candid and specific. Consolidate overlapping requirements so the table is useful rather than repetitive. Distinguish a missing fact in the profile from a confirmed lack of experience, and do not treat transferable experience as proof of a named tool or qualification. Preserve useful scope, dates, and outcomes when summarizing evidence. The verdict is decision support, not a prediction of the employer's decision.