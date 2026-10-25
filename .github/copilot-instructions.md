# Copilot instructions for kryaastyle

## Project overview

This repository is a static storefront for Kryaa Style / Aza Men Store. The app is not a framework-based app; it is a collection of static HTML, CSS, and JavaScript files served directly from the repo.

- The root `index.html` is a mirror/index page that redirects to the storefront entry point.
- The actual storefront pages live under `www.azafashions.com/`.
- Shared marketing and product imagery is stored in `image/` and `images/`; site-specific assets live under `www.azafashions.com/images/`, `www.azafashions.com/skin/`, and related folders.
- `server.js` is the only runtime file in the repo; it serves the static site from disk and redirects `/` to `/www.azafashions.com/index.html`.

## Local development commands

Use the existing scripts in `package.json`:

- `npm run dev`
- `npm run start`
- `node server.js`

These all start the static server defined in `server.js`.

Optional static preview without Node:

- `python -m http.server 8000`
- Open `http://localhost:8000/www.azafashions.com/index.html`

The built-in Node server listens on port 3000 by default:

- `http://localhost:3000/`
- `http://localhost:3000/www.azafashions.com/index.html`

## Build, test, and lint commands

This repository does not currently define any automated build, lint, or test workflows in `package.json`.

- No `test` script exists.
- No `lint` script exists.
- No `build` script exists.
- No test framework or CI workflow files were found in the repo.

There is no single-test command to run here; validation is typically done by starting the local server and checking the affected page in a browser or by loading the relevant HTML/CSS/JS files in a browser to confirm there are no broken asset paths or obvious runtime errors.

## High-level architecture

The app is organized around a mirrored static storefront:

- `www.azafashions.com/` contains the website pages (`index.html`, `men.html`, `category.html`, etc.).
- Page-specific behavior is handled by plain JavaScript files such as `www.azafashions.com/category-page.js` and `www.azafashions.com/men-only.js`.
- Styling is split across CSS files such as `www.azafashions.com/category-page.css` and `www.azafashions.com/mobile-overrides.css`.
- The site relies on relative-path asset loading and hard-coded URL structure rather than a build pipeline or framework routing.

`server.js` is deliberately simple:

- resolves request paths against the repo root
- redirects `/` to the storefront homepage
- prevents directory traversal
- appends `.html` for missing extensions when appropriate
- serves a limited MIME type map for images, CSS, JS, and HTML

Because the site is static, the biggest architectural risk is breaking path assumptions. Files and pages are tightly coupled by relative paths and mirrored folder names.

## Key conventions and repo-specific patterns

- Preserve the existing static layout and relative asset references when editing pages. This repo is not structured like a modern app with bundling or route generation.
- When moving or renaming files, check the HTML and JS that reference them. Common breakages are 404s caused by changed image or stylesheet paths.
- Prefer surgical edits to existing HTML/CSS/JS instead of reworking the structure.
- Do not assume a framework; the storefront is plain DOM-based scripting and static markup.
- Keep the root server behavior intact. `server.js` includes security checks and route fallback logic that are important to the repo's serving model.
- Treat the mirrored asset folders as part of the app structure. They are not incidental or disposable files.

## Validation workflow for changes

After updating HTML, CSS, or JS:

1. Start the local server with `npm run dev` or `node server.js`.
2. Load the affected page in a browser (for example, `http://localhost:3000/www.azafashions.com/index.html`).
3. Confirm the page loads without broken assets or missing CSS/JS references.
4. For visual or content changes, check the relevant storefront page in the browser rather than relying on a framework test runner.

## Notes for future automation

If someone adds automated tooling later, keep it aligned with the existing repo shape:

- static HTML storefront
- no framework build system
- direct browser validation as the default quality check

Avoid introducing bundlers or migration patterns that assume a modern app architecture unless the project is intentionally reworked.
