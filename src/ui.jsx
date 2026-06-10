import React from 'react';

// Self-contained UI primitives: apply the design-system classes/tokens
// (from _ds/.../styles.css) with no dependency on the compiled bundle.

/* ---------- Icons (Lucide-style, 2px round stroke) ---------- */
const Ico = ({ d, size = 24, fill = "none", ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {Array.isArray(d) ? d.map((x, i) => <path key={i} d={x} />) : <path d={d} />}
  </svg>
);
const I = {
  Home:   (p) => <Ico d={["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5"]} {...p} />,
  Leaf:   (p) => <Ico d={["M11 20A7 7 0 0 1 4 13C4 8 8 4 20 4c0 12-4 16-9 16Z", "M11 20c0-5 2-8 6-10"]} {...p} />,
  Sprout: (p) => <Ico d={["M12 21V9", "M12 9C12 6 9.5 4 6 4c0 3.5 2.5 5 6 5Z", "M12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z"]} {...p} />,
  Recycle:(p) => <Ico d={["M7 19H4.5a2 2 0 0 1-1.7-3l2-3.5", "M9.8 7 12 3l2.2 4 .8 1.4", "M17 10l2.3 4a2 2 0 0 1-1.7 3H14", "M10 19h4l-1.5-2.5M5.5 12 7 9.5l2.6 1.3M18.5 12 17 9.5l-2.6 1.5"]} {...p} />,
  Foil:   (p) => <Ico d={["M3 6c3 1.5 6 1.5 9 0s6-1.5 9 0", "M3 12c3 1.5 6 1.5 9 0s6-1.5 9 0", "M3 18c3 1.5 6 1.5 9 0s6-1.5 9 0"]} {...p} />,
  Thermometer: (p) => <Ico d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z" {...p} />,
  Pound:  (p) => <Ico d="M16 6a4 4 0 0 0-7 2.7V18M7 14h7M6 18h11" {...p} />,
  Snow:   (p) => <Ico d={["M12 2v20", "M4 6l16 12M20 6 4 18", "M9 4l3 2 3-2M9 20l3-2 3 2M4.5 9.5 6 8.5 4.5 7.5M19.5 16.5 18 15.5l1.5-1"]} {...p} />,
  Shield: (p) => <Ico d={["M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z", "m9 12 2 2 4-4"]} {...p} />,
  ShieldCheck: (p) => <Ico d={["M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z", "m9 12 2 2 4-4"]} {...p} />,
  Trend:  (p) => <Ico d={["M3 17l6-6 4 4 8-8", "M21 7h-6M21 7v6"]} {...p} />,
  Cloud:  (p) => <Ico d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.5A3.5 3.5 0 0 1 18 18Z" {...p} />,
  Check:  (p) => <Ico d="m20 6-11 11-5-5" {...p} />,
  CheckCircle: (p) => <Ico d={["M21 12a9 9 0 1 1-3.2-6.9", "m8.5 12 2.5 2.5L17 8"]} {...p} />,
  Arrow:  (p) => <Ico d={["M5 12h14", "m13 6 6 6-6 6"]} {...p} />,
  ArrowDown: (p) => <Ico d={["M12 5v14", "m6 13 6 6 6-6"]} {...p} />,
  Star:   (p) => <Ico d="M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17.8 6.5 20l1-6.1L3 9.5l6.3-.9z" {...p} />,
  Clock:  (p) => <Ico d={["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M12 7v5l3 2"]} {...p} />,
  Wrench: (p) => <Ico d="M14.5 5.5a3.5 3.5 0 0 0 4.6 4.6l-9.2 9.2a2 2 0 0 1-2.8-2.8l9.2-9.2-1.8-1.8Z" {...p} />,
  Droplet:(p) => <Ico d="M12 3s6 5.7 6 10a6 6 0 0 1-12 0c0-4.3 6-10 6-10Z" {...p} />,
  Sparkle:(p) => <Ico d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" {...p} />,
  Smile:  (p) => <Ico d={["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M8.5 14a4 4 0 0 0 7 0", "M9 9.5h.01M15 9.5h.01"]} {...p} />,
  Award:  (p) => <Ico d={["M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z", "M9 12.5 7.5 21 12 18.5 16.5 21 15 12.5"]} {...p} />,
  Rat:    (p) => <Ico d={["M16 9a4 4 0 1 0-4 4h4a3 3 0 0 1 3 3v2", "M16 5a2 2 0 1 1 3 1.7M9 9h.01"]} {...p} />,
  Bug:    (p) => <Ico d={["M8 9a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0Z", "M3 9h3M18 9h3M3 14h3M18 14h3M3 19l3-2M18 17l3 2M9 5 7.5 3M15 5l1.5-2"]} {...p} />,
  Scan:   (p) => <Ico d={["M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2", "M4 12h16"]} {...p} />,
  Box:    (p) => <Ico d={["M21 8 12 3 3 8v8l9 5 9-5Z", "M3 8l9 5 9-5M12 13v8"]} {...p} />,
  Layers: (p) => <Ico d={["M12 3 3 8l9 5 9-5-9-5Z", "M3 13l9 5 9-5", "M3 16.5 12 21l9-4.5"]} {...p} />,
  Ladder: (p) => <Ico d={["M7 3v18M17 3v18", "M7 7h10M7 11h10M7 15h10"]} {...p} />,
  Hatch:  (p) => <Ico d={["M4 4h16v16H4z", "M4 9h16", "M9 9v11", "M14 6.5h.01"]} {...p} />,
  Lock:   (p) => <Ico d={["M6 11h12v9H6z", "M9 11V8a3 3 0 0 1 6 0v3"]} {...p} />,
  Ruler:  (p) => <Ico d={["M3 16 16 3l5 5L8 21Z", "M7 9l2 2M10 6l2 2M13 12l2 2M16 9l2 2"]} {...p} />,
  Sun:    (p) => <Ico d={["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z", "M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"]} {...p} />,
  Volume: (p) => <Ico d={["M4 9v6h4l5 4V5L8 9Z", "M17 8a5 5 0 0 1 0 8M19.5 5.5a9 9 0 0 1 0 13"]} {...p} />,
  Hammer: (p) => <Ico d={["M14 6 9.5 10.5 6 7l4.5-4.5L14 6Z", "m11.5 8.5 9 9a2 2 0 0 1-2.8 2.8l-9-9", "m6 7-3.5 3.5a2 2 0 0 0 0 2.8L4 16"]} {...p} />,
  Sofa:   (p) => <Ico d={["M4 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3", "M3 12a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2", "M5 17v2M19 17v2"]} {...p} />,
  Mountain:(p) => <Ico d="m3 19 6-10 4 6 2-3 6 7Z" {...p} />,
  Landmark:(p) => <Ico d={["M3 9 12 4l9 5", "M5 9v8M9.5 9v8M14.5 9v8M19 9v8", "M3.5 21h17M3 17.5h18"]} {...p} />,
  Frame:  (p) => <Ico d={["M12 3 4 21", "M12 3l8 18", "M6.4 15h11.2", "M2.5 21h19"]} {...p} />,
  Chevron:(p) => <Ico d="m6 9 6 6 6-6" {...p} />,
  ArrowRightCircle: (p) => <Ico d={["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", "M11 8l4 4-4 4M8 12h7"]} {...p} />,
  Facebook:(p) => <Ico d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z" {...p} />,
  Linkedin:(p) => <Ico d={["M7 9v8M7 6v.01M11 17v-4a2 2 0 0 1 4 0v4M11 9v8M15 17v-4", "M4 4h16v16H4z"]} {...p} />,
  Instagram:(p) => <Ico d={["M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM16.5 7.5h.01"]} {...p} />,
  Menu:   (p) => <Ico d={["M3 6h18", "M3 12h18", "M3 18h18"]} {...p} />,
  Plus:   (p) => <Ico d={["M12 5v14", "M5 12h14"]} {...p} />,
  X:      (p) => <Ico d={["M6 6l12 12", "M18 6 6 18"]} {...p} />,
  MapPin: (p) => <Ico d={["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"]} {...p} />,
  Phone:  (p) => <Ico d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" {...p} />,
};

/* ---------- Logo (inline, recolourable) ---------- */
const LOGO_HOUSE = "M 40.074 3.07 C 35.628 -1.001 28.817 -1.026 24.34 3.011 L 3.864 21.477 C 1.404 23.696 0 26.853 0 30.165 L 0 58.874 C 0 65.335 5.238 70.573 11.698 70.573 L 52.302 70.573 C 58.762 70.573 64 65.335 64 58.874 L 64 30.125 C 64 26.843 62.622 23.712 60.201 21.496 L 40.074 3.07 Z M 28.027 7.099 C 30.397 4.962 34.003 4.975 36.357 7.13 L 56.484 25.557 C 57.765 26.73 58.495 28.387 58.495 30.125 L 58.495 58.874 C 58.495 62.295 55.722 65.068 52.302 65.068 L 11.698 65.068 C 8.278 65.068 5.505 62.295 5.505 58.874 L 5.505 30.165 C 5.505 28.411 6.248 26.74 7.551 25.566 L 28.027 7.099 Z M 51.579 28.341 L 35.385 13.536 C 33.555 11.863 30.754 11.853 28.911 13.512 L 12.448 28.338 C 11.434 29.252 10.855 30.553 10.855 31.918 L 10.855 31.93 C 19.78 28.438 23.434 31.25 27.853 34.652 C 29.795 36.146 31.885 37.755 34.634 38.992 C 40.838 41.784 49.864 37.889 53.145 34.909 L 53.145 31.896 C 53.145 30.544 52.577 29.254 51.579 28.341 Z M 10.855 55.015 L 10.855 47.926 C 13.526 42.553 23.973 36.53 33.482 44.273 C 33.896 44.611 34.333 44.996 34.796 45.404 L 34.796 45.404 C 38.437 48.612 43.733 53.277 53.145 48.153 L 53.145 55.015 C 53.145 57.676 50.989 59.832 48.328 59.832 L 15.672 59.832 C 13.011 59.832 10.855 57.676 10.855 55.015 Z";
const LOGO_WAVE = "M 24.53 1.262 L 40.724 16.067 C 41.722 16.979 42.291 18.269 42.291 19.622 L 42.291 22.635 C 39.01 25.615 29.984 29.51 23.779 26.718 C 21.03 25.48 18.94 23.872 16.999 22.378 C 12.579 18.976 8.925 16.164 0 19.656 L 0 19.643 C 0 18.278 0.579 16.977 1.593 16.064 L 18.057 1.238 C 19.899 -0.422 22.7 -0.411 24.53 1.262 Z M 0 35.652 L 0 42.741 C 0 45.401 2.157 47.558 4.817 47.558 L 37.474 47.558 C 40.134 47.558 42.291 45.401 42.291 42.741 L 42.291 35.879 C 32.878 41.002 27.583 36.337 23.942 33.13 C 23.478 32.721 23.042 32.337 22.627 31.999 C 13.119 24.256 2.671 30.279 0 35.652 Z";
const LOGO_COLORS = {
  teal:  { h: "#0B4C5B", w: "#F66904", t: "#0B4C5B" },
  white: { h: "#FFFFFF", w: "#F66904", t: "#FFFFFF" },
};
function Logo({ variant = "teal", size = 42, wordmark = true, onClick }) {
  const c = LOGO_COLORS[variant] || LOGO_COLORS.teal;
  const w = (64 / 70.573) * size;
  return (
    <span onClick={onClick} aria-label="Loft Insulation Installer home" role={onClick ? "button" : "img"}
          style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32, cursor: onClick ? "pointer" : "default" }}>
      <svg width={w} height={size} viewBox="0 0 64 70.573" fill="none" style={{ flex: "none" }}>
        <path d={LOGO_HOUSE} fill={c.h} fillRule="evenodd" />
        <g transform="translate(10.854 12.274)"><path d={LOGO_WAVE} fill={c.w} fillRule="evenodd" /></g>
      </svg>
      {wordmark && (
        <span aria-hidden="true" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: size * 0.44, lineHeight: 0.92, letterSpacing: "-0.01em", textTransform: "lowercase", color: c.t }}>
          loft<br />insulation<br />installer
        </span>
      )}
    </span>
  );
}

