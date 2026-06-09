# Loft Insulation Installer — Design System

A brand & UI design system for **Loft Insulation Installer**, a UK home-services
company that fits **eco-friendly loft insulation** and **practical loft storage /
boarding**. The promise: *warmer, more energy-efficient, more functional homes,
with less environmental impact.*

This system contains the brand foundations (logo, colour, type, gradients,
imagery), reusable React UI primitives, a marketing-website UI kit, and sample
brand-guideline slides — everything needed to design on-brand artifacts or
production interfaces.

## Source
- **Figma:** "Loft Insulation Installer.fig" — a brand-guidelines document
  (29 frames @ 1512×1080: cover, logo guide, colour palette, typeface,
  gradients, imagery, tone of voice, mission/vision/values, personas, etc.).
  Mounted read-only during authoring; not all readers will have access.
- All colour values, copy, the logomark and the three photographs were taken
  directly from that file. Photos were downscaled to ~1600px for the web.

---

## Content fundamentals

**Voice — Responsible · Trustworthy · Approachable.** The brand describes its
own voice as *"a steady beacon, always recognisable, and always 'us'."*

- **Person:** Warm second person — talks to **"you" / "your home"** — while the
  company speaks as **"we / our"**. Friendly partner, never a faceless trade.
- **Tone:** Reassuring, plain-English, benefit-led. Simplifies a technical
  subject ("keep heat where it belongs") rather than showing off jargon.
  Honest and transparent about materials and savings.
- **Sustainability runs through everything** — "eco-friendly", "sustainable
  materials", "greener future", "energy-efficient" appear often, but as genuine
  benefits, not greenwash.
- **Casing:** Sentence case for body and UI. **The logotype is always lowercase**
  ("loft insulation installer"). Headlines frequently **end with a full stop** —
  *"Colour Palette." "Imagery." "Warmer homes, lower bills."* — a brand signature.
- **British English & spelling:** colour, optimise, prioritise, personalised.
  Prices in **£**, postcodes and "UK-wide" framing.
- **No emoji.** The brand never uses emoji in copy or UI. Use the icon set instead.
- **Example lines:**
  - *"Warmer homes, lower bills."*
  - *"We make homes warmer, more energy-efficient, and highly functional while reducing environmental impact."*
  - *"Free, no-obligation quote — most surveys booked within 48 hours."*
  - *"You're working with a trusted partner, not just a standard loft insulation provider."*

---

## Visual foundations

**Overall vibe:** clean, warm, trustworthy and a little bold. Deep teals do the
heavy lifting; one hot orange accent gives energy; grass green keeps it fresh
and eco. Lots of white space on light pages; rich dark panels for impact.

### Colour
- **Named brand palette:** Dark Slate `#0C282E`, True Teal `#0B4C5B`,
  Warm Orange `#F66904`, Grass Green `#C6E299`, Stone Grey `#3B5156`,
  Cool Mist `#EBEFEF`, plus White.
- **Roles:** teal family = backgrounds/panels/headings; **orange = the single
  hot accent** (CTAs, the heat-wave, links/highlights) — used sparingly;
  green = highlight/marker + eco cues; stone grey = body text on light; cool
  mist / neutral-50 = light section surfaces.
- Logo guidance: **teal-&-orange on light**, **white-&-orange on dark**.
- Tokens in `tokens/colors.css` (base ramps + semantic aliases).

### Type
- **One typeface: Encode Sans** (a warm, humanist sans superfamily) for *all*
  brand communications — chosen partly for accessibility/legibility.
  - **Headings:** Encode Sans **SemiCondensed, Bold** — tight, confident.
  - **Body:** Encode Sans **Semi Expanded, Medium** — open, legible.
- Loaded from Google Fonts (exact family — see "Fonts" note below).
- Scale, weights and tracking in `tokens/typography.css`.

### The signature devices
- **Green marker heading.** Titles sit on a hand-swiped **grass-green marker**
  block (slightly irregular corners), and usually end with a full stop. See
  `.lii-marker` / the `SectionHeading` component.
- **Heat-wave gradients.** Backgrounds are built by overlaying a soft **white
  linear/radial gradient** (the "heat wave" from the logomark) onto a brand
  colour — adding depth without new colours. See `.lii-wave-panel` / `WavePanel`.
