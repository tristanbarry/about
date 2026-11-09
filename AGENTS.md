# Repository Instructions

## PDF Generation

- Enter `devenv shell` before generating a PDF. The development environment provides `pandoc` and TeX Live, including `xelatex`.
- Use the `resume-to-pdf` skill with a reviewed Markdown resume. Preserve the Markdown source and write generated PDFs under `output/pdfs/`.
- If running the conversion directly, use Pandoc with XeLaTeX, modest margins, a readable 10 pt font, and link support:

  ```sh
  mkdir -p output/pdfs
  pandoc input.md --pdf-engine=xelatex -V mainfont="Liberation Sans" -V geometry:margin=0.65in -V fontsize=10pt -V colorlinks=true -o output/pdfs/input.pdf
  ```

- Confirm the output PDF exists after conversion. Do not overwrite an existing PDF; choose a distinct output name instead.