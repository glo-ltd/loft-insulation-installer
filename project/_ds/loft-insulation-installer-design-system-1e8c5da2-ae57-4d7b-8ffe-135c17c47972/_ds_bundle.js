/* @ds-bundle: {"format":3,"namespace":"LoftInsulationInstallerDesignSystem_1e8c5d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"WavePanel","sourcePath":"components/brand/WavePanel.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d1ecd34462d4","components/brand/Logo.jsx":"c7e72079d712","components/brand/WavePanel.jsx":"9758805f8382","components/content/Badge.jsx":"edff6e6810ee","components/content/Card.jsx":"9f20bb37f223","components/content/SectionHeading.jsx":"e48d13c24c58","components/forms/Checkbox.jsx":"e36f8c5a66fc","components/forms/Input.jsx":"7a02ca8011da","ui_kits/website/Header.jsx":"022775ead769","ui_kits/website/Home.jsx":"d795e3107450","ui_kits/website/Icons.jsx":"96edfc30ee8e","ui_kits/website/Quote.jsx":"e4768489ebed","ui_kits/website/app.jsx":"611e59f07c6a","website/app.jsx":"d5eb23c2125c","website/chrome.jsx":"2a17aa196213","website/home.jsx":"5b749d2506f9","website/materials.jsx":"168ef1e7c9e5","website/ui.jsx":"e8fd573ad7b4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LoftInsulationInstallerDesignSystem_1e8c5d = window.LoftInsulationInstallerDesignSystem_1e8c5d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action button for Loft Insulation Installer. Pill-shaped,
 * Encode Sans bold. Renders as <button> or <a> (pass `href`).
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  onDark = false,
  href,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["lii-btn", `lii-btn--${variant}`, `lii-btn--${size}`, block && "lii-btn--block", onDark && "lii-btn--on-dark", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, rightIcon));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HOUSE = "M 40.074 3.07 C 35.628 -1.001 28.817 -1.026 24.34 3.011 L 3.864 21.477 C 1.404 23.696 0 26.853 0 30.165 L 0 58.874 C 0 65.335 5.238 70.573 11.698 70.573 L 52.302 70.573 C 58.762 70.573 64 65.335 64 58.874 L 64 30.125 C 64 26.843 62.622 23.712 60.201 21.496 L 40.074 3.07 Z M 28.027 7.099 C 30.397 4.962 34.003 4.975 36.357 7.13 L 56.484 25.557 C 57.765 26.73 58.495 28.387 58.495 30.125 L 58.495 58.874 C 58.495 62.295 55.722 65.068 52.302 65.068 L 11.698 65.068 C 8.278 65.068 5.505 62.295 5.505 58.874 L 5.505 30.165 C 5.505 28.411 6.248 26.74 7.551 25.566 L 28.027 7.099 Z M 51.579 28.341 L 35.385 13.536 C 33.555 11.863 30.754 11.853 28.911 13.512 L 12.448 28.338 C 11.434 29.252 10.855 30.553 10.855 31.918 L 10.855 31.93 C 19.78 28.438 23.434 31.25 27.853 34.652 C 29.795 36.146 31.885 37.755 34.634 38.992 C 40.838 41.784 49.864 37.889 53.145 34.909 L 53.145 31.896 C 53.145 30.544 52.577 29.254 51.579 28.341 Z M 10.855 55.015 L 10.855 47.926 C 13.526 42.553 23.973 36.53 33.482 44.273 C 33.896 44.611 34.333 44.996 34.796 45.404 L 34.796 45.404 C 38.437 48.612 43.733 53.277 53.145 48.153 L 53.145 55.015 C 53.145 57.676 50.989 59.832 48.328 59.832 L 15.672 59.832 C 13.011 59.832 10.855 57.676 10.855 55.015 Z";
const WAVE = "M 24.53 1.262 L 40.724 16.067 C 41.722 16.979 42.291 18.269 42.291 19.622 L 42.291 22.635 C 39.01 25.615 29.984 29.51 23.779 26.718 C 21.03 25.48 18.94 23.872 16.999 22.378 C 12.579 18.976 8.925 16.164 0 19.656 L 0 19.643 C 0 18.278 0.579 16.977 1.593 16.064 L 18.057 1.238 C 19.899 -0.422 22.7 -0.411 24.53 1.262 Z M 0 35.652 L 0 42.741 C 0 45.401 2.157 47.558 4.817 47.558 L 37.474 47.558 C 40.134 47.558 42.291 45.401 42.291 42.741 L 42.291 35.879 C 32.878 41.002 27.583 36.337 23.942 33.13 C 23.478 32.721 23.042 32.337 22.627 31.999 C 13.119 24.256 2.671 30.279 0 35.652 Z";
const VARIANTS = {
  teal: {
    house: "#0B4C5B",
    wave: "#F66904",
    word: "#0B4C5B"
  },
  white: {
    house: "#FFFFFF",
    wave: "#F66904",
    word: "#FFFFFF"
  },
  "mono-dark": {
    house: "#0C282E",
    wave: "#0C282E",
    word: "#0C282E"
  },
  "mono-white": {
    house: "#FFFFFF",
    wave: "#FFFFFF",
    word: "#FFFFFF"
  }
};

/**
 * Loft Insulation Installer logo — rounded-pentagon "house" mark with the
 * orange heat-wave motif, optionally locked up with the stacked lowercase
 * wordmark.
 */
function Logo({
  variant = "teal",
  showWordmark = true,
  size = 48,
  className = "",
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.teal;
  const markH = size;
  const markW = 64 / 70.573 * markH;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.34,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: markW,
    height: markH,
    viewBox: "0 0 64 70.573",
    fill: "none",
    role: "img",
    "aria-label": "Loft Insulation Installer",
    style: {
      flex: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: HOUSE,
    fill: v.house,
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(10.854 12.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: WAVE,
    fill: v.wave,
    fillRule: "evenodd"
  }))), showWordmark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: size * 0.5,
      lineHeight: 0.92,
      letterSpacing: "-0.01em",
      textTransform: "lowercase",
      color: v.word
    }
  }, "loft", /*#__PURE__*/React.createElement("br", null), "insulation", /*#__PURE__*/React.createElement("br", null), "installer"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/WavePanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  teal: "var(--lii-true-teal)",
  "dark-slate": "var(--lii-dark-slate)",
  green: "var(--lii-grass-green)",
  orange: "var(--lii-warm-orange)"
};

/**
 * Brand "heat-wave" panel — a white linear/radial gradient overlay on a
 * brand colour, echoing the logomark. Use as a hero/section background.
 */
