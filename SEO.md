# SEO / Meta tags — status

## What's implemented

- **`src/seo.js`** holds per-page metadata (title, description, canonical, robots,
  Open Graph + Twitter) for every route — the single source of truth, consumed by
  both the runtime head-manager and the build-time prerender.
- **Real path URLs** — `src/app.jsx` uses history (path) routing, so each page lives
  at its real path (`/loft-insulation/sheep-wool/`, etc.) and `canonical`/`og:url`
  match the actual URL. Path↔page mapping comes from `src/seo.js`
  (`pageToPath` / `pageFromPath`).
- **Build-time prerender** — `scripts/prerender-meta.mjs` runs after `vite build`
  (see `package.json`) and writes a per-route `dist/<path>/index.html` with that
  page's `<head>` tags baked in between the `<!-- seo:start -->` / `<!-- seo:end -->`
  markers. No headless browser; it reuses `getMetaTags()` from `src/seo.js`.
- **`applyPageMeta(page)`** keeps the `<head>` in sync during client-side navigation.
- **Branded per-page share images** — `public/og/<page>.png` (1200×630), one for each
  indexable page, served at `/og/<page>.png`. Wired via `ogImage` + `ogImageAlt` in
  `src/seo.js`; thank-you and legal pages fall back to `home.png`. The generator that
  produced them lives at `project/og/og-images.html` (not deployed).
- **Domain:** `SITE_URL` = `https://loftinsulationinstaller.co.uk` (non-www).

### What this delivers
- ✅ Real, shareable per-page URLs that match the canonical tags.
- ✅ Correct per-page titles & descriptions in the **raw HTML** (so social scrapers
  and no-JS clients see them) and at runtime.
- ✅ **Social share previews (Facebook / LinkedIn / X)** now resolve per page, because
  each route ships its own static HTML with the right OG tags.
- ✅ Google indexing per page at the real paths.
- ✅ `noindex` on thank-you, privacy-policy, cookie-policy.

## Optional polish (not required)

1. **Twitter handle.** If the brand has an X/Twitter account, add `twitter:site`
   (`@handle`) to the `names` object in `src/seo.js` `getMetaTags()`. Omitted for now
   rather than shipping a placeholder.

2. **Validate live:** run the Facebook Sharing Debugger and the X Card Validator on a
   couple of URLs and re-scrape so the platforms cache the tags.

## Regenerating the share images
The branded PNGs were produced by `project/og/og-images.html` — a data-driven
generator (edit the `CARDS` array, then screenshot each card at 1200×630). Its
relative paths resolve inside `project/`, and it is not part of the deployed build.
Drop updated PNGs into `public/og/` with the same filenames.

## How serving works on Netlify
Each prerendered file (e.g. `dist/loft-storage/loft-boarding/index.html`) is served
directly for its path — existing static files take precedence over the SPA rewrite in
`netlify.toml`. Unknown paths fall back to `/index.html` (the home shell), and the
React router resolves whatever path loads. Asset URLs are absolute (`/assets/…`), so
they load correctly from any nested path.

## Adding a new page later
1. Add the route/content as usual and a matching entry in `PAGE_META` (`src/seo.js`)
   with its `path`. 2. That's it — routing, the runtime head tags, and the prerender
   all read from `PAGE_META`, so the new page is covered automatically on next build.
