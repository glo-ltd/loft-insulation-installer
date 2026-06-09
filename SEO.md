# SEO / Meta tags — status & launch plan

## What's implemented now (interim)

- **`src/seo.js`** holds per-page metadata (title, description, canonical, robots,
  Open Graph + Twitter) for every route — the single source of truth.
- **`applyPageMeta(page)`** updates the document `<head>` on each client-side route
  change (wired in `src/app.jsx`).
- **`index.html`** carries the homepage tags statically, so first paint and any
  scraper that reads raw HTML get correct homepage tags.
- **`public/images/og/default.jpg`** — a 1200×630 fallback share image used by all
  pages for now.

### What this does and doesn't do
- ✅ Correct browser tab titles & descriptions per page.
- ✅ `noindex` on thank-you, privacy-policy, cookie-policy.
- ✅ Google indexing — Googlebot renders JavaScript, so it sees the per-page tags.
- ⚠️ **Social share previews (Facebook / LinkedIn / X) only use the homepage tags.**
  Those scrapers don't run JavaScript, and the app is a single-page app served from
  one `index.html`. Per-page OG previews require the launch step below.
- ⚠️ URLs are still hash-based (`/#sheep-wool`). The canonical tags already point at
  the intended real paths (`/loft-insulation/sheep-wool/`), which resolve once the
  launch step lands.

## Launch phase — to make per-page SEO + social previews fully work

1. **Set the live domain.** Update `SITE_URL` in `src/seo.js` and the absolute URLs
   in `index.html` if the production domain differs from
   `https://loftinsulationinstaller.co.uk`.

2. **Switch to real path URLs.** Convert the hash router in `src/app.jsx` to history
   (path) routing so each page lives at its real path
   (`/loft-insulation/sheep-wool/`, etc.). The route ids already map 1:1 to the paths
   in `src/seo.js`. Netlify's SPA redirect (`netlify.toml`) already returns
   `index.html` for any path.

3. **Prerender each route to static HTML at build time** so the correct tags are
   baked into the HTML response (what social scrapers read). Options:
   - A Vite prerender/SSG plugin that crawls the built app, or
   - A small Puppeteer post-build script that visits each path and writes
     `dist/<path>/index.html`.
   Either way, feed it the routes from `PAGE_META` and inject each page's tags.

4. **Add per-page OG images (optional but recommended).** Drop 1200×630 images into
   `public/images/og/` (e.g. `sheep-wool.jpg`) and set `ogImage` on the matching
   entry in `src/seo.js`. Until then everything uses `default.jpg`.

5. **Twitter handle.** If the brand has an X/Twitter account, add
   `twitter:site` (`@handle`) in `applyPageMeta` and `index.html`. Omitted for now
   rather than shipping a placeholder.

6. **Validate after launch:** Facebook Sharing Debugger and the X Card Validator —
   re-scrape so the platforms cache the new tags.

## Note on the Netlify preview domain
Canonicals point at the production domain, which helps prevent the preview
(`*.netlify.app`) from being indexed in its place. If you want to be certain the
preview isn't indexed before launch, set it to `noindex` in Netlify until the real
domain goes live.
