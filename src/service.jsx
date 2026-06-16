import React from 'react';
// Data-driven service page (material detail). Renders any entry in MATERIALS.
import { LIcons, Button, Card, Badge, WavePanel, SectionHead, Stars, useReveal } from './ui.jsx';
import { Calculator, LeadForm } from './leadform.jsx';
import { TrustBar, Process, Reviews, WhyPro, Funding } from './home.jsx';
import { CtaBand } from './chrome.jsx';
import { SERVICE_INDEX, MATERIALS } from './materials-data.jsx';
import { pageToPath } from './seo.js';

/* ---------- Sub-page hero with embedded lead form ---------- */
function ServiceHero({ d, onNav }) {
  const Ic = LIcons;
  return (
    <WavePanel color="dark-slate" radius="0" className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="breadcrumb">
            <a href={pageToPath("home")} onClick={(e) => { e.preventDefault(); onNav("home"); }}>Home</a>
            <Ic.Chevron size={13} style={{ transform: "rotate(-90deg)" }} />
            <a href={pageToPath(d.silo)} onClick={(e) => { e.preventDefault(); onNav(d.silo); }}>{d.siloLabel}</a>
            <Ic.Chevron size={13} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "#fff" }}>{d.name}</span>
          </div>
          <div className="eyebrow-row" style={{ marginTop: 14 }}>
            <Ic.Leaf size={16} style={{ color: "var(--lii-grass-green)" }} />
            <span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>{d.brand === d.tag ? d.brand : d.brand + " · " + d.tag}</span>
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
          <LeadForm onNav={onNav} compact ageHelper={d.silo !== "loft-storage"} presetType={d.presetType}
            title="Get your free quote." sub="Most consultations booked within 48 hours. No obligation." />
        </div>
      </div>
    </WavePanel>
  );
}