function WavePanel({
  color = "teal",
  radius = "var(--radius-sm)",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const base = BASE[color] || color;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lii-wave-panel ${className}`,
    style: {
      "--wave-color": base,
      borderRadius: radius,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { WavePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WavePanel.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small pill label for tags, statuses and categories.
 */
function Badge({
  tone = "orange",
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lii-badge lii-badge--${tone} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container with soft radius and shadow. Use `raised` for a
 * floating card, `interactive` for hover lift (e.g. clickable service tiles).
 */
function Card({
  raised = false,
  interactive = false,
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const cls = ["lii-card", raised && "lii-card--raised", interactive && "lii-card--interactive", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section heading in the brand house style: a tracked uppercase eyebrow
 * above a heading whose key words can be wrapped in the grass-green marker.
 * Pass `marker` to swipe the whole title; or include <mark> in children.
 */
function SectionHeading({
  eyebrow,
  marker = false,
  level = 2,
  align = "left",
  className = "",
  children,
  style = {},
  ...rest
}) {
  const Tag = `h${level}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "lii-eyebrow",
    style: {
      marginBottom: "12px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0
    }
  }, marker ? /*#__PURE__*/React.createElement("span", {
    className: "lii-marker"
  }, children) : children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 7.5L5.5 11L12 3.5",
  stroke: "#fff",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Checkbox with label. Checked state fills with warm orange.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `lii-check ${className}`,
    style: disabled ? {
      opacity: 0.5,
      cursor: "not-allowed"
    } : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lii-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/**
 * Text input with label and hint/error text. Orange focus ring matches
 * the brand accent.
 */
function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const inputId = id || `lii-input-${++_id}`;
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: "lii-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lii-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: `lii-input ${error ? "lii-input--error" : ""} ${className}`,
    "aria-invalid": error ? "true" : undefined
  }, rest)), msg && /*#__PURE__*/React.createElement("span", {
    className: `lii-hint ${error ? "lii-hint--error" : ""}`
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Header + Footer for the marketing site.
const {
  Logo,
  Button
} = window.LoftInsulationInstallerDesignSystem_1e8c5d;
function Header({
  onNav,
  current
}) {
  const Ic = window.LIIcons;
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: current === id ? {
      color: "var(--lii-warm-orange)"
    } : undefined
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    "aria-label": "Home"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "teal",
    size: 34
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, link("services", "Services"), link("storage", "Loft Storage"), link("why", "Why Us"), link("about", "About")), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__phone"
  }, /*#__PURE__*/React.createElement(Ic.Phone, {
    size: 18
  }), " 0800 123 4567"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("quote")
  }, "Get a free quote"))));
}
function Footer({
  onNav
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, title), items.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("quote");
    }
  }, t)));
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    size: 36
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: "26em",
      fontSize: 15
    }
  }, "Warmer, more efficient UK homes through eco-friendly loft insulation and practical loft storage.")), col("Services", ["Loft insulation", "Loft storage", "Loft boarding", "Energy surveys"]), col("Company", ["About us", "Our process", "Reviews", "Careers"]), col("Support", ["Get a quote", "Contact", "FAQs", "Guarantee"])), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Loft Insulation Installer Ltd. Registered in England & Wales."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Home page for the marketing site.
