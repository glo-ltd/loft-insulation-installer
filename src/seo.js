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
const DEFAULT_OG_IMAGE = "/images/og/default.jpg"; // 1200×630 branded fallback; add per-page images at launch

export const PAGE_META = {
  "home": {
    path: "/", robots: "index, follow",
    title: "Loft Insulation Installers | Free Survey & Quote, UK-Wide",
    description: "Eco-friendly loft insulation fitted by accredited local installers. Get a free, no-obligation survey and see how much you could save on your bills.",
    ogTitle: "Eco-Friendly Loft Insulation, Fitted by Local Experts",
    ogDescription: "We match you with vetted, accredited local installers for a warmer home, lower bills and a lighter footprint. Free, no-obligation survey and quote.",
  },
  "loft-insulation": {
    path: "/loft-insulation/", robots: "index, follow",
    title: "Loft Insulation Installers | Sustainable Materials",
    description: "Compare eco-friendly loft insulation - sheep wool, foil, recycled plastic & hemp - fitted by accredited local installers. Book your free survey.",
    ogTitle: "Sustainable Loft Insulation for Every Home",
    ogDescription: "Sheep wool, foil, recycled plastic or hemp - fitted by accredited local installers. Find the right eco-friendly option with a free home survey.",
  },
  "sheep-wool": {
    path: "/loft-insulation/sheep-wool/", robots: "index, follow",
    title: "Sheep Wool Loft Insulation Installers | Free Survey",
    description: "Natural, breathable Thermafleece sheep wool loft insulation, ideal for period homes. Fitted by accredited installers. Get a free, no-obligation quote.",
    ogTitle: "Sheep Wool Loft Insulation - Natural & Breathable",
    ogDescription: "Renewable Thermafleece sheep wool, perfect for older and period homes. Fitted cleanly by accredited installers. Book your free, no-obligation survey.",
  },
  "foil": {
    path: "/loft-insulation/foil/", robots: "index, follow",
    title: "Foil Loft Insulation Installers | SuperFOIL Multifoil",
    description: "Slim, reflective SuperFOIL multifoil loft insulation fitted by accredited specialists, ideal for 1920-1965 homes. Get a free, no-obligation quote.",
    ogTitle: "SuperFOIL Loft Insulation - Slim & Reflective",
    ogDescription: "Space-grade multifoil that reflects heat back into your home. Ideal for 1920-1965 properties, fitted by accredited specialists. Get a free quote.",
  },
  "recycled-plastic": {
    path: "/loft-insulation/recycled-plastic/", robots: "index, follow",
    title: "Recycled Plastic Loft Insulation | SupaSoft Installers",
    description: "Soft, safe SupaSoft recycled plastic loft insulation made from recycled bottles, fitted by accredited installers. Book a free, no-obligation survey.",
    ogTitle: "SupaSoft Recycled Plastic Loft Insulation",
    ogDescription: "Soft, safe insulation made from thousands of recycled bottles, easy to fit in modern homes. Accredited installers, free no-obligation survey.",
  },
  "hemp": {
    path: "/loft-insulation/hemp/", robots: "index, follow",
    title: "Hemp Loft Insulation Installers | Natural & Vegan",
    description: "Breathable, vegan hemp loft insulation, ideal for period homes and eco-conscious owners. Fitted by accredited installers. Get a free quote.",
    ogTitle: "Hemp Loft Insulation - Natural, Vegan, Breathable",
    ogDescription: "A sustainable, vegan alternative to sheep's wool that balances moisture and warmth. Fitted by accredited installers. Get your free quote.",
  },
  "loft-storage": {
    path: "/loft-storage/", robots: "index, follow",
    title: "Loft Storage Solutions | Boarding, Ladders & Hatches",
    description: "Reclaim your loft with boarding, ladders, hatches and storage rooms, fitted to building-regs standard over your insulation. Get a free quote.",
    ogTitle: "Loft Storage Solutions That Protect Your Insulation",
    ogDescription: "Boarding, ladders, hatches and storage rooms, fitted to building-regs standard without crushing your insulation. Get a free, no-obligation quote.",
  },
  "loft-boarding": {
    path: "/loft-storage/loft-boarding/", robots: "index, follow",
    title: "Loft Boarding Installers | Raised Over Insulation",
    description: "Professional loft boarding raised over your insulation for safe, usable storage that keeps performing. Accredited installers. Get a free quote.",
    ogTitle: "Loft Boarding - Safe Storage, Raised Over Insulation",
    ogDescription: "Turn a dark, unsafe loft into usable storage, raised so your insulation keeps performing. Fitted by accredited installers. Get a free quote.",
  },
  "loft-ladders": {
    path: "/loft-storage/loft-ladders/", robots: "index, follow",
    title: "Loft Ladder Installers | Aluminium, Timber & Telescopic",
    description: "Safe, sturdy loft ladders supplied and fitted by certified specialists: aluminium, timber, telescopic or electric. Get a free, no-obligation quote.",
    ogTitle: "Loft Ladders Supplied & Fitted by Specialists",
    ogDescription: "Safe, sturdy aluminium, timber, telescopic or electric loft ladders, professionally installed. No more balancing on chairs. Get a free quote.",
  },
  "loft-hatch": {
    path: "/loft-storage/loft-hatch/", robots: "index, follow",
    title: "Insulated Loft Hatch Installation | Draught-Sealed",
    description: "Energy-efficient, draught-sealed insulated loft hatches fitted by certified specialists to cut heat loss. Get a free, no-obligation quote.",
    ogTitle: "Insulated, Draught-Sealed Loft Hatches",
    ogDescription: "Cut draughts and heat loss with an airtight, insulated loft hatch fitted by certified specialists. Get a free, no-obligation quote.",
  },
  "loft-storage-rooms": {
    path: "/loft-storage/loft-storage-rooms/", robots: "index, follow",
    title: "Loft Storage Rooms | Insulated & Boarded Conversions",
    description: "Transform your loft into a clean, insulated and fully-boarded storage room, lit and ready to use. Fitted by accredited installers. Get a free quote.",
    ogTitle: "Loft Storage Rooms - Insulated, Boarded & Ready",
    ogDescription: "Transform your loft into a clean, insulated, fully-boarded room: lit and ready to use. Fitted by accredited installers. Free no-obligation quote.",
  },
  "thank-you": {
    path: "/thank-you/", robots: "noindex, follow",
    title: "Thank You | Loft Insulation Installer",
    description: "Thanks for your enquiry. An accredited installer will be in touch shortly to arrange your free, no-obligation survey.",
    ogTitle: "Thank You - We'll Be in Touch",
    ogDescription: "Thanks for your enquiry. An accredited installer will call shortly to arrange your free, no-obligation survey.",
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

export function applyPageMeta(page) {
  const m = PAGE_META[page] || PAGE_META.home;
  const url = SITE_URL + m.path;
  const ogTitle = m.ogTitle || m.title;
  const ogDesc = m.ogDescription || m.description;
  const image = SITE_URL + (m.ogImage || DEFAULT_OG_IMAGE);

  document.title = m.title;
  upsertMeta("description", m.description);
  upsertMeta("robots", m.robots || "index, follow");
  upsertLink("canonical", url);

  upsertMeta("og:type", "website", true);
  upsertMeta("og:site_name", SITE_NAME, true);
  upsertMeta("og:locale", "en_GB", true);
  upsertMeta("og:url", url, true);
  upsertMeta("og:title", ogTitle, true);
  upsertMeta("og:description", ogDesc, true);
  upsertMeta("og:image", image, true);
  upsertMeta("og:image:width", "1200", true);
  upsertMeta("og:image:height", "630", true);

  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:title", ogTitle);
  upsertMeta("twitter:description", ogDesc);
  upsertMeta("twitter:image", image);
}
