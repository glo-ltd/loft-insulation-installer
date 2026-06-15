import React from 'react';
// Global chrome: utility bar, two-silo header, CTA band, footer, sticky mobile CTA.
// FORM-ONLY contact model: no phone numbers or email addresses anywhere.
import { LIcons, Logo, Button, WavePanel } from './ui.jsx';
import { pageToPath } from './seo.js';

// Real, crawlable href for a page id; section links point at the homepage anchor.
const hrefFor = (id) => pageToPath(id);
const hrefSec = (anchor) => "/#" + anchor;

// Brand social glyphs (supplied SVGs): inherit currentColor so they stay white
// in the footer and recolour on hover.
const BrandIcon = {
  Facebook: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 155.139 155.139" fill="currentColor" aria-hidden="true">
      <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
    </svg>
  ),
  Linkedin: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M160.008 423h-70V197h70zm6.984-298.004c0-22.629-18.36-40.996-40.976-40.996C103.312 84 85 102.367 85 124.996 85 147.633 103.313 166 126.016 166c22.617 0 40.976-18.367 40.976-41.004zM422 298.664C422 237.996 409.184 193 338.312 193c-34.054 0-56.914 17.031-66.246 34.742H272V197h-68v226h68V310.79c0-29.388 7.48-57.856 43.906-57.856 35.93 0 37.094 33.605 37.094 59.722V423h69zM512 452V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v392c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60zM452 40c11.027 0 20 8.973 20 20v392c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20z" />
    </svg>
  ),
  Instagram: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 511 511.9" fill="currentColor" aria-hidden="true">
      <path d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0" />
      <path d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.099 0 85.301 38.198 85.301 85.3s-38.202 85.3-85.3 85.3zm0 0" />
      <path d="M388.45 88.7c-16.97 0-30.7 13.73-30.7 30.698 0 16.965 13.73 30.7 30.7 30.7 16.965 0 30.698-13.735 30.698-30.7 0-16.968-13.733-30.699-30.699-30.699zm0 0" />
    </svg>
  ),
};

const INSULATION = [
  ["sheep-wool", "Sheep Wool", "Sprout", "Natural · pre-1920"],
  ["foil", "Foil (SuperFOIL)", "Foil", "Reflective · 1920–1965"],
  ["recycled-plastic", "Recycled Plastic", "Recycle", "SupaSoft · post-1965"],
  ["hemp", "Hemp", "Leaf", "Vegan · breathable"],
];
const STORAGE = [
  ["loft-boarding", "Loft Boarding", "Layers", "Safe, usable storage"],
  ["loft-ladders", "Loft Ladders", "Ladder", "Easy, safe access"],
  ["loft-hatch", "Loft Hatch", "Hatch", "Insulated & draught-sealed"],
  ["loft-storage-rooms", "Loft Storage Rooms", "Home", "A full, usable room"],
];

function TopBar() {
  const Ic = LIcons;
  return (
    <div className="topbar">
      <div className="wrap topbar__in">
        <span><Ic.CheckCircle size={15} /><span className="lbl">Free phone consultation</span></span>
        <span className="topbar-hide"><Ic.Pound size={15} /><span className="lbl">No-obligation quote</span></span>
        <span><Ic.Star size={15} fill="currentColor" /><span className="lbl">Rated excellent<span className="topbar-hide"> by homeowners</span></span></span>
        <span className="topbar-hide"><Ic.MapPin size={15} /><span className="lbl">UK-wide network</span></span>
      </div>
    </div>
  );
}

function Dropdown({ hubLabel, hubId, items, onNav }) {
  const Ic = LIcons;
  return (
    <div className="dropdown">
      <div className="dropdown__hub" onClick={() => onNav(hubId)}>
        <Ic.ArrowRightCircle size={18} /> {hubLabel}
      </div>
      {items.map(([id, label, icon, desc]) => {
        const C = Ic[icon];
        return (
          <div className="dropdown__item" key={id} onClick={() => onNav(id)}>
            <span className="ic"><C size={18} /></span>
            <div><div className="t">{label}</div><div className="d">{desc}</div></div>
          </div>
        );
      })}
    </div>
  );
}