const {
  Button,
  Card,
  Badge,
  SectionHeading,
  WavePanel
} = window.LoftInsulationInstallerDesignSystem_1e8c5d;
function Hero({
  onNav
}) {
  const Ic = window.LIIcons;
  return /*#__PURE__*/React.createElement(WavePanel, {
    color: "dark-slate",
    radius: "0",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    style: {
      marginBottom: 22
    }
  }, "Eco-friendly \xB7 UK-wide"), /*#__PURE__*/React.createElement("h1", null, "Warmer homes,", /*#__PURE__*/React.createElement("br", null), "lower bills."), /*#__PURE__*/React.createElement("p", null, "We help UK homeowners unlock the full potential of their homes \u2014 combining eco-friendly insulation with practical loft storage solutions."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("quote"),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Get a free quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onDark: true,
    onClick: () => onNav("services")
  }, "See our services"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery-1.jpg",
    alt: "Installer fitting loft insulation"
  }))));
}
function TrustBar() {
  const Ic = window.LIIcons;
  const items = [[Ic.Shield, "Fully insured & guaranteed"], [Ic.Leaf, "Sustainable materials"], [Ic.Star, "4.9/5 from 1,200+ homes"], [Ic.CheckCircle, "TrustMark registered"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "section--mist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap trust"
  }, items.map(([C, t], i) => /*#__PURE__*/React.createElement("span", {
    className: "trust__item",
    key: i
  }, /*#__PURE__*/React.createElement(C, {
    size: 20
  }), " ", t))));
}
const SERVICES = [["Thermometer", "Loft insulation", "Keep heat where it belongs. Professional, eco-friendly insulation that cuts bills and carbon."], ["Box", "Loft storage", "Turn unused loft space into safe, accessible storage with sturdy boarded flooring."], ["Home", "Loft boarding", "Raised, ventilated boarding that protects your insulation and gives you a usable floor."]];
function Services({
  onNav
}) {
  const Ic = window.LIIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    className: "section__head",
    eyebrow: "Our services",
    marker: true
  }, "What we do."), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, SERVICES.map(([icon, title, body]) => {
    const C = Ic[icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: title,
      interactive: true,
      className: "svc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "svc__icon"
    }, /*#__PURE__*/React.createElement(C, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body), /*#__PURE__*/React.createElement("a", {
      className: "svc__link",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav("quote");
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 16
    })));
  }))));
}
const STATS = [["12k+", "Homes insulated"], ["£480", "Avg. yearly saving"], ["27%", "Less heat lost"], ["4.9", "Average rating"]];
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(WavePanel, {
    color: "true-teal",
    radius: "var(--radius-xl)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, STATS.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "stat__l"
  }, l)))))));
}
const STEPS = [["Book a free survey", "Tell us about your home and pick a time. Our surveyor checks your loft and recommends the right solution."], ["We install, you relax", "Our accredited team fits everything cleanly and tidily — most lofts are done in a single day."], ["Enjoy a warmer home", "Feel the difference straight away, with lower bills and a comfier home all year round."]];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    className: "section__head",
    eyebrow: "How it works"
  }, "Simple from start to finish."), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(([title, body], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__n"
  }, i + 1), /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, body))))));
}
function Testimonial() {
  const Ic = window.LIIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-card__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery-2.jpg",
    alt: "Customer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "quote-card__stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Ic.Star, {
    key: i,
    size: 20,
    fill: "var(--lii-warm-orange)"
  }))), /*#__PURE__*/React.createElement("blockquote", null, "\u201CClean, quick and genuinely friendly. Our bedroom upstairs is finally warm \u2014 and the storage boarding is brilliant.\u201D"), /*#__PURE__*/React.createElement("cite", null, "Sarah & Tom \u2014 Manchester")))));
}
function CtaBand({
  onNav
}) {
  const Ic = window.LIIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(WavePanel, {
    color: "orange",
    radius: "var(--radius-xl)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready for a warmer, cheaper home?"), /*#__PURE__*/React.createElement("p", null, "Get a free, no-obligation quote today. Most surveys are booked within 48 hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("quote"),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Get my free quote")))));
}
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Services, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(CtaBand, {
    onNav: onNav
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Loft Insulation Installer — UI kit icon set.
// Stroke icons in the Lucide style (2px round) — the brand has no icon
// font; this is the recommended UI set. See ICONOGRAPHY in readme.md.
const I = ({
  children,
  size = 24,
  ...p
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), children);
const Icons = {
  Home: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  })),
  Box: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9-4 9 4v10l-9 4-9-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 4 9-4M12 11v10"
  })),
  Leaf: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13C4 8 8 4 20 4c0 12-4 16-9 16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20c0-5 2-8 6-10"
  })),
  Shield: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  Thermometer: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z"
  })),
  Phone: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
  })),
  Check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m20 6-11 11-5-5"
  })),
  CheckCircle: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.5 12 2.5 2.5 4.5-5"
  })),
  Arrow: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  })),
  Star: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17.8 6.5 20l1-6.1L3 9.5l6.3-.9z"
  })),
  Menu: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  Pound: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M16 6a4 4 0 0 0-7 2.7V18M7 14h7M6 18h11"
  })),
  Clock: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  MapPin: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  Quote: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 7H4v6h5v-2c0 2-1 3-3 3M17 7h-3v6h5v-2c0 2-1 3-3 3"
  }))
};
window.LIIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Quote.jsx
try { (() => {
// Get-a-quote page — interactive form with a success state.
const {
  Button,
  Card,
  Input,
  Checkbox,
  SectionHeading,
  WavePanel
} = window.LoftInsulationInstallerDesignSystem_1e8c5d;
function QuoteAside() {
  const Ic = window.LIIcons;
  const points = [[Ic.Pound, "Free, no-obligation quote"], [Ic.Clock, "Survey booked within 48 hours"], [Ic.Leaf, "Eco-friendly, A-rated materials"], [Ic.Shield, "Workmanship guaranteed"]];
  return /*#__PURE__*/React.createElement("aside", {
    className: "quote-aside"
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "aside-card"
  }, /*#__PURE__*/React.createElement("h4", null, "What you get"), /*#__PURE__*/React.createElement("ul", {
    className: "aside-list"
  }, points.map(([C, t]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Ic.Check, {
    size: 20
  }), " ", t)))), /*#__PURE__*/React.createElement(WavePanel, {
    color: "true-teal",
    radius: "var(--radius-md)",
    style: {
      padding: 28,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--lii-grass-green)"
    }
  }, "Prefer to talk?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 26
    }
  }, /*#__PURE__*/React.createElement(Ic.Phone, {
    size: 22
  }), " 0800 123 4567"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      color: "var(--text-on-dark-muted)",
      fontSize: 14
    }
  }, "Mon\u2013Sat, 8am\u20137pm. Friendly UK team.")));
}
function QuoteForm() {
  const Ic = window.LIIcons;
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement(Card, {
      raised: true,
      className: "quote-form"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "24px 8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#E2F2EA",
        color: "var(--color-success)",
        display: "grid",
        placeItems: "center",
        margin: "0 auto 18px"
      }
    }, /*#__PURE__*/React.createElement(Ic.CheckCircle, {
      size: 34
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        color: "var(--text-heading)",
        fontSize: 26,
        margin: "0 0 10px"
      }
    }, "Quote request sent!"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 auto 22px",
        maxWidth: "28em"
      }
    }, "Thanks \u2014 a member of our team will be in touch within 24 hours to book your free survey."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Send another")));
  }
  return /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "quote-form"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Smith",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "quote-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@example.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "07700 900123"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Postcode",
    placeholder: "M1 4WP",
    hint: "We cover most of the UK mainland.",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tell us about your loft (optional)",
    placeholder: "Age of home, current insulation, storage needs\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like a free loft storage assessment too",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about my quote",
    required: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit",
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Request my free quote")));
}
function QuotePage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WavePanel, {
    color: "dark-slate",
    radius: "0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: "56px 24px 40px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Free & no-obligation",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, "Get your free quote.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: 18,
      maxWidth: "36em",
      margin: "12px 0 0"
    }
  }, "Tell us a little about your home and we'll arrange a free survey at a time that suits you."))), /*#__PURE__*/React.createElement("div", {
    className: "wrap quote-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-layout"
  }, /*#__PURE__*/React.createElement(QuoteForm, null), /*#__PURE__*/React.createElement(QuoteAside, null))));
}
window.QuotePage = QuotePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
// App shell + simple client-side routing for the marketing site.
function App() {
  const [page, setPage] = React.useState("home");
  const onNav = id => {
    if (id === "quote") {
      setPage("quote");
      window.scrollTo(0, 0);
      return;
    }
    const goScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: "smooth"
      });else window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    if (page !== "home") {
      setPage("home");
      setTimeout(goScroll, 60);
    } else goScroll();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: onNav,
    current: page === "quote" ? "quote" : "home"
  }), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    onNav: onNav
  }) : /*#__PURE__*/React.createElement(QuotePage, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// website/app.jsx
try { (() => {
// App shell + routing.
const {
  TopBar,
  Header,
  Footer,
  HomePage,
  MaterialPage
} = window;
const MATERIAL_PAGES = ["sheep-wool", "recycled-plastic", "foil", "conservatory"];
function App() {
  const [page, setPage] = React.useState("home");
  const onNav = (target, anchor) => {
    if (target === page && anchor) {
      scrollTo(anchor);
      return;
    }
    setPage(target);
    window.scrollTo(0, 0);
    if (anchor) setTimeout(() => scrollTo(anchor), 80);
  };
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Header, {
    onNav: onNav,
    page: page
  }), page === "home" ? /*#__PURE__*/React.createElement(HomePage, {
    onNav: onNav
  }) : /*#__PURE__*/React.createElement(MaterialPage, {
    id: MATERIAL_PAGES.includes(page) ? page : "sheep-wool",
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/app.jsx", error: String((e && e.message) || e) }); }

// website/chrome.jsx
try { (() => {
// Shared chrome: top bar, header nav, callback form, CTA band, footer.
const {
  LIcons,
  Logo,
  Button,
  Card,
  Badge,
  WavePanel,
  Field,
  SectionHead
} = window;
const NAV = [["sheep-wool", "Sheep Wool"], ["recycled-plastic", "Recycled Plastic"], ["foil", "Foil"], ["conservatory", "Conservatory"]];
function TopBar() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap topbar__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@loftinsulationinstaller.co.uk"
  }, /*#__PURE__*/React.createElement(Ic.Mail, {
    size: 15
  }), " contact@loftinsulationinstaller.co.uk"), /*#__PURE__*/React.createElement("span", {
    className: "hideable",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Ic.MapPin, {
    size: 15
  }), " Covering the whole of the UK"), /*#__PURE__*/React.createElement("span", {
    className: "topbar__spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hideable",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Ic.Leaf, {
    size: 15
  }), " Sustainable & eco-friendly"), /*#__PURE__*/React.createElement("span", {
    className: "topbar__socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(Ic.Facebook, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Ic.Linkedin, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Ic.Instagram, {
    size: 16
  })))));
}
function Header({
  onNav,
  page
}) {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(false);
  const go = (id, anchor) => {
    setOpen(false);
    onNav(id, anchor);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav__in"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "teal",
    size: 36,
    onClick: () => go("home")
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: page === id ? {
      color: "var(--lii-warm-orange)"
    } : undefined
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__phone hideable",
    href: "mailto:contact@loftinsulationinstaller.co.uk"
  }, /*#__PURE__*/React.createElement(Ic.Mail, {
    size: 18
  }), " Get in touch"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("home", "callback")
  }, "Request a callback"), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    "aria-label": "Menu",
    onClick: () => setOpen(!open)
  }, open ? /*#__PURE__*/React.createElement(Ic.Plus, {
    size: 26,
    style: {
      transform: "rotate(45deg)"
    }
  }) : /*#__PURE__*/React.createElement(Ic.Menu, {
    size: 26
  })))), /*#__PURE__*/React.createElement("div", {
    className: `mobile-menu ${open ? "open" : ""}`
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home", "callback");
    }
  }, "Request a callback")));
}
const INSULATION_TYPES = ["Sheep Wool (house is pre-1920)", "SuperFOIL (house is 1920–1965)", "Recycled Plastic (house is post-1965)", "Not sure — please advise"];
function CallbackSection({
  preset
}) {
  const Ic = LIcons;
  const [sent, setSent] = React.useState(false);
  const [type, setType] = React.useState(preset || "");
  React.useEffect(() => {
    if (preset) setType(preset);
  }, [preset]);
  const points = [[Ic.Pound, "Free, no-obligation quote & home assessment"], [Ic.Award, "Accredited, fully-insured local installers"], [Ic.Leaf, "Sustainable, eco-friendly materials"], [Ic.Wrench, "Funding options available"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist",
    id: "callback"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Book a free survey",
    title: "Request a callback.",
    sub: "Send us your enquiry and a member of our team will get back to you as soon as possible \u2014 with advice and recommendations for your sustainable insulation."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cb"
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "cb__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "26px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      borderRadius: "50%",
      background: "#E2F2EA",
      color: "var(--color-success)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 18px"
    }
  }, /*#__PURE__*/React.createElement(Ic.CheckCircle, {
    size: 36
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      color: "var(--text-heading)",
      fontSize: 27,
      margin: "0 0 10px"
    }
  }, "Thanks \u2014 request received!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 22px",
      maxWidth: "30em"
    }
  }, "A member of our team will call you back shortly to arrange your free, no-obligation survey."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another enquiry")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      window.scrollTo({
        top: document.getElementById("callback").offsetTop - 80,
        behavior: "smooth"
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cb__row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    placeholder: "Jane",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    placeholder: "Smith",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cb__row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    type: "email",
    placeholder: "jane@example.com",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    type: "tel",
    placeholder: "07700 900123",
    required: true
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Postcode"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    placeholder: "e.g. M1 4WP",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Type of insulation"
  }, /*#__PURE__*/React.createElement("select", {
    className: "lii-input",
    value: type,
    onChange: e => setType(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose type of insulation\u2026"), INSULATION_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t)))), /*#__PURE__*/React.createElement(Field, {
    label: "Your message (optional)"
  }, /*#__PURE__*/React.createElement("input", {
    className: "lii-input",
    placeholder: "Tell us about your loft, current insulation, funding questions\u2026"
  })), /*#__PURE__*/React.createElement("label", {
    className: "lii-check",
    style: {
      margin: "4px 0 22px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "lii-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 7.5 5.5 11 12 3.5",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "I agree to be contacted about my enquiry.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit",
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Request my callback"))), /*#__PURE__*/React.createElement("aside", {
    className: "cb__aside"
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    style: {
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      color: "var(--text-heading)",
      fontSize: 21,
      margin: "0 0 18px"
    }
  }, "What you get"), /*#__PURE__*/React.createElement("ul", {
    className: "cb__points"
  }, points.map(([C, t]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Ic.Check, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement(WavePanel, {
    color: "true-teal",
    radius: "var(--radius-md)",
    style: {
      padding: 30,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lii-eyebrow",
    style: {
      color: "var(--lii-grass-green)"
    }
  }, "Not sure what you need?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 18px",
      color: "var(--text-on-dark-muted)",
      fontSize: 15
    }
  }, "We can advise on the right sustainable material for your home over the phone \u2014 just ask."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onDark: true,
    href: "mailto:contact@loftinsulationinstaller.co.uk",
    leftIcon: /*#__PURE__*/React.createElement(LIcons.Mail, {
      size: 18
    })
  }, "Email the team"))))));
}
function CtaBand({
  onNav
}) {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(WavePanel, {
    color: "orange",
    radius: "var(--radius-xl)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("h2", null, "Free, no-obligation consultation."), /*#__PURE__*/React.createElement("p", null, "Tell us about your home and we'll arrange a free survey at a time that suits you."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("home", "callback"),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Request a quote")))));
}
function Footer({
  onNav
}) {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    size: 40
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer__disc"
  }, "Loft Insulation Installer is a marketing consortium that receives commissions from our network of loft insulation installers for marketing that generates enquiries and referrals. Any specialist we refer you to is an independent professional from whom you'll receive impartial, confidential advice."), /*#__PURE__*/React.createElement("div", {
    className: "footer__socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(Ic.Facebook, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Ic.Linkedin, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Ic.Instagram, {
    size: 18
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Types of loft insulation"), NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home", "how");
    }
  }, "How it works")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home", "process");
    }
  }, "Our process"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home", "reviews");
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home", "faq");
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home", "callback");
    }
  }, "Request a callback"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@loftinsulationinstaller.co.uk"
  }, "Contact us"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Loft Insulation Installer. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "A redesign concept \xB7 Original content from loftinsulationinstaller.co.uk"))));
}
Object.assign(window, {
  TopBar,
  Header,
  CallbackSection,
  CtaBand,
  Footer,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/chrome.jsx", error: String((e && e.message) || e) }); }

// website/home.jsx
try { (() => {
// Homepage sections.
const {
  LIcons,
  Logo,
  Button,
  Card,
  Badge,
  WavePanel,
  SectionHead
} = window;
function Hero({
  onNav
}) {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement(WavePanel, {
    color: "dark-slate",
    radius: "0",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement(Ic.Leaf, {
    size: 16,
    style: {
      color: "var(--lii-grass-green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lii-eyebrow",
    style: {
      color: "var(--lii-grass-green)"
    }
  }, "Sustainable \xB7 Eco-friendly")), /*#__PURE__*/React.createElement("h1", null, "Local loft insulation ", /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "installers.")), /*#__PURE__*/React.createElement("p", null, "One of the most accredited loft insulation companies in the UK, with vast experience installing sustainable insulation. After a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#fff"
    }
  }, "free home visit and assessment"), ", we fit the right amount of eco-friendly insulation \u2014 at a fair price, with funding options available."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("home", "callback"),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 18
    })
  }, "Request a free callback"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onDark: true,
    onClick: () => onNav("home", "materials")
  }, "See insulation types")), /*#__PURE__*/React.createElement("div", {
    className: "hero__trust"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Ic.CheckCircle, {
    size: 18
  }), " Free home survey"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Ic.Award, {
    size: 18
  }), " Fully accredited"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Ic.Pound, {
    size: 18
  }), " Funding available"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/imagery-1.jpg",
    alt: "Loft insulation installer fitting sustainable insulation"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Ic.Trend, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "\xA3580/yr"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Typical energy-bill saving"))))));
}
const ACCRED = ["PAS 2030", "TrustMark", "Which? Trusted", "Elmhurst Energy", "AECB", "ECMK", "British Assessment Bureau", "QualityMark"];
function Accreditation() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "accred"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accred__lbl"
  }, "Accredited & approved by"), /*#__PURE__*/React.createElement("div", {
    className: "accred__row"
  }, ACCRED.map(a => /*#__PURE__*/React.createElement("span", {
    className: "accred__chip",
    key: a
  }, /*#__PURE__*/React.createElement(Ic.Shield, {
    size: 15
  }), " ", a)))));
}
const INTRO_BENEFITS = ["Lower energy bills", "A warmer home in winter", "Less condensation build-up", "Increased property value", "Fewer carbon emissions", "Cooler in summer too"];
function Intro({
  onNav
}) {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap intro"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lii-eyebrow"
  }, "Why insulate your loft"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "lii-marker"
  }, "Keep the heat where it belongs.")), /*#__PURE__*/React.createElement("p", null, "A quarter of your home's heat is lost through the roof. By creating a thermal barrier between your loft and the rest of the house, insulation stops warm air escaping into the sky \u2014 so you stay warmer, waste less energy, and help meet the UK's CO\u2082 targets."), /*#__PURE__*/React.createElement("p", null, "Installing loft insulation is tricky work \u2014 but that's where we come in. Our friendly, experienced team makes sure the right amount of sustainable insulation is fitted properly, every time."), /*#__PURE__*/React.createElement("ul", {
    className: "benefit-list"
  }, INTRO_BENEFITS.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(Ic.Check, {
    size: 18
  }), " ", b)))), /*#__PURE__*/React.createElement("div", {
    className: "intro__aside"
  }, /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "mini-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "\xBC"), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "of household heat is lost through an uninsulated roof.")), /*#__PURE__*/React.createElement(WavePanel, {
    color: "true-teal",
    radius: "var(--radius-md)",
    className: "mini-stat mini-stat--accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "14%"), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "potential increase to your property's market value.")), /*#__PURE__*/React.createElement(Card, {
    raised: true,
    className: "mini-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "2\u20133", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "hrs")), /*#__PURE__*/React.createElement("span", {
    className: "l"
  }, "to fully insulate a standard three-bedroom home.")))));
}
const MATERIALS = [{
  id: "recycled-plastic",
  icon: "Recycle",
  brand: "SupaSoft",
  title: "Recycled Plastic",
  tag: "Post-1965 homes",
  img: "../assets/imagery-3.jpg",
  body: "Each pack is made from thousands of disused plastic bottles. Easy to install, safe to handle and silky to the touch — a reliable, environmentally-friendly alternative to traditional insulation."
}, {
  id: "sheep-wool",
  icon: "Leaf",
  brand: "Thermafleece",
  title: "Sheep Wool",
  tag: "Pre-1920 homes",
  img: "../assets/imagery-2.jpg",
  body: "Organic, sustainable sheep wool with remarkable heat-retentive and toxin-repellent qualities — the natural warmth sheep rely on, brought into the comfort of your home."
}, {
  id: "foil",
  icon: "Foil",
  brand: "SuperFOIL",
  title: "Foil",
  tag: "1920–1965 homes",
  img: "../assets/imagery-1.jpg",
  body: "An innovative aluminium multifoil — a method first tested in NASA spacecraft — that smartly reflects heat back down from the loft ceiling and circulates it throughout the home."
}];
function Materials({
  onNav
}) {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist",
    id: "materials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Sustainable materials",
    title: "Different types of loft insulation.",
    sub: "We offer a range of eco-friendly materials. Most are woven into wool-like rolls of thick padding \u2014 but the origin stories vary: from sheep wool to recycled plastic, or even aluminium foil."
  }), /*#__PURE__*/React.createElement("div", {
    className: "mat-grid"
  }, MATERIALS.map(m => {
    const C = Ic[m.icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: m.id,
      raised: true,
      interactive: true,
      className: "mat",
      onClick: () => onNav(m.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "mat__top"
    }, /*#__PURE__*/React.createElement("img", {
      src: m.img,
      alt: m.title
    }), /*#__PURE__*/React.createElement("div", {
      className: "ovl"
    }), /*#__PURE__*/React.createElement("span", {
      className: "mat__tag"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "green"
    }, m.tag))), /*#__PURE__*/React.createElement("div", {
      className: "mat__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mat__brand"
    }, /*#__PURE__*/React.createElement(C, {
      size: 18,
      style: {
        verticalAlign: "-4px",
        marginRight: 6
      }
    }), m.brand), /*#__PURE__*/React.createElement("h3", null, m.title), /*#__PURE__*/React.createElement("p", null, m.body), /*#__PURE__*/React.createElement("span", {
      className: "mat__link"
    }, "Learn more ", /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 16
    }))));
  }))));
}
const BENEFITS = [["Pound", "Lower energy bills", "Save up to £225 a year on fuel and energy bills with the best-performing insulation on the market."], ["Thermometer", "A warmer home", "Stay warm in winter and — with proper ventilation — keep your home cooler through the hot summer months."], ["Droplet", "Less condensation", "With just the right amount of insulation, damp and condensation build-up across your home is reduced."], ["Sparkle", "No more stress", "Stop pumping more energy into your home than you need. Calm your mind and your meter readings."], ["Trend", "Increased home value", "Boosting energy efficiency can lift your property's market value — by as much as a 14% increase."], ["Cloud", "Fewer carbon emissions", "Less energy used means fewer carbon emissions — a small but real sigh of relief for the planet."]];
function Benefits() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The benefits",
    title: "Eco-friendly loft insulation benefits.",
    sub: "Effective loft insulation dramatically reduces your bills, carbon footprint and discomfort during cold weather \u2014 and the improvements are felt immediately."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ben-grid"
  }, BENEFITS.map(([icon, t, b]) => {
    const C = Ic[icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: t,
      raised: true,
      className: "ben"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ben__ic"
    }, /*#__PURE__*/React.createElement(C, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, b));
  }))));
}
const STEPS = [["Free survey", "Our surveyors review your property's dimensions, ventilation, lighting and floor stability to check it's suitable."], ["Quote", "We issue a detailed quote with a full cost breakdown — so there's never any being left in the dark."], ["Place your order", "Lock in a date with just a 25% deposit, plus your contract, payment schedule and completion estimates."], ["Technical survey", "A closer assessment of the loft floor so no space is left uncovered, working around storage where needed."], ["Installation", "Our trained team lays the insulation safely and tidily — a standard three-bed takes around 2–3 hours."]];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it works",
    title: "Our simple loft insulation process.",
    sub: "A hassle-free process designed to take you smoothly from first enquiry to a fully insulated loft."
  }), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__n"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, b))))));
}
const SIGNS = [["Snow", "Draughts", "Noticeable draughts from above, or a cold-to-touch loft ceiling, mean heat retention is compromised."], ["Thermometer", "Differing temperatures", "Upstairs rooms noticeably chillier than the rest of the house is a bad sign."], ["Trend", "Rising heating bills", "Climbing bills can mean you're wasting more energy than needed to stay warm."], ["Rat", "Traces of vermin", "Signs of rodents or insects may mean they've broken through the insulation material."], ["Scan", "Infrared scan", "No obvious symptoms but still suspicious? An infrared scan during a survey confirms heat loss."]];
function Signs() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/imagery-3.jpg",
    alt: "Thermal assessment of a loft"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lii-eyebrow"
  }, "Warning signs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px,3.2vw,40px)",
      margin: "12px 0 0"
    }
  }, "Signs of inadequate loft insulation."), /*#__PURE__*/React.createElement("ul", {
    className: "signs"
  }, SIGNS.map(([icon, t, b]) => {
    const C = Ic[icon];
    return /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(C, {
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, t), /*#__PURE__*/React.createElement("span", null, b)));
  })))));
}
const BARS = [["Detached", 580], ["Semi-detached", 330], ["Mid-terrace", 250], ["Bungalow", 290], ["Flat", 180]];
function Savings() {
  const Ic = LIcons;
  const max = 580;
  const ref = React.useRef(null);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    // Filled bars are the base/visible state; the observer only drives the
    // animate-from-0. Fallback timer guarantees bars fill even if it never fires.
    const fallback = setTimeout(() => setShow(true), 250);
    const o = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && setShow(true)), {
      threshold: 0.2
    });
    if (ref.current) o.observe(ref.current);
    return () => {
      o.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--teal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "The savings",
    title: "Save on bills and carbon.",
    sub: "Improving your home's thermal efficiency cuts the energy you waste \u2014 and the emissions that come with it."
  }), /*#__PURE__*/React.createElement("div", {
    className: "save-grid",
    ref: ref
  }, /*#__PURE__*/React.createElement(WavePanel, {
    color: "true-teal",
    radius: "var(--radius-xl)",
    className: "save-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\xA3580"), /*#__PURE__*/React.createElement("h3", null, "Saved on energy bills, every year"), /*#__PURE__*/React.createElement("p", null, "Some households save up to \xA3580 annually with the best-performing loft insulation. A quarter of heat is lost through the roof \u2014 an effective layer cuts that waste fast.")), /*#__PURE__*/React.createElement(WavePanel, {
    color: "orange",
    radius: "var(--radius-xl)",
    className: "save-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big",
    style: {
      color: "#fff"
    }
  }, "1,300kg"), /*#__PURE__*/React.createElement("h3", null, "Less CO\u2082 for a detached home, per year"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.9)"
    }
  }, "That's roughly the equivalent of charging a smartphone over 150,000 times \u2014 a real reduction in your home's carbon footprint."))), /*#__PURE__*/React.createElement("div", {
    className: "chart",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Typical annual energy-bill savings"), /*#__PURE__*/React.createElement("p", {
    className: "cap"
  }, "Approximate savings by property type. Your survey will give an exact figure."), BARS.map(([label, v]) => /*#__PURE__*/React.createElement("div", {
    className: "bar-row",
    key: label
  }, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bar-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar-fill",
    style: {
      width: show ? `${v / max * 100}%` : 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "\xA3", v))))));
}
const HOW = [["Snow", "Convection", "Warm air particles are slowed and cooled when they meet the larger pool of cold air trapped within the insulation."], ["Foil", "Conduction", "A porous pad acts like a sponge — interior air pockets form a barricade that stops heat conducting from one side to the other."], ["Sparkle", "Radiation", "Heat also travels as infrared radiation, which struggles to pierce solids — so most is simply reflected back off the insulated surface."]];
function HowItWorks() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The science",
    title: "How does loft insulation work?",
    sub: "Insulation traps as much heat as possible inside an enclosed space \u2014 through three principles of thermodynamics."
  }), /*#__PURE__*/React.createElement("div", {
    className: "how-grid"
  }, HOW.map(([icon, t, b]) => {
    const C = Ic[icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: t,
      raised: true,
      className: "how"
    }, /*#__PURE__*/React.createElement("div", {
      className: "how__ic"
    }, /*#__PURE__*/React.createElement(C, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, b));
  }))));
}
const AGES = [{
  id: "sheep-wool",
  yr: "Pre-1920",
  rec: "Sheep Wool",
  note: "Older, untreated timbers suit wool's moisture-absorbing qualities."
}, {
  id: "foil",
  yr: "1920–1965",
  rec: "SuperFOIL",
  note: "Reflective multifoil works well for mid-century builds."
}, {
  id: "recycled-plastic",
  yr: "Post-1965",
  rec: "Recycled Plastic",
  note: "Easy-fit, silky SupaSoft for modern homes."
}];
function AgeSelector({
  onNav
}) {
  const Ic = LIcons;
  const [sel, setSel] = React.useState(null);
  const chosen = AGES.find(a => a.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Find your match",
    title: "How old is your house?",
    sub: "The age of your home is the quickest guide to the right sustainable insulation. Pick a build period below."
  }), /*#__PURE__*/React.createElement("div", {
    className: "age"
  }, AGES.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.id,
    className: `age-card ${sel === a.id ? "sel" : ""}`,
    onClick: () => setSel(a.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "yr"
  }, a.yr), /*#__PURE__*/React.createElement("div", {
    className: "rec"
  }, "Recommended:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, a.rec))))), chosen && /*#__PURE__*/React.createElement("div", {
    className: "age-result"
  }, /*#__PURE__*/React.createElement(Ic.CheckCircle, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "For a ", chosen.yr.toLowerCase(), " home we recommend ", /*#__PURE__*/React.createElement("b", null, chosen.rec), ". ", chosen.note), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav(chosen.id),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 16
    })
  }, "Learn more"))));
}
const REVIEWS = [["Graham", "From start to finish the communication was excellent. A thorough survey, the right materials, and a fantastic install team — polite, hard-working and respectful of our home. The level of workmanship is second to none."], ["Jo Worman", "Once-in-a-lifetime customer service and professionalism. They emptied a loft that was a rubbish tip, installed SuperFOIL and new sheep wool, and the quality of the work is stunning. Super job, super team."], ["Michael Morton", "Helped me get a grant from the council for loft insulation. From the initial site review to installation, the team were professional and knowledgeable, making the whole process very straightforward."], ["Debbie McCluskey", "On time, insulated my loft with 300mm of insulation with funding as promised and no charge to me. Clean, tidy and completed at the time specified. I'd happily recommend this company!"], ["Joanne Maddock", "What a great service! Polite, friendly guys who were very respectful of my property. A fabulous job, leaving everywhere clean and tidy. Would highly recommend."], ["Noor", "They arrived on time during storm Eunice when we didn't expect them at all. Removed and bagged the old insulation, fitted the new — and the loft boarding was finished to a very high standard. A warm house at last."]];
function Reviews() {
  const Ic = LIcons;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--mist",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What customers say",
    title: "Trusted by homeowners across the UK.",
    sub: "Real reviews from people whose homes we've made warmer, quieter and more efficient."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rev-grid"
  }, REVIEWS.map(([name, text]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    raised: true,
    className: "rev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rev__stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Ic.Star, {
    key: i,
    size: 18,
    fill: "var(--lii-warm-orange)"
  }))), /*#__PURE__*/React.createElement("p", null, "\u201C", text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "rev__by"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rev__av"
  }, name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rev__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "rev__src"
  }, "Verified customer"))))))));
}
const FAQS = [["How much loft insulation do I need?", "Our surveyors estimate the right amount for your property based on the material, loft size and other factors. As a general rule, at least 250mm of overall material is recommended — most lofts sit in the 250–300mm range."], ["Which type of loft insulation do I need?", "It depends on your property. Older homes often suit sheep wool, as their untreated timbers don't hold water well and wool absorbs vapour easily. A survey lets us recommend the most suitable material — just ask for advice."], ["How much does loft insulation cost?", "Costs vary with the size of the loft, the material, thickness and brand. Get in touch and we can give an estimate based on your property's specifications, then a detailed quote after a free survey."], ["How thick should loft insulation be in the UK?", "Government regulations require a U-value of no more than 0.16 W/m²K. For most materials, 250–300mm is the ideal thickness; properties below that should be topped up, and materials can be mixed to get there."], ["Can you have too much loft insulation?", "Yes — over-insulating can trap moisture and lead to damp and mould around pipes and ceilings. The aim is a balance of insulation and ventilation, which correct surveying and measuring ensures."], ["How long does installation take?", "It depends on size and complexity. A standard three-bedroom loft is usually done in around 2–3 hours, while larger or more involved jobs (removing old fibreglass, boarding) can take a full day or more."]];
function FAQ() {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    eyebrow: "Good to know",
    title: "Loft insulation FAQs."
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    className: `faq-item ${open === i ? "open" : ""}`,
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, q, /*#__PURE__*/React.createElement("span", {
    className: "pm"
  }, /*#__PURE__*/React.createElement(Ic.Plus, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-a",
    style: {
      maxHeight: open === i ? 320 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-a__in"
  }, a)))))));
}
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Accreditation, null), /*#__PURE__*/React.createElement(Intro, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Materials, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Signs, null), /*#__PURE__*/React.createElement(Savings, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(AgeSelector, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(window.CallbackSection, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onNav: onNav
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/home.jsx", error: String((e && e.message) || e) }); }

// website/materials.jsx
try { (() => {
// Material / service detail pages (Sheep Wool, Recycled Plastic, Foil, Conservatory).
const {
  LIcons,
  Button,
  Card,
  Badge,
  WavePanel
} = window;
const CONTENT = {
  "sheep-wool": {
    brand: "Thermafleece",
    title: "Sheep Wool Loft Insulation",
    tag: "Best for pre-1920 homes",
    img: "../assets/imagery-2.jpg",
    lead: "Ever wonder how sheep withstand freezing temperatures? With organic, sustainable sheep wool insulation you can bring that natural, heat-retentive warmth into the comfort of your own home.",
    body: [["A natural, renewable material", "Sheep wool insulation is made from the wool of sheep — renewable, biodegradable and recyclable, with no harmful chemicals or VOCs. It's a genuinely natural choice for homeowners who want to keep their footprint light."], ["Why it suits older homes", "Wool is hygroscopic: it absorbs and releases water vapour easily. That makes it ideal for older properties with untreated timbers that don't contain moisture well and are prone to degradation — wool helps regulate humidity in the loft."], ["Warm, quiet and effective", "Wool is excellent at trapping air and slowing heat transfer, keeping your home warm in winter and helping dampen sound. It may cost a little more upfront than some options, but delivers significant savings over the long term."]],
    bullets: ["Natural, renewable & biodegradable", "Excellent moisture regulation", "Free of harmful chemicals and VOCs", "Great heat retention and acoustic comfort"]
  },
  "recycled-plastic": {
    brand: "SupaSoft",
    title: "Recycled Plastic Loft Insulation",
    tag: "Best for post-1965 homes",
    img: "../assets/imagery-3.jpg",
    lead: "Each pack is made from thousands of disused plastic bottles. Easy to install, safe to handle and silky to the touch, SupaSoft is a reliable, environmentally-friendly alternative to traditional insulation.",
    body: [["Recycled, and proud of it", "Recycled plastic insulation gives thousands of plastic bottles a second life. It's a sustainable alternative to traditional materials — durable, moisture-resistant and free of harmful chemicals or VOCs."], ["Kind to install, kind to handle", "Unlike scratchy fibreglass, SupaSoft is silky to the touch and safe to handle, with none of the irritation. That makes for a cleaner, faster, more comfortable installation in modern homes."], ["Efficient and dependable", "Recycled plastic is effective at trapping air and reducing heat transfer, helping cut your energy bills and keep your home comfortable year-round."]],
    bullets: ["Made from recycled plastic bottles", "Durable & moisture-resistant", "Safe, silky and easy to handle", "No harmful chemicals or VOCs"]
  },
  "foil": {
    brand: "SuperFOIL",
    title: "Foil Loft Insulation",
    tag: "Best for 1920–1965 homes",
    img: "../assets/imagery-1.jpg",
    lead: "A truly innovative method first tested in NASA spacecraft, SuperFOIL is an aluminium multifoil that smartly reflects heat back down from the loft ceiling and circulates it throughout the rest of the house.",
    body: [["Space-age technology", "Multifoil insulation was first proven in spacecraft. A layer of reflective aluminium laminated to a backing material reflects radiant heat back into the building rather than letting it escape through the roof."], ["Slim, clean and recyclable", "Foil is thin compared with bulky rolls, making it a tidy choice where loft space is tight. It's recyclable and contains no harmful chemicals or VOCs."], ["A smart partner material", "Foil is often combined with other materials to hit the ideal thermal performance — reflecting radiated heat while wool or recycled plastic traps the rest."]],
    bullets: ["Reflects radiant heat back inside", "Slim profile — great where space is tight", "Recyclable, with no VOCs", "Pairs well with wool or recycled plastic"]
  },
  "conservatory": {
    brand: "Conservatory",
    title: "Conservatory Insulation",
    tag: "Year-round comfort",
    img: "../assets/imagery-1.jpg",
    lead: "Too hot in summer, too cold in winter? Conservatory roof insulation turns a room you avoid into one you actually use — all year round.",
    body: [["Comfortable in every season", "An uninsulated conservatory roof lets heat pour out in winter and bake the room in summer. Insulating it stabilises the temperature so the space is usable whatever the weather."], ["Quieter and calmer", "Insulation also dampens the drumming of rain and outside noise, making your conservatory a more peaceful place to relax or work."], ["A sustainable upgrade", "Like our loft work, conservatory insulation uses sustainable materials and is fitted cleanly by accredited installers — reducing wasted energy and your carbon footprint."]],
    bullets: ["Warmer in winter, cooler in summer", "Reduces glare and outside noise", "Sustainable materials, tidy install", "Makes the space usable all year"]
  }
};
function MaterialPage({
  id,
  onNav
}) {
  const Ic = LIcons;
  const m = CONTENT[id] || CONTENT["sheep-wool"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WavePanel, {
    color: "dark-slate",
    radius: "0",
    className: "subhero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap subhero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }, "Home"), " / ", m.title), /*#__PURE__*/React.createElement("h1", null, m.title), /*#__PURE__*/React.createElement("p", null, m.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, m.tag), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("home", "callback"),
    rightIcon: /*#__PURE__*/React.createElement(Ic.Arrow, {
      size: 16
    })
  }, "Request a callback")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split__media",
    style: {
      aspectRatio: "4/5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lii-eyebrow"
  }, m.brand), m.body.map(([h, p], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: i === 0 ? 12 : 28
    }
  }, h), /*#__PURE__*/React.createElement("p", null, p))), /*#__PURE__*/React.createElement("ul", null, m.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(Ic.Check, {
    size: 20
  }), " ", b)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--mist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mat-grid"
  }, Object.entries(CONTENT).filter(([k]) => k !== id && k !== "conservatory").map(([k, o]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    raised: true,
    interactive: true,
    className: "mat",
    onClick: () => onNav(k)
  }, /*#__PURE__*/React.createElement("div", {
    className: "mat__top"
  }, /*#__PURE__*/React.createElement("img", {
    src: o.img,
    alt: o.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "ovl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mat__tag"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, o.tag))), /*#__PURE__*/React.createElement("div", {
    className: "mat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mat__brand"
  }, o.brand), /*#__PURE__*/React.createElement("h3", null, o.title.replace(" Loft Insulation", "")), /*#__PURE__*/React.createElement("p", null, o.lead), /*#__PURE__*/React.createElement("span", {
    className: "mat__link"
  }, "Learn more ", /*#__PURE__*/React.createElement(Ic.Arrow, {
    size: 16
  })))))))), /*#__PURE__*/React.createElement(window.CtaBand, {
    onNav: onNav
  }));
}
window.MaterialPage = MaterialPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/materials.jsx", error: String((e && e.message) || e) }); }

