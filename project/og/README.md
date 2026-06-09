# OpenGraph / social-share images

Branded share previews (1200×630, the OpenGraph 1.91:1 standard) for every
public page. Each is built from the design system — logomark, Encode Sans,
the grass-green marker headline, the heat-wave panel, and the page's real
photography (the homepage uses the "why us" team photo).

`og-images.html` is the generator (one editable template, data-driven). The
exported PNGs sit next to it.

| File | Page | URL |
|---|---|---|
| `home.png` | Homepage | `/` |
| `loft-insulation.png` | Loft Insulation hub | `/loft-insulation/` |
| `sheep-wool.png` | Sheep Wool | `/loft-insulation/sheep-wool/` |
| `foil.png` | Foil | `/loft-insulation/foil/` |
| `recycled-plastic.png` | Recycled Plastic | `/loft-insulation/recycled-plastic/` |
| `hemp.png` | Hemp | `/loft-insulation/hemp/` |
| `loft-storage.png` | Loft Storage hub | `/loft-storage/` |
| `loft-boarding.png` | Loft Boarding | `/loft-storage/loft-boarding/` |
| `loft-ladders.png` | Loft Ladders | `/loft-storage/loft-ladders/` |
| `loft-hatch.png` | Loft Hatch | `/loft-storage/loft-hatch/` |
| `loft-storage-rooms.png` | Loft Storage Rooms | `/loft-storage/loft-storage-rooms/` |

## Wiring them up (the remaining launch task)

Social crawlers (Facebook, LinkedIn, X) **do not run JavaScript**, so the
per-page `og:*` / `twitter:*` tags must be present in the **server-rendered
HTML** of each URL — this is the prerender step noted in the launch plan. The
current SPA only ever serves the homepage's tags, which is why every share
preview still shows the homepage.

Per page, output (example: the Sheep Wool page):

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Loft Insulation Installer">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="Sheep Wool Loft Insulation | Natural, Breathable — Accredited Installers">
<meta property="og:description" content="Natural British sheep's wool loft insulation, fitted by accredited local installers. Breathable, ideal for period homes. Free, no-obligation survey.">
<meta property="og:url" content="https://loftinsulationinstaller.co.uk/loft-insulation/sheep-wool/">
<meta property="og:image" content="https://loftinsulationinstaller.co.uk/og/sheep-wool.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Sheep wool loft insulation, installed by accredited local experts">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sheep Wool Loft Insulation | Accredited Installers">
<meta name="twitter:description" content="Natural, breathable British sheep's wool loft insulation. Free, no-obligation survey.">
<meta name="twitter:image" content="https://loftinsulationinstaller.co.uk/og/sheep-wool.png">
```

Use **absolute** `og:image` URLs (crawlers reject relative paths), and add a
matching `<link rel="canonical">` per page. In Next.js this is the
`generateMetadata()` per route (drop the PNGs in `/public/og/`); in Astro, set
them in each page's `<head>`.

## Re-generating / editing

Open `og-images.html`, edit the `CARDS` array (headline, eyebrow, trust
points, photo, object-position), then re-screenshot each card at 1200×630.
Headlines follow the brand signature: end with a full stop, key phrase swiped
in the grass-green marker.

> Source captures were taken at the preview width and upscaled to 1200×630 —
> fine for share thumbnails (they display small). For pixel-perfect originals,
> render `og-images.html` at full size in a 1200×630 viewport and export each
> card directly.