function Header({ onNav, page }) {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id, anchor) => { setOpen(false); onNav(id, anchor); };
  // Anchor links scroll within the current page when it has the section
  // (home + every service page do); thank-you has none, so fall back to home.
  const sec = (anchor) => go(page && page !== "thank-you" ? page : "home", anchor);

  return (
    <React.Fragment>
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__in">
        <Logo variant="teal" size={34} onClick={() => go("home")} />
        <nav className="nav__links" aria-label="Primary">
          <div className="nav__item">
            <button className="nav__link" onClick={() => go("loft-insulation")}>Loft Insulation <Ic.Chevron size={15} className="chev" /></button>
            <Dropdown hubLabel="All Loft Insulation" hubId="loft-insulation" items={INSULATION} onNav={go} />
          </div>
          <div className="nav__item">
            <button className="nav__link" onClick={() => go("loft-storage")}>Loft Storage <Ic.Chevron size={15} className="chev" /></button>
            <Dropdown hubLabel="All Loft Storage" hubId="loft-storage" items={STORAGE} onNav={go} />
          </div>
          <div className="nav__item"><button className="nav__link" onClick={() => sec("why")}>Why us</button></div>
          <div className="nav__item"><button className="nav__link" onClick={() => sec("reviews")}>Reviews</button></div>
        </nav>
        <div className="nav__right">
          <Button variant="primary" onClick={() => sec("quote")} rightIcon={<Ic.Arrow size={16} />}>Get a free quote</Button>
          <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}><Ic.Menu size={26} /></button>
        </div>
      </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu__scrim" onClick={() => setOpen(false)} />
        <div className="mobile-menu__panel">
          <div className="mobile-menu__head">
            <Logo variant="teal" size={30} onClick={() => go("home")} />
            <button className="burger" aria-label="Close menu" onClick={() => setOpen(false)}><Ic.X size={26} /></button>
          </div>
          <div className="mm-group">Loft Insulation</div>
          <a href={hrefFor("loft-insulation")} onClick={(e) => { e.preventDefault(); go("loft-insulation"); }}>All Loft Insulation</a>
          {INSULATION.map(([id, label]) => <a key={id} href={hrefFor(id)} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>)}
          <div className="mm-group">Loft Storage</div>
          <a href={hrefFor("loft-storage")} onClick={(e) => { e.preventDefault(); go("loft-storage"); }}>All Loft Storage</a>
          {STORAGE.map(([id, label]) => <a key={id} href={hrefFor(id)} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>)}
          <div className="mm-group">More</div>
          <a href={hrefSec("why")} onClick={(e) => { e.preventDefault(); sec("why"); }}>Why choose us</a>
          <a href={hrefSec("reviews")} onClick={(e) => { e.preventDefault(); sec("reviews"); }}>Reviews</a>
          <Button variant="primary" size="lg" block onClick={() => sec("quote")} rightIcon={<Ic.Arrow size={18} />}>Get a free quote</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

function CtaBand({ onNav, color = "orange", title = "Ready for a warmer, more efficient home?", text = "Tell us about your loft and we'll arrange a free phone consultation at a time that suits you.", cta = "Get my free quote", target = "home", embed = false }) {
  const Ic = LIcons;
  const panel = (
    <WavePanel color={color} radius="var(--radius-xl)">
      <div className="cta-band">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button variant={color === "orange" ? "secondary" : "primary"} size="lg" onClick={() => onNav(target, "quote")} rightIcon={<Ic.Arrow size={18} />}>{cta}</Button>
      </div>
    </WavePanel>
  );
  if (embed) return panel;
  return (
    <section className="section">
      <div className="wrap">{panel}</div>
    </section>
  );
}

function Footer({ onNav, page }) {
  const Ic = LIcons;
  const link = (id, anchor) => (e) => { e.preventDefault(); onNav(id, anchor); };
  // Company anchor links scroll within the current page when it has the
  // section (home + every service page do); thank-you falls back to home.
  const sec = (anchor) => (e) => { e.preventDefault(); onNav(page && page !== "thank-you" ? page : "home", anchor); };
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Logo variant="white" size={40} />
            <p className="footer__disc">
              Loft Insulation Installer is a marketing consortium that receives commissions from our network of
              loft insulation specialists for marketing that generates enquiries and referrals. Any specialist we
              refer you to is an independent professional from whom you'll receive impartial, confidential advice.
            </p>
            <div className="footer__socials">
              <a href="https://www.facebook.com/theinsulationinstallers" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><BrandIcon.Facebook size={17} /></a>
              <a href="https://www.linkedin.com/company/theinsulationinstallers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BrandIcon.Linkedin size={18} /></a>
              <a href="https://www.instagram.com/theinsulationinstallers/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><BrandIcon.Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <h2>Loft Insulation</h2>
            <a href={hrefFor("loft-insulation")} onClick={link("loft-insulation")}>All Loft Insulation</a>
            {INSULATION.map(([id, label]) => <a key={id} href={hrefFor(id)} onClick={link(id)}>{label}</a>)}
          </div>
          <div>
            <h2>Loft Storage</h2>
            <a href={hrefFor("loft-storage")} onClick={link("loft-storage")}>All Loft Storage</a>
            {STORAGE.map(([id, label]) => <a key={id} href={hrefFor(id)} onClick={link(id)}>{label}</a>)}
          </div>
          <div>
            <h2>Company</h2>
            <a href={hrefSec("why")} onClick={sec("why")}>Why choose us</a>
            <a href={hrefSec("reviews")} onClick={sec("reviews")}>Reviews</a>
            <a href={hrefSec("faq")} onClick={sec("faq")}>FAQs</a>
            <a href={hrefSec("quote")} onClick={sec("quote")}>Get a free quote</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Loft Insulation Installer. All rights reserved. &nbsp;·&nbsp; <a href={hrefFor("privacy-policy")} onClick={link("privacy-policy")} style={{ display: "inline", color: "inherit" }}>Privacy Policy</a> &nbsp;·&nbsp; <a href={hrefFor("cookie-policy")} onClick={link("cookie-policy")} style={{ display: "inline", color: "inherit" }}>Cookie Policy</a> &nbsp;·&nbsp; <button type="button" className="footer__cookiebtn" onClick={() => window.dispatchEvent(new Event("lii-open-consent"))}>Cookie settings</button></span>
          <span className="glo">SEO Web Design by <a href="https://generateleads.online/" target="_blank" rel="noopener" style={{ color: "inherit" }}>GLO</a></span>
        </div>
      </div>
    </footer>
  );
}

export { TopBar, Header, CtaBand, Footer, INSULATION, STORAGE };