// website/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Self-contained UI primitives for the redesign. They apply the design
// system's CSS classes/tokens (from ../styles.css) but carry no dependency
// on the generated _ds_bundle.js, so the page renders in every context.

/* ---------- Icons (Lucide-style, 2px round) ---------- */
const Ico = ({
  d,
  size = 24,
  fill = "none",
  ...p
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), Array.isArray(d) ? d.map((x, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: x
})) : /*#__PURE__*/React.createElement("path", {
  d: d
}));
const I = {
  Home: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5"]
  }, p)),
  Leaf: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M11 20A7 7 0 0 1 4 13C4 8 8 4 20 4c0 12-4 16-9 16Z", "M11 20c0-5 2-8 6-10"]
  }, p)),
  Recycle: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M7 19H4.5a2 2 0 0 1-1.7-3l2-3.5", "M9.8 7 12 3l2.2 4 .8 1.4", "M17 10l2.3 4a2 2 0 0 1-1.7 3H14", "M10 19h4l-1.5-2.5M5.5 12 7 9.5l2.6 1.3M18.5 12 17 9.5l-2.6 1.5"]
  }, p)),
  Foil: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 6c3 1.5 6 1.5 9 0s6-1.5 9 0", "M3 12c3 1.5 6 1.5 9 0s6-1.5 9 0", "M3 18c3 1.5 6 1.5 9 0s6-1.5 9 0"]
  }, p)),
  Thermometer: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z"
  }, p)),
  Pound: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M16 6a4 4 0 0 0-7 2.7V18M7 14h7M6 18h11"
  }, p)),
  Snow: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M12 2v20", "M4 6l16 12M20 6 4 18", "M9 4l3 2 3-2M9 20l3-2 3 2M4.5 9.5 6 8.5 4.5 7.5M19.5 16.5 18 15.5l1.5-1"]
  }, p)),
  Shield: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z", "m9 12 2 2 4-4"]
  }, p)),
  Trend: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 17l6-6 4 4 8-8", "M21 7h-6M21 7v6"]
  }, p)),
  Cloud: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.5A3.5 3.5 0 0 1 18 18Z"
  }, p)),
  Home2: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 10.5 12 3l9 7.5", "M5 9.5V21h14V9.5", "M9 21v-6h6v6"]
  }, p)),
  Check: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "m20 6-11 11-5-5"
  }, p)),
  CheckCircle: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M21 12a9 9 0 1 1-3.2-6.9", "m8.5 12 2.5 2.5L17 8"]
  }, p)),
  Arrow: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M5 12h14", "m13 6 6 6-6 6"]
  }, p)),
  Star: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17.8 6.5 20l1-6.1L3 9.5l6.3-.9z"
  }, p)),
  Phone: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
  }, p)),
  Mail: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 6h18v12H3z", "m3 7 9 6 9-6"]
  }, p)),
  Clock: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M12 7v5l3 2"]
  }, p)),
  Wrench: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M14.5 5.5a3.5 3.5 0 0 0 4.6 4.6l-9.2 9.2a2 2 0 0 1-2.8-2.8l9.2-9.2-1.8-1.8Z"
  }, p)),
  Droplet: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M12 3s6 5.7 6 10a6 6 0 0 1-12 0c0-4.3 6-10 6-10Z"
  }, p)),
  Sparkle: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
  }, p)),
  Award: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z", "M9 12.5 7.5 21 12 18.5 16.5 21 15 12.5"]
  }, p)),
  Rat: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M16 9a4 4 0 1 0-4 4h4a3 3 0 0 1 3 3v2", "M16 5a2 2 0 1 1 3 1.7M9 9h.01"]
  }, p)),
  Scan: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2", "M4 12h16"]
  }, p)),
  Facebook: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: "M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z"
  }, p)),
  Linkedin: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M7 9v8M7 6v.01M11 17v-4a2 2 0 0 1 4 0v4M11 9v8M15 17v-4", "M4 4h16v16H4z"]
  }, p)),
  Instagram: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM16.5 7.5h.01"]
  }, p)),
  Menu: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M3 6h18", "M3 12h18", "M3 18h18"]
  }, p)),
  Plus: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M12 5v14", "M5 12h14"]
  }, p)),
  MapPin: p => /*#__PURE__*/React.createElement(Ico, _extends({
    d: ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"]
  }, p))
};

