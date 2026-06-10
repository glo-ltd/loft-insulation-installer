---
name: marketing-site-build
description: >-
  Build and ship a Claude Design handoff bundle as a production marketing /
  lead-gen website. Use when implementing a design export as a Vite + React
  site, wiring a lead form to Zapier→HubSpot, adding GTM / GA4 / Meta Pixel
  behind cookie consent, doing SEO (per-page meta, prerender, 301 redirects,
  sitemap, robots, OG images, favicon), deploying to Netlify via GitHub, and
  fixing Lighthouse accessibility/SEO issues. Captures the GLO workflow.
---

# Marketing / lead-gen website build

End-to-end playbook for turning a **Claude Design handoff bundle** into a live,
tracked, SEO-ready marketing site. Follow the phases in order; each lists the
concrete steps and the hard-won gotchas that cost iterations last time.

## Ask the user up front
- **Build type:** Vite + React (recommended) vs. keep the Babel-in-browser prototype.
- **Form backend:** where leads go (e.g. thank-you page + Zapier→HubSpot).
- **Live domain** (for canonicals/OG), **www vs non-www**.
- **Tracking IDs:** GTM container, GA4 measurement ID, Meta Pixel ID.
- **Hosting:** GitHub repo + Netlify is the default here.

## Phase 1 — Understand the handoff bundle
- A handoff is a gzipped tar (sometimes served gzipped from `api.anthropic.com`;
  `curl` it, `gunzip`, `tar -xf`). Structure: `README.md`, `chats/`,
  `project/_ds/<design-system>/` (tokens + styles.css), `project/src/*.jsx`
  (prototype, uses `window.*` globals + Babel), `project/assets/`, plus extras
  like `og/` (share images + generator), `emails/` (templates), `notes/`.
- **Read `README.md` and the `chats/` transcripts** — intent lives in the chat.
- The design system CSS (`_ds/.../styles.css`) `@import`s token files + fonts;
  keep that folder — the build imports it.

## Phase 2 — Scaffold Vite + React
- `package.json` (`type: module`; scripts: dev/build/preview), `vite.config.js`
  (`@vitejs/plugin-react`), `index.html` (entry, `<div id="root">` +
  `<script type="module" src="/src/main.jsx">`), `.env.example`, `.gitignore`
  (`node_modules/`, `dist/`, `.env.local`, `.claude/worktrees/`).
- `src/main.jsx` imports the design-system `styles.css`, then `site.css`, then
  renders `<App/>`.
- Put real image files in `public/` (served at `/...`). **Don't use symlinks** —
  they don't survive to GitHub; copy the actual files.

## Phase 3 — Convert prototype JSX → ES modules
- Each prototype file does `const {X} = window;` at top and
  `Object.assign(window, {...})` at bottom. Convert to real `import`/`export`.
- Replace shared `window.__leadContext` with a tiny `src/leadContext.js`
  (`get/setLeadContext`, dispatch a `window` event for cross-component sync).
- Make form inputs **controlled** (React state) so data can be POSTed.
- Replace any huge embedded blob (e.g. a 420KB base64 `diagrams.js`) with real
  image files under `public/`.
- Verify with `npm run build` after each batch; fix import/reference errors.

## Phase 4 — Lead form → Zapier → HubSpot (+ emails)
- POST to a Zapier **Catch Hook**, URL from `import.meta.env.VITE_ZAPIER_WEBHOOK_URL`.
- **Send `application/x-www-form-urlencoded`** (URLSearchParams), NOT JSON — this
  is a CORS "simple" request with no preflight, so it always reaches Zapier even
  though the cross-origin response can't be read. Wrap in try/catch, then route
  to the thank-you page regardless.
- Send only the fields the email templates / HubSpot need; map field names.
- Emails are sent **by Zapier** (Gmail/transactional for deliverability), not the
  site. Paste the `emails/*.html` templates into Zapier email steps; replace each
  `{{tag}}` with the mapped trigger field; the Zap must be turned ON.
- Add a **Filter by Zapier** (email Exists AND contains `@`) right after the
  trigger — public webhooks get bot/junk POSTs with missing fields that error the
  HubSpot/email steps.

## Phase 5 — Routing & SEO
- **Single source of truth:** `src/seo.js` holds per-page `{path, robots, title,
  description, ogTitle, ogDescription, ogImage, ogImageAlt}` keyed by route id,
  plus `SITE_URL`, `getMetaTags(page)`, `applyPageMeta(page)`, and
  `pageToPath`/`pageFromPath`/`normalizePath`. Routing, the runtime head-manager,
  the prerender, and the sitemap all read from it.
- **Real path URLs** (history routing, `pushState`/`popstate`), not hash routing —
  needed for per-page SEO and for prerendering. Netlify SPA redirect serves
  `index.html` for any path.
- **Prerender** (`scripts/prerender-meta.mjs`, run after `vite build`): for each
  route, write `dist/<path>/index.html` = the built shell with that page's `<head>`
  tags injected between `<!-- seo:start -->`/`<!-- seo:end -->` markers in
  `index.html`. No headless browser needed — only the `<head>` must differ because
  **social scrapers (Facebook/LinkedIn/X) don't run JS**; Google renders JS for the
  body. This is THE fix for per-page share previews on an SPA.