/* ---------- Primitives ---------- */
function Button({ variant = "primary", size = "md", block, onDark, href, onClick, children, type, leftIcon, rightIcon, style, className = "", disabled }) {
  const cls = ["lii-btn", `lii-btn--${variant}`, `lii-btn--${size}`, block && "lii-btn--block", onDark && "lii-btn--on-dark", className].filter(Boolean).join(" ");
  const inner = <>{leftIcon}{children}{rightIcon}</>;
  if (href) return <a className={cls} href={href} onClick={onClick} style={style}>{inner}</a>;
  return <button className={cls} type={type || "button"} onClick={onClick} style={style} disabled={disabled}>{inner}</button>;
}
const Card = ({ raised, interactive, className = "", children, ...p }) =>
  <div className={["lii-card", raised && "lii-card--raised", interactive && "lii-card--interactive", className].filter(Boolean).join(" ")} {...p}>{children}</div>;
const Badge = ({ tone = "orange", children, style }) => <span className={`lii-badge lii-badge--${tone}`} style={style}>{children}</span>;
function WavePanel({ color = "teal", radius, className = "", style = {}, children, ...p }) {
  const base = { teal: "var(--lii-true-teal)", "true-teal": "var(--lii-true-teal)", "dark-slate": "var(--lii-dark-slate)", green: "var(--lii-grass-green)", orange: "var(--lii-warm-orange)" }[color] || color;
  return <div className={`lii-wave-panel ${className}`} style={{ backgroundColor: base, "--wave-color": base, ...(radius ? { borderRadius: radius } : {}), ...style }} {...p}>{children}</div>;
}
function SectionHead({ eyebrow, title, marker, sub, center, onDark }) {
  return (
    <div className={`section__head ${center ? "center" : ""}`}>
      {eyebrow && <div className="eyebrow-row" style={center ? { justifyContent: "center" } : {}}><span className="lii-eyebrow">{eyebrow}</span></div>}
      <h2>{marker ? <span className="lii-marker">{title}</span> : title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
function Stars({ n = 5, size = 16 }) {
  return <span className="stars" style={{ display: "inline-flex", gap: 2 }}>{Array.from({ length: n }).map((_, i) => <I.Star key={i} size={size} fill="currentColor" />)}</span>;
}

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    // safety: reveal anything still hidden after a moment
    const t = setTimeout(() => els.forEach((el) => el.classList.add("in")), 1200);
    return () => { io.disconnect(); clearTimeout(t); };
  });
}

export { I as LIcons, Logo, Button, Card, Badge, WavePanel, SectionHead, Stars, useReveal };