/* ---------- Overview (image + copy) + quick facts ---------- */
function Overview({ d }) {
  const Ic = LIcons;
  return (
    <section className="section">
      <div className="wrap split">
        <div className="split__media reveal"><img src={d.img} alt={d.name + " loft insulation, fitted by an accredited installer"} loading="lazy" /></div>
        <div>
          <span className="lii-eyebrow">{d.overviewEyebrow}</span>
          <h2 style={{ fontSize: "clamp(28px,3.2vw,42px)", margin: "12px 0 18px" }}><span className="lii-marker">{d.overviewTitle}</span></h2>
          {d.overview.map((p, i) => <p key={i} style={{ fontSize: 16.5, lineHeight: 1.7, margin: "0 0 14px" }}>{p}</p>)}
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 48 }}>
        <div className="facts reveal">
          {d.specs.map(([icon, k, v]) => {
            const C = Ic[icon] || Ic.Check;
            return (
              <div className="fact" key={k}>
                <span className="fact__ic"><C size={20} /></span>
                <div><div className="fact__k">{k}</div><div className="fact__v">{v}</div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Material benefits ---------- */
function MatBenefits({ d }) {
  const Ic = LIcons;
  return (
    <section className="section section--mist">
      <div className="wrap">
        <SectionHead eyebrow="The benefits" title={d.benefitsTitle} marker
          sub={"What makes " + d.name.toLowerCase() + " a smart choice, and where it performs best."} />
        <div className="ben-grid">
          {d.benefits.map(([icon, t, b]) => {
            const C = Ic[icon] || Ic.Check;
            return (
              <Card key={t} raised className="ben reveal">
                <div className="ben__ic"><C size={26} /></div>
                <h3>{t}</h3>
                <p>{b}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Calculator ---------- */
function ServiceCalc({ onNav }) {
  return (
    <section className="section section--mist" id="calculator">
      <div className="wrap">
        <SectionHead center eyebrow="Cost savings calculator" title="See how much you could save." marker
          sub="Improving your loft insulation typically cuts heating costs by around a quarter. Move the slider to estimate your saving." />
        <Calculator onStartSaving={() => onNav(null, "quote")} />
      </div>
    </section>
  );
}

/* ---------- Other materials cross-links ---------- */
function OtherOptions({ d, onNav }) {
  const Ic = LIcons;
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="Not sure this is the one?" title="Explore your other options." marker
          sub="Every home is different. Compare the alternatives, or let our free phone consultation recommend the right fit." />
        <div className={"svc-grid svc-grid--" + (d.related.length === 3 ? "3" : "4")}>
          {d.related.map((id) => {
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

/* ---------- How it works (the science) ---------- */
function HowItWorks({ d }) {
  const Ic = LIcons;
  if (!d.howItWorks) return null;
  // Decorative air-pocket field (reinforces "thousands of air pockets").
  const pockets = [
    [14, 18, 64], [40, 30, 96], [70, 14, 52], [82, 40, 74], [22, 52, 80],
    [54, 60, 110], [12, 78, 58], [38, 84, 70], [68, 72, 92], [88, 78, 48],
    [60, 14, 40], [30, 66, 44], [78, 60, 36], [48, 42, 56],
  ];
  return (
    <section className="section section--mist" id="how-it-works">
      <div className="wrap">
        <SectionHead eyebrow={d.howEyebrow} title={d.howTitle} marker sub={d.howIntro} />
        <div className="how">
          {d.howImg
            ? <div className="how__diagram reveal"><img src={d.howImg} alt={"Diagram showing how " + d.name.toLowerCase() + " loft insulation works"} loading="lazy" /></div>
            : d.howViz === "reflect"
              ? (
                <WavePanel color="true-teal" radius="var(--radius-xl)" className="how__viz how__viz--reflect" aria-hidden="true">
                  <div className="how__bands">
                    {[0,1,2,3,4,5].map((i) => <span key={i} className="band" />)}
                  </div>
                  <span className="how__caption">{d.howCaption}</span>
                </WavePanel>
              )
              : (
                <WavePanel color="true-teal" radius="var(--radius-xl)" className="how__viz" aria-hidden="true">
                  <div className="how__pockets">
                    {pockets.map(([x, y, s], i) => (
                      <span key={i} className={"pocket" + (i % 4 === 0 ? " pocket--green" : "")}
                        style={{ left: x + "%", top: y + "%", width: s, height: s }} />
                    ))}
                  </div>
                  <span className="how__caption">{d.howCaption}</span>
                </WavePanel>
              )}
          <ul className="how__list">
            {d.howItWorks.map(([icon, t, b]) => {
              const C = Ic[icon] || Ic.Check;
              return (
                <li key={t} className="reveal">
                  <span className="how__ic"><C size={22} /></span>
                  <div><b>{t}</b><span>{b}</span></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Homes best suited (decision support) ---------- */
function BestSuited({ d }) {
  const Ic = LIcons;
  if (!d.bestSuited) return null;
  return (
    <section className="section" id="best-suited">
      <div className="wrap">
        <SectionHead eyebrow={d.bestSuitedEyebrow} title={d.bestSuitedTitle} marker sub={d.bestSuitedIntro} />
        <div className="suited-grid">
          {d.bestSuited.map(([icon, t, b], i) => {
            const C = Ic[icon] || Ic.Home;
            return (
              <Card key={t} raised className="suited reveal">
                <div className="suited__top">
                  <span className="suited__ic"><C size={26} /></span>
                  <span className="suited__n">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{t}</h3>
                <p>{b}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Material FAQ ---------- */
function ServiceFAQ({ d }) {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(-1);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead center eyebrow="Good to know" title={d.name.charAt(0) + d.name.slice(1).toLowerCase() + " FAQs."} marker />
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

/* ---------- Final quote form ---------- */
function ServiceForm({ d, onNav }) {
  const Ic = LIcons;
  const points = [
    [Ic.Pound, "Free, no-obligation quote & phone consultation"],
    [Ic.ShieldCheck, "Accredited, fully-insured local installers"],
    [Ic.Leaf, "Sustainable, eco-friendly materials"],
    [Ic.Clock, "Most consultations booked within 48 hours"],
  ];
  return (
    <section className={"section" + (d.howItWorks ? "" : " section--mist")} id="quote">
      <div className="wrap">
        <SectionHead eyebrow="Book a free phone consultation" title={"Get a quote for " + d.name.toLowerCase() + "."} marker
          sub={"Send us your details and an accredited local installer will call you back to arrange a free phone consultation and confirm whether " + d.name.toLowerCase() + " is the right fit for your home."} />
        <div className="finalform">
          <LeadForm onNav={onNav} ageHelper={d.silo !== "loft-storage"} presetType={d.presetType} title="Request your free quote." sub="Takes under a minute. No obligation, ever." />
          <aside className="finalform__aside">
            <Card raised style={{ padding: 30 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-heading)", fontSize: 21, margin: "0 0 18px" }}>What you get</h3>
              <ul className="finalform__points">
                {points.map(([C, t]) => <li key={t}><Ic.Check size={20} /><span>{t}</span></li>)}
              </ul>
            </Card>
            <WavePanel color="true-teal" radius="var(--radius-lg)" style={{ padding: 30, color: "#fff" }}>
              <div className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Prefer expert advice?</div>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.92)", fontSize: 15, lineHeight: 1.6 }}>No problem. Tell us about your loft and your installer will recommend the best sustainable option for your home during your free phone consultation.</p>
            </WavePanel>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function ServicePage({ id, onNav }) {
  useReveal();
  const d = MATERIALS[id];
  if (!d) return null;
  // Local nav: a null target means "this page", so anchors scroll within it.
  const nav = (target, anchor) => onNav(target === null ? id : target, anchor);
  return (
    <div>
      <ServiceHero d={d} onNav={nav} />
      <TrustBar />
      <Overview d={d} />
      <MatBenefits d={d} />
      <BestSuited d={d} />
      <ServiceCalc onNav={nav} />
      <Process sub={d.processSub} installNote={d.installNote} cta={<CtaBand embed onNav={nav} target={d.id} title={d.ctaTitle || "Ready for a warmer, more efficient home?"} text={d.ctaText || "Tell us about your loft and we'll arrange a free phone consultation at a time that suits you."} cta="Get my free quote" />} />
      <WhyPro />
      <OtherOptions d={d} onNav={nav} />
      <Reviews title={d.reviewsTitle} sub={d.reviewsSub} reviews={d.reviews} />
      <ServiceFAQ d={d} />
      <HowItWorks d={d} />
      <ServiceForm d={d} onNav={nav} />
      <Funding onNav={nav} target={d.id} variant={d.silo === "loft-storage" ? "storage" : "insulation"} />
    </div>
  );
}

export { ServicePage };