- **Layered waves.** The cover/section backgrounds use big overlapping wave
  shapes in tonal teals.
- **Folded orange corner.** A small orange triangle folds up the bottom-right
  of guideline pages (`.lii-corner`).

### Surfaces, depth & shape
- **Corner radii:** 8px is the default card/panel radius; **20px** for large
  brand frames/hero panels; **pill** for buttons and chips.
- **Cards:** white, hairline `#DCE3E3` border, soft radius (12px), subtle
  shadow; `raised` drops the border for a floating look; `interactive` lifts
  3px on hover.
- **Shadows:** soft and **cool-toned** (rgba of dark slate), three steps
  (sm / md / lg). No hard or warm shadows.

### Motion & states
- **Calm motion:** short ease-out fades/slides (140–400ms), **no bounce**, no
  infinite loops. `--ease-out` `cubic-bezier(0.22,1,0.36,1)`.
- **Hover:** orange CTA darkens (`#D95A00`); teal button → dark slate; outline
  fills in; cards lift. Links turn orange.
- **Press:** buttons nudge down 1px and shrink ~1% (`translateY(1px) scale(.99)`).
- **Focus:** orange focus ring `0 0 0 3px rgba(246,105,4,.35)`.

### Imagery
- **Real, high-quality, professional, well-lit photography** of insulation work
  — installers in PPE fitting loft insulation, rolls of mineral wool, real
  lofts. Warm, natural light; authentic and on-the-job (not stocky studio shots).
- Presented in rounded cards (12–16px) with soft shadow; brand colour blocks
  sit alongside photos in mood boards.
- Three brand photos are in `assets/imagery-1..3.jpg`.

---

## Iconography

- **No icon font ships in the source file.** The brand's only bespoke marks are
  the **logomark** (rounded-pentagon house + heat wave) and a few thin line
  arrows (e.g. the "Return to contents →" arrow).
- **UI icon set — substitution (flag):** for product UI we standardise on a
  **2px round stroke** line set in the **Lucide** style, which matches the
  friendly-geometric feel of the mark. The kit ships its own small inline set
  in `ui_kits/website/Icons.jsx` (`window.LIIcons`: Home, Box, Leaf, Shield,
  Thermometer, Phone, Check, CheckCircle, Arrow, Star, Pound, Clock, MapPin…).
  If you need more, pull from [Lucide](https://lucide.dev) (CDN) at the same
  weight. **This is a substitution, not a brand-supplied set — confirm with the
  brand owner.**
- **Never** draw bespoke pictographs by hand or use **emoji** as icons.
- Logo files live in `assets/` as recolourable SVGs:
  `logomark-teal.svg`, `logomark-white.svg`, `logomark-mono-white.svg`,
  `logomark-mono-dark.svg`. In React, prefer the `Logo` component (inline SVG,
  path-independent, recolourable).

---

## Fonts note
Encode Sans is loaded via Google Fonts (`tokens/fonts.css`) — this is the exact
brand family, so it's **not a substitution**. The compiler reports "Fonts: none"
only because the `@font-face` rules live on Google's CDN rather than in this
repo; consumers linking `styles.css` still get the correct fonts. If fully
self-hosted webfont files are required, drop the `.woff2` files into `assets/`
and add `@font-face` rules — **ask the brand owner for licensed files**.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this); `@import`s all tokens +
  component styles.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`
(radii/shadows/motion/layout), `base.css` (element defaults + `.lii-eyebrow`,
`.lii-marker`, `.lii-wave-panel`, `.lii-corner`).

**`components/`** (namespace `window.LoftInsulationInstallerDesignSystem_1e8c5d`)
- `brand/` — **Logo**, **WavePanel**
- `actions/` — **Button**
- `forms/` — **Input**, **Checkbox**
- `content/` — **Card**, **Badge**, **SectionHeading**
- `components.css` — class-based component states.

**`ui_kits/website/`** — interactive marketing site (Home + Quote flow). See its
`README.md`.

**`slides/`** — sample brand-guideline slides (1280×720): `title`, `section`,
`content`, `values`.

**`guidelines/`** — foundation specimen cards shown in the Design System tab
(Colors, Type, Spacing, Brand).

**`assets/`** — logomark SVGs (4 variants) + three brand photographs.
