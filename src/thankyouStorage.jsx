// Thank-you page for Loft Storage Room enquiries. Same reassurance model as
// the generic thank-you, plus RJ's brochure + callback CTAs, the storage-room
// benefits, the "why RJ" checklist and the updated 5-step process.
import React from 'react';
import { LIcons, Button, Card, WavePanel, SectionHead, Stars, useReveal } from './ui.jsx';
import { Funding } from './home.jsx';
import { fireLeadConversionOnce } from './leadConversion.js';

const SR_PROCESS = [
  ["Free phone consultation", "A 20–30 minute call to understand your home and how you'll use the space, recommend the right insulation and approach, and give you an initial idea of cost."],
  ["Your quote", "A clear, no-obligation quote with a full cost breakdown. No pressure, no being left in the dark."],
  ["Happy to go ahead?", "Once you're happy to proceed, we book in your in-person assessment. No deposit at this stage."],
  ["In-person assessment", "An accredited assessor visits to carry out a full risk assessment and method statement, confirms everything with you, and takes a small deposit."],
  ["Installation", "Your accredited installers complete the work cleanly and tidily, protecting your home throughout and clearing up afterwards."],
];

const SR_BENEFITS = [
  ["Layers", "Maximise your space", "A complete, usable room, far more practical than a part-boarded loft you can barely get into."],
  ["Shield", "Protection for your belongings", "Durable, heat-reflective multifoil insulation helps keep stored items safe from moisture and damp."],
  ["Thermometer", "Better temperature regulation", "Multifoil insulation helps keep your whole home warmer in winter and cooler in summer, not just the loft."],
  ["Home", "Keeps pests out", "A boarded, foil-lined loft helps deter rats, mice, wasps and spiders."],
  ["Pound", "Cheaper than converting", "Reclaim usable space for a fraction of the cost and disruption of a full habitable loft conversion."],
  ["Trend", "Adds value to your home", "A ready-to-use, turnkey storage space makes your home more functional, and can lift its market value by as much as 14%."],
];

const SR_WHY_RJ = [
  "Fully boarded & lit", "No lost head height",
  "Safe ladder & hatch access", "Building-regulations compliant",
  "Existing insulation kept intact", "Lifetime guarantee (IWA-protected)",
  "Multifoil insulation to the rafters", "Nationwide delivery & installation",
];

const SR_REVIEWS = [
  ["Joanna Janus", "Brilliant from start to finish: a thorough survey, a clear quote with no pressure, and a spotless install. The house is noticeably warmer already."],
  ["K Clarke", "Most professional, worked hard and did a brilliant job. They used lambs wool and Superfoil, and both look spectacular and our house is warmer. An excellent company."],
  ["Weston", "Genuinely no hard sell. Friendly, knowledgeable and tidy. We're delighted with the work and wouldn't hesitate to recommend RJ Insulation."],
];

const BROCHURE_URL = "https://rjinsulation.co.uk/wp-content/uploads/2026/07/RJ-Loft-Storage-Rooms-Brochure.pdf";
const CALLBACK_URL = "https://meetings-eu1.hubspot.com/ross-spence";

