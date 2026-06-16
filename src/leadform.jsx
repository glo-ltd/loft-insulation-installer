import React from 'react';
import { LIcons, Button } from './ui.jsx';
import { getLeadContext, setLeadContext } from './leadContext.js';

const INSULATION_TYPES = [
  "Sheep Wool - For Pre-1920 Homes",
  "Foil - For 1920-1965 Homes",
  "Recycled Plastic - For Post-1965 Homes",
  "Hemp - Vegan",
  "Complete Loft Storage Rooms",
  "Not Sure",
];
const AGES = [
  ["Pre-1920", "Sheep Wool - For Pre-1920 Homes"],
  ["1920–1965", "Foil - For 1920-1965 Homes"],
  ["Post-1965", "Recycled Plastic - For Post-1965 Homes"],
];

const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

function useCountUp(target, deps) {
  const [val, setVal] = React.useState(target);
  const raf = React.useRef(0);
  const from = React.useRef(target);
  React.useEffect(() => {
    cancelAnimationFrame(raf.current);
    const a = from.current, b = target, dur = 450;
    setVal(b);
    from.current = b;
    if (typeof requestAnimationFrame === "function" && a !== b) {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        setVal(a + (b - a) * e);
        if (t < 1) raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(raf.current);
  }, deps); // eslint-disable-line
  return val;
}

function Calculator({ onStartSaving }) {
  const Ic = LIcons;
  const MIN = 30, MAX = 400;
  const [bill, setBill] = React.useState(120);
  const monthly = bill * 0.25;
  const yearly = bill * 3;
  const dispMonthly = useCountUp(monthly, [monthly]);
  const dispYearly = useCountUp(yearly, [yearly]);
  const pct = ((bill - MIN) / (MAX - MIN)) * 100;

  const start = () => {
    setLeadContext({ bill, yearly: Math.round(yearly) });
    onStartSaving && onStartSaving();
  };

  return (
    <div className="calc-wrap reveal">
      <div className="calc-input">
        <h3>Loft Insulation Cost Savings Calculator.</h3>
        <p className="lead">See how much you could save each year. Drag the slider to your average monthly heating bill.</p>
        <div className="calc-billrow">
          <span className="lbl">Your average monthly heating bill</span>
          <span className="big" aria-hidden="true">{gbp(bill)}<span className="per"> / mo</span></span>
        </div>
        <input
          className="calc-slider" type="range" min={MIN} max={MAX} step={5} value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          style={{ background: `linear-gradient(90deg, var(--lii-warm-orange) ${pct}%, var(--lii-cool-mist) ${pct}%)` }}
          aria-label="Your average monthly heating bill in pounds"
          aria-valuetext={gbp(bill) + " per month"}
        />
        <div className="calc-scale"><span>£30</span><span>£400+</span></div>
        <p className="calc-disclaimer">
          Estimate only. Savings assume a 25% reduction in heating costs from improved loft insulation; actual savings
          vary by property type, current insulation, energy prices and usage. We'll confirm your potential savings
          during your free phone consultation.
        </p>
      </div>
      <div className="calc-results">
        <span className="lii-eyebrow">Your estimated saving</span>
        <div className="calc-figs">
          <div className="calc-fig calc-fig--month">
            <div className="k">You could save</div>
            <div className="v" role="status" aria-live="polite">{gbp(dispMonthly)}<span className="per"> / month</span></div>
          </div>
          <div className="calc-fig calc-fig--year">
            <div className="k">That's around</div>
            <div className="v">{gbp(dispYearly)}<span className="per"> / year</span></div>
          </div>
        </div>
        <div className="calc-bar" aria-hidden="true"><div className="calc-bar__fill" style={{ width: `${Math.max(8, pct)}%` }} /></div>
        <div className="calc-cta">
          <Button variant="primary" size="lg" block onClick={start} rightIcon={<Ic.Arrow size={18} />}>Start saving</Button>
          <p className="micro"><Ic.CheckCircle size={16} /> Free phone consultation to confirm your savings.</p>
        </div>
      </div>
    </div>
  );
}

function LeadForm({ onNav, compact = false, title, sub, presetType = "", ageHelper = false }) {
  const Ic = LIcons;
  const [type, setType] = React.useState(presetType);
  const [ctx, setCtx] = React.useState(getLeadContext);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => { setType(presetType); }, [presetType]);

  React.useEffect(() => {
    const sync = () => setCtx(getLeadContext());
    sync();
    window.addEventListener("lii-context", sync);
    return () => window.removeEventListener("lii-context", sync);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const webhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
    if (webhookUrl) {
      // Send as x-www-form-urlencoded so the browser treats this as a "simple"
      // cross-origin request (no CORS preflight). The POST then reaches Zapier
      // even though we can't read its cross-origin response, and Zapier's Catch
      // Hook maps these into individual fields just like JSON.
      const body = new URLSearchParams({
        firstName, lastName, phone, postcode, email,
        serviceInterest: type,
        message,
        estimatedMonthlyBill: ctx?.bill ?? "",
        estimatedYearlySaving: ctx?.yearly ?? "",
      });
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body,
        });
      } catch (_) {}
    } else if (import.meta.env.DEV) {
      console.warn("VITE_ZAPIER_WEBHOOK_URL is not set — the form did not send data to Zapier.");
    }
    // Fire a GA4 conversion via GTM's dataLayer. No personal data is sent
    // (no name/email/phone) — only non-PII context, per GA4 policy.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      form_name: "lead_form",
      service_interest: type || "unspecified",
      estimated_monthly_bill: ctx?.bill,
      estimated_yearly_saving: ctx?.yearly,
    });
    setLeadContext(ctx);
    onNav("thank-you");
  };

  return (
    <form className={`leadform ${compact ? "leadform--inline" : ""}`} onSubmit={submit}>
      {(title || sub) && (
        <div className="leadform__head">
          {title && <h2>{title}</h2>}
          {sub && <p>{sub}</p>}
        </div>
      )}

      {ctx && (
        <div className="lf-context">
          <Ic.Trend size={18} />
          <span>Based on a <b>{gbp(ctx.bill)}/mo</b> heating bill, you could save around <b>{gbp(ctx.yearly)}/year</b>. We'll confirm during your free phone consultation.</span>
        </div>
      )}

      <div className="lf-row">
        <div className="lf-field"><label>First name <span className="req">*</span></label><input className="lii-input" placeholder="Jane" required value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
        <div className="lf-field"><label>Last name <span className="req">*</span></label><input className="lii-input" placeholder="Smith" required value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
      </div>
      <div className="lf-row">
        <div className="lf-field"><label>Phone <span className="req">*</span></label><input className="lii-input" type="tel" placeholder="07700 900123" required value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
        <div className="lf-field"><label>Postcode <span className="req">*</span></label><input className="lii-input" placeholder="e.g. M1 4WP" required value={postcode} onChange={(e) => setPostcode(e.target.value)} /></div>
      </div>
      <div className="lf-field"><label>Email <span className="req">*</span></label><input className="lii-input" type="email" placeholder="jane@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <div className="lf-field">
        <label>What are you interested in? <span className="req">*</span></label>
        <select aria-label="What are you interested in?" className="lii-input" value={type} onChange={(e) => { setType(e.target.value); }} required>
          <option value="" disabled>Choose a service…</option>
          {INSULATION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {ageHelper && (
        <details className="lf-helper">
          <summary><Ic.Home size={16} /> Not sure which you need? Pick your home's age <span className="pm"><Ic.Plus size={14} /></span></summary>
          <div className="lf-helper__ages">
            {AGES.map(([yr, mapped]) => (
              <div key={yr} className={`lf-age ${type === mapped ? "sel" : ""}`} onClick={() => setType(mapped)}>
                <div className="yr">{yr}</div>
                <div className="rec">{mapped.split(" - ")[0]}</div>
              </div>
            ))}
          </div>
        </details>
      )}
      {!compact && (
        <>
          <div className="lf-field"><label>Your message (optional)</label><input className="lii-input" placeholder="Tell us about your loft, current insulation, any questions…" value={message} onChange={(e) => setMessage(e.target.value)} /></div>
        </>
      )}

      <Button variant="primary" size="lg" block type="submit" rightIcon={<Ic.Arrow size={18} />} style={submitting ? { opacity: 0.7 } : {}}>
        {submitting ? "Sending…" : "Get my free quote"}
      </Button>
      <p className="lf-reassure"><Ic.Shield size={15} /> No obligation. We'll never share your details.</p>
    </form>
  );
}

export { Calculator, LeadForm, INSULATION_TYPES };
