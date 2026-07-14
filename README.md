# Robert Ryan — Portfolio in Progress

A bilingual, framework-free responsive landing page built with semantic HTML, CSS and vanilla JavaScript.

## Preview

Open `index.html` directly, or serve the folder with any local static server.

## Before publishing

- Add the final CV at `documents/robert-ryan-cv.pdf`.
- Replace `https://your-domain.example/` in the canonical URL, Open Graph URL and Person schema.
- Add a 1200 × 630 social preview at `assets/social-preview.jpg`.
- Confirm the email address, LinkedIn URL and timeline dates.
- Test the deployed URL with Lighthouse and at 200% browser zoom.

## Languages

English and French editorial content is held in the structured `translations` object in `js/script.js`. The selection order is:

1. Explicit `?lang=en` or `?lang=fr` URL
2. A manually saved preference
3. Browser preferences from `navigator.languages`
4. English fallback

The language control updates the content, document language, URL, metadata and structured data without reloading. New copy should always use a stable `data-i18n` key rather than a sentence as its key.

## Project structure

- `css/style.css` — design tokens, themes, layout, components and responsive rules
- `js/script.js` — bilingual content, language selection, theme preference, mobile navigation and progressive reveal behavior
- `assets/` — global brand and social assets
- `documents/` — CV and downloadable files
- `images/` — future project imagery
- `projects/` — future case-study pages

The page respects system colour preference by default, stores a manual theme choice locally, and disables non-essential motion when `prefers-reduced-motion` is active.