/* ---------- Logo ---------- */
const LOGO_HOUSE = "M 40.074 3.07 C 35.628 -1.001 28.817 -1.026 24.34 3.011 L 3.864 21.477 C 1.404 23.696 0 26.853 0 30.165 L 0 58.874 C 0 65.335 5.238 70.573 11.698 70.573 L 52.302 70.573 C 58.762 70.573 64 65.335 64 58.874 L 64 30.125 C 64 26.843 62.622 23.712 60.201 21.496 L 40.074 3.07 Z M 28.027 7.099 C 30.397 4.962 34.003 4.975 36.357 7.13 L 56.484 25.557 C 57.765 26.73 58.495 28.387 58.495 30.125 L 58.495 58.874 C 58.495 62.295 55.722 65.068 52.302 65.068 L 11.698 65.068 C 8.278 65.068 5.505 62.295 5.505 58.874 L 5.505 30.165 C 5.505 28.411 6.248 26.74 7.551 25.566 L 28.027 7.099 Z M 51.579 28.341 L 35.385 13.536 C 33.555 11.863 30.754 11.853 28.911 13.512 L 12.448 28.338 C 11.434 29.252 10.855 30.553 10.855 31.918 L 10.855 31.93 C 19.78 28.438 23.434 31.25 27.853 34.652 C 29.795 36.146 31.885 37.755 34.634 38.992 C 40.838 41.784 49.864 37.889 53.145 34.909 L 53.145 31.896 C 53.145 30.544 52.577 29.254 51.579 28.341 Z M 10.855 55.015 L 10.855 47.926 C 13.526 42.553 23.973 36.53 33.482 44.273 C 33.896 44.611 34.333 44.996 34.796 45.404 L 34.796 45.404 C 38.437 48.612 43.733 53.277 53.145 48.153 L 53.145 55.015 C 53.145 57.676 50.989 59.832 48.328 59.832 L 15.672 59.832 C 13.011 59.832 10.855 57.676 10.855 55.015 Z";
const LOGO_WAVE = "M 24.53 1.262 L 40.724 16.067 C 41.722 16.979 42.291 18.269 42.291 19.622 L 42.291 22.635 C 39.01 25.615 29.984 29.51 23.779 26.718 C 21.03 25.48 18.94 23.872 16.999 22.378 C 12.579 18.976 8.925 16.164 0 19.656 L 0 19.643 C 0 18.278 0.579 16.977 1.593 16.064 L 18.057 1.238 C 19.899 -0.422 22.7 -0.411 24.53 1.262 Z M 0 35.652 L 0 42.741 C 0 45.401 2.157 47.558 4.817 47.558 L 37.474 47.558 C 40.134 47.558 42.291 45.401 42.291 42.741 L 42.291 35.879 C 32.878 41.002 27.583 36.337 23.942 33.13 C 23.478 32.721 23.042 32.337 22.627 31.999 C 13.119 24.256 2.671 30.279 0 35.652 Z";
const LOGO_COLORS = {
  teal: {
    h: "#0B4C5B",
    w: "#F66904",
    t: "#0B4C5B"
  },
  white: {
    h: "#FFFFFF",
    w: "#F66904",
    t: "#FFFFFF"
  }
};
function Logo({
  variant = "teal",
  size = 42,
  wordmark = true,
  onClick
}) {
  const c = LOGO_COLORS[variant] || LOGO_COLORS.teal;
  const w = 64 / 70.573 * size;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.32,
      cursor: onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: size,
    viewBox: "0 0 64 70.573",
    fill: "none",
    "aria-label": "Loft Insulation Installer",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: LOGO_HOUSE,
    fill: c.h,
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(10.854 12.274)"
  }, /*#__PURE__*/React.createElement("path", {
    d: LOGO_WAVE,
    fill: c.w,
    fillRule: "evenodd"
  }))), wordmark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: size * 0.46,
      lineHeight: 0.92,
      letterSpacing: "-0.01em",
      textTransform: "lowercase",
      color: c.t
    }
  }, "loft", /*#__PURE__*/React.createElement("br", null), "insulation", /*#__PURE__*/React.createElement("br", null), "installer"));
}

