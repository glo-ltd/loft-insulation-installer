// Per-page SEO/meta — single source of truth.
// INTERIM: applyPageMeta() updates the document <head> on each client-side
// route change (correct tab titles/descriptions/canonical/robots; Google reads
// these because it renders JS). Social scrapers (Facebook/X/LinkedIn) do NOT
// run JS, so per-page Open Graph previews only become fully effective once we
// prerender each route to static HTML at launch — at which point this same map
// is consumed at build time. See SEO.md.
//
// Page keys match the app's route ids in app.jsx. Paths/titles/descriptions
// follow the agreed meta spec. Use literal "&" here (not &amp;) — the DOM
// escapes attribute values for us.

export const SITE_URL = "https://loftinsulationinstaller.co.uk"; // ← swap if the live domain differs
export const SITE_NAME = "Loft Insulation Installer";
// Branded 1200×630 share images live in public/og/ (one per page; generator in
// project/og/og-images.html). Indexable pages set their own ogImage below; the
// rest (thank-you, legal) fall back to the homepage card.
const DEFAULT_OG_IMAGE = "/og/home.png";
const DEFAULT_OG_ALT = "Eco-friendly loft insulation, installed by accredited local experts.";

export const PAGE_META = {
  "home": {
    path: "/", robots: "index, follow",
    ogImage: "/og/home.png",
    ogImageAlt: "Eco-friendly loft insulation, installed by accredited local experts.",
    title: "Loft Insulation Installers | Free Survey & Quote, UK-Wide",
    description: "Eco-friendly loft insulation fitted by accredited local installers. Get a free phone consultation and see how much you could save on your bills.",
    ogTitle: "Eco-Friendly Loft Insulation, Fitted by Local Experts",
    ogDescription: "We match you with vetted, accredited local installers for a warmer home, lower bills and a lighter footprint. Free phone consultation and quote.",
  },
  "loft-insulation": {
    path: "/loft-insulation/", robots: "index, follow",
    ogImage: "/og/loft-insulation.png",
    ogImageAlt: "Eco-friendly loft insulation in four sustainable materials, fitted by accredited installers.",
    title: "Loft Insulation Installers | Sustainable Materials",
    description: "Compare eco-friendly loft insulation - sheep wool, foil, recycled plastic & hemp - fitted by accredited local installers. Book your free survey.",
    ogTitle: "Sustainable Loft Insulation for Every Home",
    ogDescription: "Sheep wool, foil, recycled plastic or hemp - fitted by accredited local installers. Find the right eco-friendly option with a free phone consultation.",
  },
  "sheep-wool": {
    path: "/loft-insulation/sheep-wool/", robots: "index, follow",
    ogImage: "/og/sheep-wool.png",
    ogImageAlt: "Sheep wool loft insulation, installed by accredited local experts.",
    title: "Sheep Wool Loft Insulation Installers | Free Survey",
    description: "Natural, breathable Thermafleece sheep wool loft insulation, ideal for period homes. Fitted by accredited installers. Get a free, no-obligation quote.",
    ogTitle: "Sheep Wool Loft Insulation - Natural & Breathable",
    ogDescription: "Renewable Thermafleece sheep wool, perfect for older and period homes. Fitted cleanly by accredited installers. Book your free phone consultation.",
  },
  "foil": {
    path: "/loft-insulation/foil/", robots: "index, follow",
    ogImage: "/og/foil.png",
    ogImageAlt: "Foil loft insulation, installed by accredited local experts.",
    title: "Foil Loft Insulation Installers | SuperFOIL Multifoil",
    description: "Slim, reflective SuperFOIL multifoil loft insulation fitted by accredited specialists, ideal for 1920-1965 homes. Get a free, no-obligation quote.",
    ogTitle: "SuperFOIL Loft Insulation - Slim & Reflective",
    ogDescription: "Space-grade multifoil that reflects heat back into your home. Ideal for 1920-1965 properties, fitted by accredited specialists. Get a free quote.",
  },
  "recycled-plastic": {
    path: "/loft-insulation/recycled-plastic/", robots: "index, follow",
    ogImage: "/og/recycled-plastic.png",
    ogImageAlt: "Recycled plastic loft insulation, installed by accredited local experts.",
    title: "Recycled Plastic Loft Insulation | SupaSoft Installers",
    description: "Soft, safe SupaSoft recycled plastic loft insulation made from recycled bottles, fitted by accredited installers. Book a free phone consultation.",
    ogTitle: "SupaSoft Recycled Plastic Loft Insulation",
    ogDescription: "Soft, safe insulation made from thousands of recycled bottles, easy to fit in modern homes. Accredited installers, free no-obligation survey.",
  },
  "hemp": {
    path: "/loft-insulation/hemp/", robots: "index, follow",
    ogImage: "/og/hemp.png",
    ogImageAlt: "Hemp loft insulation, installed by accredited local experts.",
    title: "Hemp Loft Insulation Installers | Natural & Vegan",
    description: "Breathable, vegan hemp loft insulation, ideal for period homes and eco-conscious owners. Fitted by accredited installers. Get a free quote.",
    ogTitle: "Hemp Loft Insulation - Natural, Vegan, Breathable",
    ogDescription: "A sustainable, vegan alternative to sheep's wool that balances moisture and warmth. Fitted by accredited installers. Get your free quote.",
  },
  "loft-storage": {
    path: "/loft-storage/", robots: "index, follow",
    ogImage: "/og/loft-storage.png",
    ogImageAlt: "Loft storage solutions, fitted by accredited local experts.",
    title: "Loft Storage Solutions | Boarding, Ladders & Hatches",
    description: "Reclaim your loft with boarding, ladders, hatches and storage rooms, fitted to building-regs standard over your insulation. Get a free quote.",
    ogTitle: "Loft Storage Solutions That Protect Your Insulation",
    ogDescription: "Boarding, ladders, hatches and storage rooms, fitted to building-regs standard without crushing your insulation. Get a free, no-obligation quote.",
  },
  "loft-boarding": {
    path: "/loft-storage/loft-boarding/", robots: "index, follow",
    ogImage: "/og/loft-boarding.png",
    ogImageAlt: "Loft boarding, fitted by accredited local experts.",
    title: "Loft Boarding Installers | Raised Over Insulation",
    description: "Professional loft boarding raised over your insulation for safe, usable storage that keeps performing. Accredited installers. Get a free quote.",
    ogTitle: "Loft Boarding - Safe Storage, Raised Over Insulation",
    ogDescription: "Turn a dark, unsafe loft into usable storage, raised so your insulation keeps performing. Fitted by accredited installers. Get a free quote.",
  },
  "loft-ladders": {
    path: "/loft-storage/loft-ladders/", robots: "index, follow",
    ogImage: "/og/loft-ladders.png",
    ogImageAlt: "Loft ladders, fitted by accredited local experts.",
    title: "Loft Ladder Installers | Aluminium, Timber & Telescopic",
    description: "Safe, sturdy loft ladders supplied and fitted by certified specialists: aluminium, timber, telescopic or electric. Get a free, no-obligation quote.",
    ogTitle: "Loft Ladders Supplied & Fitted by Specialists",
    ogDescription: "Safe, sturdy aluminium, timber, telescopic or electric loft ladders, professionally installed. No more balancing on chairs. Get a free quote.",
  },
  "loft-hatch": {
    path: "/loft-storage/loft-hatch/", robots: "index, follow",
    ogImage: "/og/loft-hatch.png",
    ogImageAlt: "Insulated loft hatch, fitted by accredited local experts.",
    title: "Insulated Loft Hatch Installation | Draught-Sealed",
    description: "Energy-efficient, draught-sealed insulated loft hatches fitted by certified specialists to cut heat loss. Get a free, no-obligation quote.",
    ogTitle: "Insulated, Draught-Sealed Loft Hatches",
    ogDescription: "Cut draughts and heat loss with an airtight, insulated loft hatch fitted by certified specialists. Get a free, no-obligation quote.",
  },
  "loft-storage-rooms": {
    path: "/loft-storage/loft-storage-rooms/", robots: "index, follow",
    ogImage: "/og/loft-storage-rooms.png",
    ogImageAlt: "Loft storage room, fitted by accredited local experts.",
    title: "Loft Storage Rooms | Insulated & Boarded Conversions",
    description: "Transform your loft into a clean, insulated and fully-boarded storage room, lit and ready to use. Fitted by accredited installers. Get a free quote.",
    ogTitle: "Loft Storage Rooms - Insulated, Boarded & Ready",
    ogDescription: "Transform your loft into a clean, insulated, fully-boarded room: lit and ready to use. Fitted by accredited installers. Free no-obligation quote.",
  },
  "thank-you": {
    path: "/thank-you/", robots: "noindex, follow",
    title: "Thank You | Loft Insulation Installer",
    description: "Thanks for your enquiry. An accredited installer will be in touch shortly to arrange your free phone consultation.",
    ogTitle: "Thank You - We'll Be in Touch",
    ogDescription: "Thanks for your enquiry. An accredited installer will call shortly to arrange your free phone consultation.",
  },
  "privacy-policy": {
    path: "/privacy-policy/", robots: "noindex, follow",
    title: "Privacy Policy | Loft Insulation Installer",
    description: "How Loft Insulation Installer collects, uses and protects your personal data when you request a quote or survey.",
  },
  "cookie-policy": {
    path: "/cookie-policy/", robots: "noindex, follow",
    title: "Cookie Policy | Loft Insulation Installer",
    description: "How Loft Insulation Installer uses cookies and similar technologies, and how you can manage your preferences.",
  },
};

