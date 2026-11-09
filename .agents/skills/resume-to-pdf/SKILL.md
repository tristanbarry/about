---
name: resume-to-pdf
description: Convert a reviewed Markdown resume into a clean PDF using Pandoc and XeLaTeX, preserving the Markdown source.
---

# Resume to PDF

## Inputs

- Accept a Markdown resume path. If none is provided, ask which file to convert; do not choose an unrelated file.
- Preserve the source Markdown. Do not rewrite resume content as part of conversion.

## Process

1. Check that the input file exists and that `pandoc` and `xelatex` are available. If either is missing, report the exact missing prerequisite and stop; do not claim a PDF was created.
2. Create `output/pdfs/` if needed and convert the Markdown to PDF with Pandoc using XeLaTeX. Use a readable 10-11 pt font, modest margins, and link support. Do not include an elaborate title page.
3. Name the output after the input file in `output/pdfs/`. If that PDF already exists, choose a distinct name instead of overwriting it.
4. Confirm the PDF exists and report its path. If conversion fails, include the useful error and leave the Markdown untouched.

Example command, substituting the actual paths:

```sh
pandoc input.md --pdf-engine=xelatex -V geometry:margin=0.65in -V fontsize=10pt -V colorlinks=true -o output/pdfs/input.pdf
```