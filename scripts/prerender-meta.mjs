// Build-time prerender of per-page <head> tags.
//
// Social scrapers (Facebook / LinkedIn / X) don't run JavaScript, so they only
// see the raw HTML response. This script takes the built dist/index.html shell
// and writes a per-route copy with that page's meta/OG/canonical tags baked in
// between the <!-- seo:start --> / <!-- seo:end --> markers. The React app still
// hydrates and runs client-side as normal; this just fixes what bots read.
//
// Runs after `vite build` (see package.json). No headless browser needed.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { PAGE_META, getMetaTags, pageToPath, SITE_URL } from "../src/seo.js";

const DIST = join(process.cwd(), "dist");
const START = "<!-- seo:start -->";
const END = "<!-- seo:end -->";

const shell = readFileSync(join(DIST, "index.html"), "utf8");
const i = shell.indexOf(START);
const j = shell.indexOf(END);
if (i === -1 || j === -1) {
  console.error("prerender-meta: SEO markers not found in dist/index.html");
  process.exit(1);
}
const before = shell.slice(0, i + START.length);
const after = shell.slice(j); // includes END marker → re-runs stay idempotent

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildHead(page) {
  const t = getMetaTags(page);
  const L = [];
  L.push(`  <title>${esc(t.title)}</title>`);
  if (t.names.description) {
    L.push(`  <meta name="description" content="${esc(t.names.description)}" />`);
  }
  L.push(`  <link rel="canonical" href="${esc(t.canonical)}" />`);
  for (const [k, v] of Object.entries(t.names)) {
    if (k === "description" || v == null) continue;
    L.push(`  <meta name="${k}" content="${esc(v)}" />`);
  }
  for (const [k, v] of Object.entries(t.properties)) {
    if (v == null) continue;
    L.push(`  <meta property="${k}" content="${esc(v)}" />`);
  }
  return "\n" + L.join("\n") + "\n  ";
}

let count = 0;
for (const page of Object.keys(PAGE_META)) {
  const html = before + buildHead(page) + after;
  const outDir = join(DIST, pageToPath(page)); // "/" → DIST, "/foo/bar/" → DIST/foo/bar
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
  count++;
}
console.log(`prerender-meta: wrote ${count} pages with per-page meta tags.`);

// sitemap.xml — only indexable pages (skip anything marked noindex).
const indexPages = Object.keys(PAGE_META).filter(
  (page) => !getMetaTags(page).names.robots.includes("noindex"),
);
const urls = indexPages
  .map((page) => `  <url>\n    <loc>${SITE_URL}${pageToPath(page)}</loc>\n  </url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap, "utf8");
console.log(`prerender-meta: wrote sitemap.xml with ${indexPages.length} URLs.`);
