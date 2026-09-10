# Site content

Update the website by editing files here — no TypeScript changes needed.

## Profile, bio, roles, awards

Edit `site.yaml` (name, tagline, bio, education, current roles, service, awards, social links, etc.).

## Publications

Add or edit a Markdown file in `publications/`. Each file is one paper.

Frontmatter fields:

- `title`, `year`, `type` (`journal`, `conference`, `workshop`, `preprint`, `thesis`)
- `venue`
- `authors` — list of names; append `*` to highlight your name (example: `"S. Abedu*"`)
- Optional links: `paper`, `doi`, `code`, `dataset`, `demo`

Files are sorted by `year` on the site (newest first).

## Projects

Add or edit a Markdown file in `projects/`.

Frontmatter fields:

- `title`, `organization`, `year`
- `problem`, `contribution`, `outcome` (multi-line text)
- `technologies` — YAML list
- `links` — map of `live`, `demo`, `paper`, `doi`, `code`, `dataset`, etc.

After saving, run `npm run dev` or push to GitHub to rebuild the site.