function upsertMeta(key, value, asProperty) {
  if (value == null) return;
  const attr = asProperty ? "property" : "name";
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Structured per-page tag data — the single source consumed by both the runtime
// head-manager (applyPageMeta) and the build-time prerender script.
export function getMetaTags(page) {
  const m = PAGE_META[page] || PAGE_META.home;
  const url = SITE_URL + m.path;
  const ogTitle = m.ogTitle || m.title;
  const ogDesc = m.ogDescription || m.description;
  const image = SITE_URL + (m.ogImage || DEFAULT_OG_IMAGE);
  const imageAlt = m.ogImageAlt || DEFAULT_OG_ALT;
  return {
    title: m.title,
    canonical: url,
    names: {
      description: m.description,
      robots: m.robots || "index, follow",
      "twitter:card": "summary_large_image",
      "twitter:title": ogTitle,
      "twitter:description": ogDesc,
      "twitter:image": image,
      "twitter:image:alt": imageAlt,
    },
    properties: {
      "og:type": "website",
      "og:site_name": SITE_NAME,
      "og:locale": "en_GB",
      "og:url": url,
      "og:title": ogTitle,
      "og:description": ogDesc,
      "og:image": image,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:alt": imageAlt,
    },
  };
}

export function applyPageMeta(page) {
  const t = getMetaTags(page);
  document.title = t.title;
  upsertLink("canonical", t.canonical);
  for (const [k, v] of Object.entries(t.names)) upsertMeta(k, v, false);
  for (const [k, v] of Object.entries(t.properties)) upsertMeta(k, v, true);
}

// ---- Path <-> page routing helpers (consumed by the router in app.jsx) ----

// Normalise a URL path: strip query/hash, ensure a leading slash, and drop any
// trailing slash (except root) so "/foo" and "/foo/" compare equal.
export function normalizePath(p) {
  let path = (p || "/").split("#")[0].split("?")[0];
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path || "/";
}

const PATH_TO_PAGE = {};
Object.entries(PAGE_META).forEach(([page, m]) => {
  PATH_TO_PAGE[normalizePath(m.path)] = page;
});

// Canonical path for a page id (with trailing slash, matching the canonical tag).
export function pageToPath(page) {
  return (PAGE_META[page] && PAGE_META[page].path) || "/";
}

// Resolve a URL path to a page id (defaults to home for unknown paths).
export function pageFromPath(pathname) {
  return PATH_TO_PAGE[normalizePath(pathname)] || "home";
}
