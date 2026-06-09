// Thank-you page, shown after a form submission. Introduces the matched
// accredited installer (RJ Insulation) and sells their USPs. Form-only model:
// no phone/email, RJ will call the user back. noindex in production.
const { LIcons, Logo, Button, Card, Badge, WavePanel, SectionHead, Stars, useReveal, Funding } = window;

const NEXT_STEPS = [
  ["Phone", "They'll call you", "RJ Insulation will call you back shortly to understand your home and what you need, with no hard sell."],
  ["Home", "Free home survey", "They arrange a free, no-obligation survey at a time that suits you, and recommend the right material."],
  ["CheckCircle", "A clear quote", "You receive a clear, no-pressure quote with a full breakdown, and no obligation to proceed."],
];

const USPS = [
  ["ShieldCheck", "Lifetime guarantee", "Insulation guaranteed for the lifetime of the building, insurance-backed by the IWA."],
  ["Leaf", "Sustainable materials", "Sheep's Wool, Hemp, SuperFOIL and SupaSoft recycled-plastic: biodegradable, low-VOC options, not fibreglass-only work."],
  ["Award", "Fully accredited", "Which? Trusted Trader, National Insulation Association, Trading Standards approved, with IWA deposit & guarantee protection."],
  ["Smile", "No hard sell", "Fast, clear quotes with no pressure, a theme that runs through their customer reviews."],
  ["Sparkle", "Clean & courteous", "Dust-sheeted, tidy and respectful of your home, hoovering up after every job."],
  ["Pound", "Free, no-obligation", "A free survey and quote, with absolutely no obligation to proceed."],
];

const RJ_REVIEWS = [
  ["Joanna Janus", "Brilliant from start to finish: a thorough survey, a clear quote with no pressure, and a spotless install. The house is noticeably warmer already."],
  ["K Clarke", "Most professional, worked hard and did a brilliant job. They used lambs wool and Superfoil, and both look spectacular and our house is warmer. An excellent company."],
  ["Weston", "Genuinely no hard sell. Friendly, knowledgeable and tidy. We're delighted with the work and wouldn't hesitate to recommend RJ Insulation."],
];

function RJLogo() {
  // Simple, on-brand wordmark placeholder for the partner brand.
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 46, height: 46, borderRadius: 12, background: "var(--lii-true-teal)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}>RJ</span>
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: "var(--text-heading)", letterSpacing: "-0.01em" }}>RJ&nbsp;Insulation</span>
    </span>
  );
}

function ThankYouPage({ onNav }) {
  const Ic = LIcons;
  useReveal();
  const ctx = window.__leadContext;
  return (
    <div>
      {/* Confirmation banner */}
      <WavePanel color="dark-slate" radius="0" style={{ color: "#fff" }}>
        <div className="wrap" style={{ padding: "72px 28px 76px", textAlign: "center", maxWidth: 800 }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "rgba(198,226,153,0.16)", color: "var(--lii-grass-green)", display: "grid", placeItems: "center", margin: "0 auto 22px" }}>
            <Ic.CheckCircle size={48} />
          </div>
          <div className="eyebrow-row" style={{ justifyContent: "center" }}><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Enquiry received</span></div>
          <h1 style={{ color: "#fff", fontSize: "clamp(34px,4.4vw,54px)", margin: "12px 0 16px", lineHeight: 1.06 }}>Thank you, your enquiry is in.</h1>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: 19, lineHeight: 1.6, margin: "0 auto", maxWidth: "34em" }}>
            One of our accredited installation partners, <b style={{ color: "#fff" }}>RJ Insulation</b>, will call you shortly to arrange your free, no-obligation survey.
          </p>
          {ctx && (
            <div style={{ display: "inline-flex", gap: 10, alignItems: "center", marginTop: 26, background: "rgba(255,255,255,0.08)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", padding: "10px 20px", fontSize: 14.5 }}>
              <Ic.Trend size={18} style={{ color: "var(--lii-grass-green)" }} />
              <span>We've noted your estimated saving of around <b style={{ color: "#fff" }}>£{Math.round(ctx.yearly).toLocaleString("en-GB")}/year</b> for your survey.</span>
            </div>
          )}
        </div>
      </WavePanel>

      {/* What happens next */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="What happens next" title="Three simple steps from here." marker
            sub="No forms to chase, no pressure. Here's exactly what to expect." />
          <div className="svc-grid svc-grid--3" style={{ alignItems: "stretch" }}>
            {NEXT_STEPS.map(([icon, t, b], i) => {
              const C = Ic[icon];
              return (
                <Card key={t} raised className="ben reveal" style={{ padding: 30 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div className="step__n" style={{ margin: 0 }}>{String(i + 1).padStart(2, "0")}</div>
                    <div className="ben__ic" style={{ margin: 0 }}><C size={24} /></div>
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 20 }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 14.5 }}>{b}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introducing RJ Insulation */}
      <section className="section section--mist" id="rj">
        <div className="wrap split">
          <div className="reveal">
            <span className="lii-eyebrow">You're in expert hands</span>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,42px)", margin: "12px 0 18px" }}>Introducing <span className="lii-marker">RJ Insulation.</span></h2>
            <div style={{ marginBottom: 18 }}><RJLogo /></div>
            <p style={{ fontSize: 17, lineHeight: 1.7, margin: "0 0 16px" }}>RJ Insulation are one of the UK's most trusted eco-friendly loft insulation and storage specialists, known for sustainable materials, meticulous workmanship and a genuinely no-pressure approach.</p>
            <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>They're an accredited member of the installer network you've just been matched with, so you can expect impartial, expert advice tailored to your home.</p>
          </div>
          <Card raised style={{ padding: 32 }} className="reveal">
            <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-heading)", fontSize: 20, margin: "0 0 18px" }}>Why you'll be glad we matched you</h3>
            <div style={{ display: "grid", gap: 14 }}>
              {USPS.slice(0, 4).map(([icon, t, b]) => {
                const C = Ic[icon];
                return (
                  <div key={t} style={{ display: "flex", gap: 14 }}>
                    <span style={{ width: 40, height: 40, borderRadius: 11, background: "var(--lii-orange-100)", color: "var(--lii-warm-orange)", display: "grid", placeItems: "center", flex: "none" }}><C size={20} /></span>
                    <div><b style={{ fontFamily: "var(--font-ui)", color: "var(--lii-dark-slate)", fontSize: 15, display: "block", marginBottom: 2 }}>{t}</b><span style={{ fontSize: 13.5, color: "var(--text-body)" }}>{b}</span></div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>

      {/* Full USP grid */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="The RJ Insulation difference" title="Six reasons homeowners trust them."
            sub="Genuine differentiators: the things their customers mention again and again." />
          <div className="ben-grid">
            {USPS.map(([icon, t, b]) => {
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
          <WavePanel color="true-teal" radius="var(--radius-xl)" style={{ padding: "clamp(36px,5vw,64px)", textAlign: "center", color: "#fff" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.2vw,40px)", margin: "0 0 14px" }}>Keep an eye out for their call.</h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 18, margin: "0 auto 28px", maxWidth: "40em" }}>While you wait, see how much you could save by improving your loft insulation, or read up on the sustainable materials we fit.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" onClick={() => onNav("home", "calculator")} rightIcon={<Ic.Arrow size={18} />}>See your savings</Button>
              <Button variant="outline" onDark size="lg" onClick={() => onNav("home")}>Back to homepage</Button>
            </div>
          </WavePanel>
        </div>
      </section>
      <Funding onNav={onNav} target="home" variant="insulation" />
    </div>
  );
}
window.ThankYouPage = ThankYouPage;
