# AGENTS.md

## Overview

Collection of Chinese CSL (Citation Style Language) files for academic journals. Used by Zotero and other reference managers for formatting citations and bibliographies.

## Repository

- **GitHub**: https://github.com/yangjiafengzi/chinese-csl-styles
- **Branch**: master
- **Author**: yangjiafengzi (denghanqing@whu.edu.cn)

## Commands

```bash
npm install        # install dependencies (Node.js 18+)
npm run validate   # XML parsing + CSL namespace check only
npm test           # same as validate (output comparison is skipped — see below)
```

**`validate.js` only checks XML well-formedness and CSL namespace.** It does NOT validate citation formatting logic, punctuation, or style rules. Formatting correctness requires manual testing in Zotero.

**Pandoc cannot process these CSL files** — they use multiple `<layout>` elements for Chinese/English language switching, which Pandoc's citeproc does not support. Citation output validation requires Zotero or another CSL processor with multiple-layout support.

## Citation Format Categories

- `author-date`: 社会学研究, 社会, 社会学评论, 清华社会学评论, 开放时代
- `numeric`: 武汉大学学报（哲学社会科学版）

Most styles derive from `chicago-author-date` or `社会学研究` as template. Check `<category citation-format="..."/>` and `<link rel="template"/>` in each file.

## Key Style Conventions

These differ from default CSL / English-language conventions — an agent will get them wrong without guidance:

- Author delimiter: `、` (not comma or ampersand) in Chinese styles
- Page ranges: en-dash `–` (not hyphen `-`)
- Chinese quotes: `""` outer, `''` inner
- Macros commonly split into `-en` and `-zh` variants for language switching
- After editing any `.csl` file, update the `<updated>` timestamp in `<info>`

## Editorial Guidelines

`体例说明与参考/` contains per-journal editorial style guides (`.md` and `.pdf`). Read the relevant file before modifying a journal's CSL — the formatting rules come from these guides, not from generic CSL knowledge.

## Testing

- `test/test-items.json` — CSL-JSON test items covering ~13 document types (import into Zotero)
- `test/expected-output/` — reference output for 6 styles (所有样式)
- `test/README.md` — full manual testing workflow with Zotero and Word
- Automated output comparison (`npm run generate`, `npm run compare`) is disabled in CI because Pandoc can't handle these files

## Project Structure

```
中文csl/
├── .github/workflows/test.yml  # GitHub Actions CI
├── .gitignore
├── AGENTS.md                   # This file
├── LICENSE                     # MIT License
├── README.md                   # Project documentation
├── package.json                # Node.js config
├── 体例说明与参考/              # Journal style guides
├── test/                       # Test framework
│   ├── test-items.json         # Test items (CSL-JSON)
│   ├── test-items.bib          # Test items (BibTeX)
│   ├── expected-output/        # Reference output (6 styles)
│   ├── validate.js             # XML validation script
│   └── README.md               # Testing documentation
└── *.csl                       # CSL style files (6 journals)
```