function ThankYouStorageRoomPage({ onNav }) {
  const Ic = LIcons;
  useReveal();
  // Fire the single generate_lead conversion once (data stashed on submit).
  React.useEffect(() => { fireLeadConversionOnce(); }, []);
  return (
    <div>
      {/* Confirmation banner */}
      <WavePanel color="dark-slate" radius="0" style={{ color: "#fff" }}>
        <div className="wrap" style={{ padding: "72px 28px 76px", textAlign: "center", maxWidth: 820 }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "rgba(198,226,153,0.16)", color: "var(--lii-grass-green)", display: "grid", placeItems: "center", margin: "0 auto 22px" }}>
            <Ic.CheckCircle size={48} />
          </div>
          <div className="eyebrow-row" style={{ justifyContent: "center" }}><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Loft storage room enquiry received</span></div>
          <h1 style={{ color: "#fff", fontSize: "clamp(34px,4.4vw,54px)", margin: "12px 0 16px", lineHeight: 1.06 }}>Thank you, your enquiry is in.</h1>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: 19, lineHeight: 1.6, margin: "0 auto", maxWidth: "34em" }}>
            Our accredited installation partner, <b style={{ color: "#fff" }}>RJ Insulation</b>, will call you shortly to talk through your loft storage room. In the meantime, download their brochure or book a callback at a time that suits you.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
            <Button variant="primary" size="lg" href={BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
            <Button variant="outline" onDark size="lg" href={CALLBACK_URL}>Request a callback</Button>
          </div>
        </div>
      </WavePanel>

      {/* Updated process */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <SectionHead center eyebrow="How it works" title="A simple, hassle-free process." marker
            sub="From your first enquiry to a finished room, five clear steps, with reassurance the whole way." />
          <div style={{ display: "grid", gap: 14 }}>
            {SR_PROCESS.map(([t, b], i) => (
              <Card key={t} raised className="reveal" style={{ padding: "22px 26px" }}>
                <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div className="step__n" style={{ margin: 0, flex: "none" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 style={{ margin: "2px 0 6px", fontSize: 19 }}>{t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>{b}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="center" style={{ marginTop: 24 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--lii-neutral-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-pill)", padding: "12px 22px", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 14.5, color: "var(--lii-dark-slate)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lii-warm-orange)", flex: "none" }}></span>
              Most storage rooms take an average of 2–5 days, depending on your chosen package.
            </span>
          </div>
        </div>
      </section>

      {/* Storage-room USPs */}
      <section className="section section--mist">
        <div className="wrap">
          <SectionHead center eyebrow="The benefits" title="Why homeowners create a loft storage room."
            sub="A complete, ready-to-use space that works harder than a part-boarded loft." />
          <div className="ben-grid">
            {SR_BENEFITS.map(([icon, t, b]) => {
              const C = Ic[icon];
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

      {/* Why RJ */}
      <section className="section">
        <div className="wrap">
          <WavePanel color="true-teal" radius="var(--radius-xl)" style={{ padding: "clamp(36px,5vw,60px)", color: "#fff" }}>
            <div className="eyebrow-row"><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>You're in expert hands</span></div>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.2vw,40px)", margin: "12px 0 14px" }}>Why choose an RJ loft storage room?</h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 17, lineHeight: 1.7, margin: "0 0 26px", maxWidth: "44em" }}>
              RJ Insulation are one of the UK's most trusted eco-friendly loft insulation and storage specialists, known for sustainable materials, meticulous workmanship and a genuinely no-pressure approach.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px 28px", marginBottom: 30 }}>
              {SR_WHY_RJ.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15.5 }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(198,226,153,0.18)", color: "var(--lii-grass-green)", display: "grid", placeItems: "center", flex: "none" }}><Ic.Check size={16} /></span>
                  {t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
              <Button variant="outline" onDark size="lg" href={CALLBACK_URL}>Request a callback</Button>
            </div>
          </WavePanel>
        </div>
      </section>

      {/* Social proof */}
      <section className="section section--mist">
        <div className="wrap">
          <SectionHead center eyebrow="RJ Insulation reviews" title="What their customers say." marker
            sub="A Which? Trusted Trader, rated excellent by the homeowners they've worked with." />
          <div className="center"><div className="rev-summary">
            <span className="score">4.9</span>
            <span><Stars size={16} /><div className="txt">Which? Trusted Trader · verified reviews</div></span>
          </div></div>
          <div className="rev-grid">
            {SR_REVIEWS.map(([name, text]) => (
              <Card key={name} raised className="rev reveal">
                <Stars size={18} />
                <p>“{text}”</p>
                <div className="rev__by">
                  <div className="rev__av">{name[0]}</div>
                  <div><div className="rev__name">{name}</div><div className="rev__src">RJ Insulation customer</div></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance close */}
      <section className="section">
        <div className="wrap">
          <WavePanel color="dark-slate" radius="var(--radius-xl)" style={{ padding: "clamp(36px,5vw,64px)", textAlign: "center", color: "#fff" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.2vw,40px)", margin: "0 0 14px" }}>Keep an eye out for their call.</h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 18, margin: "0 auto 28px", maxWidth: "40em" }}>While you wait, the brochure covers packages, specifications and pricing guidance for RJ loft storage rooms.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
              <Button variant="outline" onDark size="lg" onClick={() => onNav("loft-storage-rooms")}>Explore loft storage rooms</Button>
            </div>
          </WavePanel>
        </div>
      </section>
      <Funding onNav={onNav} target="home" variant="storage" />
    </div>
  );
}

export { ThankYouStorageRoomPage };
