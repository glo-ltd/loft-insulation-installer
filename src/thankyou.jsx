// Thank-you page for loft insulation enquiries (the standard thank-you).
// Introduces RJ Insulation, links their loft insulation brochure, states the
// sustainable-insulation USPs + why RJ, and walks the updated 4-step process.
// Form-only model: no phone/email; RJ calls the user back. noindex in production.
import React from 'react';
import { LIcons, Button, Card, WavePanel, SectionHead, Stars, useReveal } from './ui.jsx';
import { Funding } from './home.jsx';
import { getLeadContext } from './leadContext.js';
import { fireLeadConversionOnce } from './leadConversion.js';

const INS_BROCHURE_URL = "https://eu1.hubs.ly/H0wYjhv0";

const INS_PROCESS = [
  ["They'll call you back", "RJ Insulation's friendly team will call to talk through your home, your goals and the right sustainable material, with no pressure."],
  ["Free phone consultation & quote", "They'll talk through your loft over the phone, confirm the ideal material and depth for your home's age, and give you a clear, detailed, no-obligation quote. No hard sell."],
  ["Installation", "Accredited installers fit your insulation cleanly and tidily: dust sheets down, mess hoovered up, home respected."],
  ["Lifetime guarantee & aftercare", "Your insulation is covered by a lifetime, IWA-backed guarantee against the building, and they're there if you ever need them."],
];

const INS_BENEFITS = [
  ["Pound", "Cut your energy bills", "By keeping heat inside, insulation reduces how hard your heating works, saving you up to £315 a year on energy bills."],
  ["Thermometer", "A warmer home in winter", "No more overworking the heating to stay comfortable. A well-insulated loft holds warmth where you need it."],
  ["Cloud", "A cooler home in summer", "The right amount of insulation ventilates the roof space and keeps your home cooler when it's hot outside."],
  ["Droplet", "Less mould & condensation", "Breathable materials help regulate humidity, limiting the condensation that leads to mould."],
  ["Leaf", "A smaller carbon footprint", "Less wasted energy means fewer carbon emissions: a real, lasting reduction, year after year."],
  ["Trend", "Adds value to your home", "A fully, properly insulated home is more efficient and more appealing to buyers, and can lift your property's value."],
];

const INS_WHY_RJ = [
  "Four sustainable materials, never fibreglass-only",
  "Matched to your home's age & condition",
  "Which? Trusted Trader & Trading Standards Approved",
  "NIA member, IWA deposit & guarantee protection",
  "Clean, fast & mess-free: no hazardous airborne fibres",
  "Nationwide coverage across the UK",
  "Consistent 5-star customer reviews",
  "Lifetime guarantee against the building",
];

const RJ_REVIEWS = [
  ["Joanna Janus", "Brilliant from start to finish: a thorough survey, a clear quote with no pressure, and a spotless install. The house is noticeably warmer already."],
  ["K Clarke", "Most professional, worked hard and did a brilliant job. They used lambs wool and Superfoil, and both look spectacular and our house is warmer. An excellent company."],
  ["Weston", "Genuinely no hard sell. Friendly, knowledgeable and tidy. We're delighted with the work and wouldn't hesitate to recommend RJ Insulation."],
];

function ThankYouPage({ onNav }) {
  const Ic = LIcons;
  useReveal();
  const ctx = getLeadContext();
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
          <div className="eyebrow-row" style={{ justifyContent: "center" }}><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Loft insulation enquiry received</span></div>
          <h1 style={{ color: "#fff", fontSize: "clamp(34px,4.4vw,54px)", margin: "12px 0 16px", lineHeight: 1.06 }}>Thank you, your enquiry is in.</h1>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: 19, lineHeight: 1.6, margin: "0 auto", maxWidth: "34em" }}>
            Our accredited installation partner, <b style={{ color: "#fff" }}>RJ Insulation</b>, will call you shortly to talk through your home and arrange your free phone consultation. In the meantime, their brochure covers the four sustainable materials, the process and the guarantee.
          </p>
          {ctx && (
            <div style={{ display: "inline-flex", gap: 10, alignItems: "center", marginTop: 26, background: "rgba(255,255,255,0.08)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", padding: "10px 20px", fontSize: 14.5 }}>
              <Ic.Trend size={18} style={{ color: "var(--lii-grass-green)" }} />
              <span>We've noted your estimated saving of around <b style={{ color: "#fff" }}>£{Math.round(ctx.yearly).toLocaleString("en-GB")}/year</b> for your consultation.</span>
            </div>
          )}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
            <Button variant="primary" size="lg" href={INS_BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
          </div>
        </div>
      </WavePanel>

      {/* Updated process */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <SectionHead center eyebrow="What happens next" title="A simple, hassle-free process." marker
            sub="From here to a fully-insulated loft: four clear steps, with reassurance the whole way." />
          <div style={{ display: "grid", gap: 14 }}>
            {INS_PROCESS.map(([t, b], i) => (
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
              A standard loft is typically completed in 1–2 days: clean, fast and mess-free.
            </span>
          </div>
        </div>
      </section>

      {/* Sustainable insulation USPs */}
      <section className="section section--mist">
        <div className="wrap">
          <SectionHead center eyebrow="The benefits" title="One of the smartest improvements you can make."
            sub="Around 25% of your home's heat can escape through an uninsulated roof. Here's what a proper layer of sustainable insulation gives you back." />
          <div className="ben-grid">
            {INS_BENEFITS.map(([icon, t, b]) => {
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
          <p className="center" style={{ margin: "22px auto 0", fontSize: 13, color: "var(--text-muted)", maxWidth: "48em" }}>Saving of up to £315 a year is the estimate from Which? for a typical previously uninsulated home; actual savings vary by property.</p>
        </div>
      </section>

      {/* Why RJ */}
      <section className="section">
        <div className="wrap">
          <WavePanel color="true-teal" radius="var(--radius-xl)" style={{ padding: "clamp(36px,5vw,60px)", color: "#fff" }}>
            <div className="eyebrow-row"><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>You're in expert hands</span></div>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.2vw,40px)", margin: "12px 0 14px" }}>Why choose RJ Insulation?</h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 17, lineHeight: 1.7, margin: "0 0 26px", maxWidth: "44em" }}>
              RJ Insulation are the UK's leading eco-friendly loft insulation experts: sheep wool, hemp, SupaSoft recycled plastic and SuperFOIL multifoil, fitted to the highest standard whether you're insulating from scratch or topping up old, tired insulation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px 28px", marginBottom: 30 }}>
              {INS_WHY_RJ.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 15.5 }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(198,226,153,0.18)", color: "var(--lii-grass-green)", display: "grid", placeItems: "center", flex: "none" }}><Ic.Check size={16} /></span>
                  {t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={INS_BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
              <Button variant="outline" onDark size="lg" onClick={() => onNav("loft-insulation")}>Explore the materials</Button>
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
            {RJ_REVIEWS.map(([name, text]) => (
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
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 18, margin: "0 auto 28px", maxWidth: "40em" }}>While you wait, the brochure covers the four sustainable materials, which suits your home's age, and the lifetime guarantee.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href={INS_BROCHURE_URL} rightIcon={<Ic.Arrow size={18} />}>Download brochure</Button>
              <Button variant="outline" onDark size="lg" onClick={() => onNav("home", "calculator")}>See your savings</Button>
            </div>
          </WavePanel>
        </div>
      </section>
      <Funding onNav={onNav} target="home" variant="insulation" />
    </div>
  );
}

export { ThankYouPage };
