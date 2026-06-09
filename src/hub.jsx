import React from 'react';
// Silo hub / landing pages (Loft Insulation, Loft Storage). Overview pages
// that summarise and link through to their child service pages.
import { LIcons, Button, Card, Badge, WavePanel, SectionHead, Stars, useReveal } from './ui.jsx';
import { LeadForm } from './leadform.jsx';
import { TrustBar, Process, Reviews, WhyPro, Funding } from './home.jsx';
import { CtaBand } from './chrome.jsx';
import { SERVICE_INDEX, HUBS } from './materials-data.jsx';

function HubHero({ d, onNav }) {
  const Ic = LIcons;
  return (
    <WavePanel color="dark-slate" radius="0" className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="breadcrumb">
            <a onClick={() => onNav("home")}>Home</a>
            <Ic.Chevron size={13} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "#fff" }}>{d.siloLabel}</span>
          </div>
          <div className="eyebrow-row" style={{ marginTop: 14 }}>
            <Ic.Leaf size={16} style={{ color: "var(--lii-grass-green)" }} />
            <span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>{d.eyebrow}</span>
          </div>
          <h1>{d.h1}</h1>
          <p className="hero__sub">{d.hero}</p>
          <div className="hero__trust">
            {d.heroPoints.map((p) => <span key={p}><Ic.CheckCircle size={18} /> {p}</span>)}
          </div>
          <div className="hero__rating">
            <Stars size={18} />
            <span className="txt"><b>Rated excellent</b> by homeowners across the UK · Which? Trusted network</span>
          </div>
        </div>
        <div className="hero__media">
          <LeadForm onNav={onNav} compact presetType={d.silo === "loft-storage" ? "Loft Storage" : ""} title="Get your free quote." sub="Most surveys booked within 48 hours. No obligation." />
        </div>
      </div>
    </WavePanel>
  );
}

function HubServices({ d, onNav }) {
  const Ic = LIcons;
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead eyebrow={d.introEyebrow} title={d.introTitle} marker sub={d.introText} />
        <div className="svc-grid svc-grid--4">
          {d.children.map((id) => {
            const s = SERVICE_INDEX[id];
            if (!s) return null;
            return (
              <Card key={id} raised interactive className="svc" onClick={() => onNav(id)}>
                <div className="svc__top">
                  <img src={s.img} alt={s.name} loading="lazy" /><div className="ovl" />
                  <span className="svc__tag"><Badge tone="green">{s.tag}</Badge></span>
                </div>
                <div className="svc__body">
                  <h3>{s.name}</h3>
                  <p>{s.blurb}</p>
                  <span className="svc__link">Learn more <Ic.Arrow size={16} /></span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HubFAQ({ d }) {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(-1);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead center eyebrow="Good to know" title={d.siloLabel + " FAQs."} marker />
        <div className="faq">
          {d.faqs.map(([q, a], i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {q}<span className="pm"><Ic.Plus size={16} /></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 6000 : 0 }}>
                <div className="faq-a__in">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HubForm({ d, onNav }) {
  const Ic = LIcons;
  const points = [
    [Ic.Pound, "Free, no-obligation quote & home survey"],
    [Ic.ShieldCheck, "Accredited, fully-insured local installers"],
    [Ic.Leaf, "Sustainable, professional workmanship"],
    [Ic.Clock, "Most surveys booked within 48 hours"],
  ];
  return (
    <section className="section section--mist" id="quote">
      <div className="wrap">
        <SectionHead eyebrow="Book a free survey" title="Get your free, no-obligation quote." marker
          sub="Send us your details and an accredited local installer will call you back to arrange a free survey at a time that suits you." />
        <div className="finalform">
          <LeadForm onNav={onNav} presetType={d.silo === "loft-storage" ? "Loft Storage" : ""} title="Request your free quote." sub="Takes under a minute. No obligation, ever." />
          <aside className="finalform__aside">
            <Card raised style={{ padding: 30 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-heading)", fontSize: 21, margin: "0 0 18px" }}>What you get</h3>
              <ul className="finalform__points">
                {points.map(([C, t]) => <li key={t}><Ic.Check size={20} /><span>{t}</span></li>)}
              </ul>
            </Card>
            <WavePanel color="true-teal" radius="var(--radius-lg)" style={{ padding: 30, color: "#fff" }}>
              <div className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Prefer expert advice?</div>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.92)", fontSize: 15, lineHeight: 1.6 }}>No problem. Tell us about your loft and your installer will recommend the right option for your home during your free survey.</p>
            </WavePanel>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HubPage({ id, onNav }) {
  useReveal();
  const d = HUBS[id];
  if (!d) return null;
  const nav = (target, anchor) => onNav(target === null ? id : target, anchor);
  return (
    <div>
      <HubHero d={d} onNav={nav} />
      <TrustBar />
      <HubServices d={d} onNav={nav} />
      <WhyPro />
      <Process cta={<CtaBand embed onNav={nav} target={d.id} title={d.ctaTitle} text={d.ctaText} cta="Get my free quote" />} />
      <Reviews title={d.reviewsTitle} sub={d.reviewsSub} reviews={d.reviews} />
      <HubFAQ d={d} />
      <HubForm d={d} onNav={nav} />
      <Funding onNav={nav} target={d.id} variant={d.silo === "loft-storage" ? "storage" : "insulation"} />
    </div>
  );
}

export { HubPage };
