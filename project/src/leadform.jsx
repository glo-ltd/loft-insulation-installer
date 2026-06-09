// Core conversion components: Cost Savings Calculator + Lead Form.
// Both are reused on the homepage and (later) every service page.
const { LIcons, Button, Card, Badge, WavePanel } = window;

/* Shared, lightweight context passed from the calculator into the form so an
   enquiry arrives pre-contextualised. Not real submission, prototype only. */
window.__leadContext = window.__leadContext || null;

const INSULATION_TYPES = [
  "Sheep Wool: natural, for period / pre-1920 homes",
  "Foil (SuperFOIL): reflective, for 1920–1965 homes",
  "Recycled Plastic (SupaSoft): for post-1965 homes",
  "Hemp: natural, vegan, breathable",
  "Loft Boarding",
  "Loft Ladder",
  "Loft Hatch",
  "Not sure: please recommend the right option",
];
const AGES = [
  ["Pre-1920", "Sheep Wool: natural, for period / pre-1920 homes"],
  ["1920–1965", "Foil (SuperFOIL): reflective, for 1920–1965 homes"],
  ["Post-1965", "Recycled Plastic (SupaSoft): for post-1965 homes"],
];

const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

/* ---------- count-up tween ---------- */
function useCountUp(target, deps) {
  const [val, setVal] = React.useState(target);
  const raf = React.useRef(0);
  const from = React.useRef(target);
  React.useEffect(() => {
    cancelAnimationFrame(raf.current);
    const a = from.current, b = target, dur = 450;
    // Correctness first: snap to the target so the figure is always right,
    // even if requestAnimationFrame is throttled or unavailable.
    setVal(b);
    from.current = b;
    // Enhancement: animate the count-up from the previous value when rAF runs.
    if (typeof requestAnimationFrame === "function" && a !== b) {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
        setVal(a + (b - a) * e);
        if (t < 1) raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(raf.current);
  }, deps); // eslint-disable-line
  return val;
}

/* =====================  CALCULATOR  ===================== */
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
    window.__leadContext = { bill, yearly: Math.round(yearly) };
    window.dispatchEvent(new Event("lii-context"));
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
          during your free survey.
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
          <p className="micro"><Ic.CheckCircle size={16} /> Free, no-obligation survey to confirm your savings.</p>
        </div>
      </div>
    </div>
  );
}

/* =====================  LEAD FORM  ===================== */
function LeadForm({ onNav, compact = false, title, sub, presetType = "" }) {
  const Ic = LIcons;
  const [type, setType] = React.useState(presetType);
  const [age, setAge] = React.useState(null);
  const [ctx, setCtx] = React.useState(window.__leadContext);

  // Keep the dropdown in sync if the preset changes (e.g. navigating
  // directly between service pages, where the form instance is reused).
  React.useEffect(() => { setType(presetType); }, [presetType]);

  // Pick up calculator context when the form mounts / becomes relevant.
  React.useEffect(() => {
    const sync = () => setCtx(window.__leadContext);
    sync();
    window.addEventListener("lii-context", sync);
    return () => window.removeEventListener("lii-context", sync);
  }, []);

  const pickAge = (mappedType) => { setType(mappedType); };

  const submit = (e) => {
    e.preventDefault();
    window.__leadContext = ctx; // carry through
    onNav("thank-you");
  };

  return (
    <form className={`leadform ${compact ? "leadform--inline" : ""}`} onSubmit={submit}>
      {(title || sub) && (
        <div className="leadform__head">
          {title && <h3>{title}</h3>}
          {sub && <p>{sub}</p>}
        </div>
      )}

      {ctx && (
        <div className="lf-context">
          <Ic.Trend size={18} />
          <span>Based on a <b>{gbp(ctx.bill)}/mo</b> heating bill, you could save around <b>{gbp(ctx.yearly)}/year</b>. We'll confirm during your free survey.</span>
        </div>
      )}

      <div className="lf-row">
        <div className="lf-field"><label>First name <span className="req">*</span></label><input className="lii-input" placeholder="Jane" required /></div>
        <div className="lf-field"><label>Last name <span className="req">*</span></label><input className="lii-input" placeholder="Smith" required /></div>
      </div>
      <div className="lf-row">
        <div className="lf-field"><label>Phone <span className="req">*</span></label><input className="lii-input" type="tel" placeholder="07700 900123" required /></div>
        <div className="lf-field"><label>Postcode <span className="req">*</span></label><input className="lii-input" placeholder="e.g. M1 4WP" required /></div>
      </div>
      <div className="lf-field"><label>Email <span className="req">*</span></label><input className="lii-input" type="email" placeholder="jane@example.com" required /></div>
      <div className="lf-field">
        <label>What are you interested in?</label>
        <select className="lii-input" value={type} onChange={(e) => { setType(e.target.value); }}>
          <option value="">Choose a service… (optional)</option>
          {INSULATION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {!compact && (
        <>
          <details className="lf-helper">
            <summary><Ic.Home size={16} /> Not sure which you need? Pick your home's age <span className="pm"><Ic.Plus size={14} /></span></summary>
            <div className="lf-helper__ages">
              {AGES.map(([yr, mapped]) => (
                <div key={yr} className={`lf-age ${type === mapped ? "sel" : ""}`} onClick={() => pickAge(mapped)}>
                  <div className="yr">{yr}</div>
                  <div className="rec">{mapped.split(":")[0].split(" (")[0]}</div>
                </div>
              ))}
            </div>
          </details>
          <div className="lf-field"><label>Your message (optional)</label><input className="lii-input" placeholder="Tell us about your loft, current insulation, any questions…" /></div>
        </>
      )}

      <Button variant="primary" size="lg" block type="submit" rightIcon={<Ic.Arrow size={18} />}>Get my free quote</Button>
      <p className="lf-reassure"><Ic.Shield size={15} /> No obligation. We'll never share your details.</p>
    </form>
  );
}

Object.assign(window, { Calculator, LeadForm, INSULATION_TYPES });