/* ---------- Primitives ---------- */
function Button({
  variant = "primary",
  size = "md",
  block,
  onDark,
  href,
  onClick,
  children,
  type,
  leftIcon,
  rightIcon
}) {
  const cls = ["lii-btn", `lii-btn--${variant}`, `lii-btn--${size}`, block && "lii-btn--block", onDark && "lii-btn--on-dark"].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon, children, rightIcon);
  if (href) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick
  }, inner);
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    type: type || "button",
    onClick: onClick
  }, inner);
}
const Card = ({
  raised,
  interactive,
  className = "",
  children,
  ...p
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: ["lii-card", raised && "lii-card--raised", interactive && "lii-card--interactive", className].filter(Boolean).join(" ")
}, p), children);
const Badge = ({
  tone = "orange",
  children,
  style
}) => /*#__PURE__*/React.createElement("span", {
  className: `lii-badge lii-badge--${tone}`,
  style: style
}, children);
function WavePanel({
  color = "teal",
  radius,
  className = "",
  style = {},
  children,
  ...p
}) {
  const base = {
    teal: "var(--lii-true-teal)",
    "dark-slate": "var(--lii-dark-slate)",
    green: "var(--lii-grass-green)",
    orange: "var(--lii-warm-orange)"
  }[color] || color;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lii-wave-panel ${className}`,
    style: {
      "--wave-color": base,
      ...(radius ? {
        borderRadius: radius
      } : {}),
      ...style
    }
  }, p), children);
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cb__field"
  }, /*#__PURE__*/React.createElement("label", null, label), children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `section__head ${center ? "center" : ""}`
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row",
    style: center ? {
      justifyContent: "center"
    } : {}
  }, /*#__PURE__*/React.createElement("span", {
    className: "lii-eyebrow"
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", null, sub));
}
Object.assign(window, {
  LIcons: I,
  Logo,
  Button,
  Card,
  Badge,
  WavePanel,
  Field,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.WavePanel = __ds_scope.WavePanel;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