- **Generate `sitemap.xml`** (indexable pages only — skip `noindex`) and ship a
  static **`robots.txt`** (`Allow: /` + `Sitemap:` line; do NOT disallow noindex
  pages — Google must crawl them to see the noindex).
- **301 redirects** for SEO migration go in `netlify.toml` **before** the SPA
  catch-all (first-match-wins); cover both trailing-slash and no-slash variants.
- **OG images:** 1200×630 PNG per page in `public/og/`, wired via `ogImage` in
  `seo.js`; absolute URLs. Add `og:image:alt`. Fallback for noindex pages.
- **Favicon:** render the brand logomark to `public/favicon.png` (512) +
  `apple-touch-icon.png` (180) via `cairosvg`; link in `index.html` (outside the
  seo markers so every prerendered page keeps it).
- Canonicals/`og:url` use the **production domain** (helps stop the Netlify
  preview being indexed).

## Phase 6 — Analytics & consent (UK PECR: consent BEFORE non-essential tags)
- In `index.html` `<head>`, **before GTM**: Google **Consent Mode** default =
  `denied` for `ad_storage`/`ad_user_data`/`ad_personalization`/`analytics_storage`
  (+ restore prior choice from localStorage). Then the **GTM** container snippet
  (+ `<noscript>` iframe in body).
- **Cookie banner** (`src/CookieBanner.jsx`): Accept all / Reject; on accept calls
  `gtag('consent','update',{...granted})` + persists to localStorage; a footer
  "Cookie settings" button re-opens it (dispatch a window event).
- **GA4 and Meta Pixel run THROUGH GTM**, not hard-coded. Gate each tag with
  GTM **Consent Settings → require `ad_storage`/`analytics_storage`** so they only
  fire after consent. Adding/editing tags needs no code deploy.
- The form already pushes a **`generate_lead`** dataLayer event (no PII) — hook GA4
  and Meta "Lead" conversion tags to it.

## Phase 7 — Deploy (GitHub + Netlify)
- `netlify.toml`: `build = "npm run build"`, `publish = "dist"`, SPA redirect
  `/* → /index.html 200` (last), plus any 301s above it.
- GitHub: user creates an empty repo + a **fine-grained PAT** (single repo,
  Contents: read/write, short expiry). Push with an inline-auth URL; set clean
  `origin` without the token; **remind them to revoke** the token after.
- Netlify: Import from GitHub → it reads `netlify.toml`. **Set `VITE_ZAPIER_WEBHOOK_URL`
  (and any other `VITE_*`) as Netlify env vars, then redeploy** — Vite inlines
  `VITE_*` at BUILD time, so `.env.local` (gitignored) never reaches Netlify and the
  form silently no-ops until the var is set + rebuilt.
- The `<hash>--site.netlify.app` URL is a frozen per-deploy permalink; the
  updating URL is the bare `site.netlify.app` / custom domain.

## Phase 8 — Quality (Lighthouse)
- Parse the report's embedded `window.__LIGHTHOUSE_JSON__` to list failing audits.
- Safe accessibility/SEO fixes (no visual change): wrap content in `<main>`;
  `aria-label` on unlabelled `<select>`; `role="img"` on a logo `<span>` carrying
  `aria-label`; make nav/footer/breadcrumb anchors **crawlable with real path
  `href`s** (keep `onClick`+`preventDefault` for SPA nav); convert action-only
  links to `<button>`. Heading order: change tags to remove skips **and rename the
  matching scoped CSS selector** — base `h1–h4` share identical styles (only
  font-size differs, pinned by scoped rules), so this is visually identical.
- Contrast: nudge near-miss muted greys darker via a `:root` token override;
  **don't change brand colours** without sign-off (flag white-on-orange CTAs etc.).
- Safe perf only: `preconnect` to font/GTM origins; load Google Fonts via a `<link>`
  in `<head>` (with `display=swap`) instead of a CSS `@import` to break the
  render-blocking chain. Don't touch GTM/tracking or brand look. Big LCP wins need
  full body prerender (SSG) — treat as a separate, risk-reviewed task.

## Gotchas (highest-value memory)
1. **Vite env vars are build-time.** Set `VITE_*` in Netlify + redeploy, or the
   feature is dead in production. `.env.local` is gitignored and local-only.
2. **Zapier from the browser:** use form-urlencoded to dodge CORS preflight.
3. **SPA + social previews:** OG tags must be in the server HTML → prerender the
   `<head>` per route. JS-set OG tags don't work for scrapers.
4. **Consent first:** GA4/Meta/marketing tags must be gated behind the cookie
   banner (Consent Mode + GTM consent settings) to match UK law and the site's own
   Cookie Policy.
5. **Public webhook = spam.** Add a Zapier email-exists filter.
6. **Heading-tag swaps are safe** only if you also move the scoped CSS selector.
7. **Netlify deploy permalinks** never update — test the production URL.

## Git / workflow conventions
- Branch off default; commit only when asked; never commit `.env.local` or tokens.
- Commit as `Claude <noreply@anthropic.com>`; sign commits (avoid `--no-gpg-sign`
  if a stop-hook requires Verified commits).
- Mask tokens in any command output (`sed 's/github_pat_[A-Za-z0-9_]*/***/g'`).
- Verify each change with `npm run build` before pushing.
