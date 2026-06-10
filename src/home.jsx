import React from 'react';
// Homepage. CRO-optimised, section by section per the brief.
import { LIcons, Button, Card, Badge, WavePanel, SectionHead, Stars, useReveal } from './ui.jsx';
import { Calculator, LeadForm } from './leadform.jsx';
import { CtaBand } from './chrome.jsx';

/* ---------- Hero (with embedded lead form) ---------- */
function Hero({ onNav }) {
  const Ic = LIcons;
  return (
    <WavePanel color="dark-slate" radius="0" className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="eyebrow-row"><Ic.Leaf size={16} style={{ color: "var(--lii-grass-green)" }} /><span className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Sustainable · Eco-friendly · UK-wide</span></div>
          <h1>Eco-friendly loft insulation, installed by <span className="u">accredited local experts.</span></h1>
          <p className="hero__sub">We connect you with vetted, accredited installers who fit the right sustainable insulation for your home, giving you a warmer house, lower energy bills and a lighter footprint.</p>
          <div className="hero__trust">
            <span><Ic.CheckCircle size={18} /> Free home survey</span>
            <span><Ic.Pound size={18} /> No-obligation quote</span>
            <span><Ic.ShieldCheck size={18} /> Accredited installer network</span>
          </div>
          <div className="hero__rating">
            <Stars size={18} />
            <span className="txt"><b>Rated excellent</b> by homeowners across the UK · Which? Trusted network</span>
          </div>
        </div>
        <div className="hero__media">
          <LeadForm onNav={onNav} compact title="Get your free quote." sub="Most surveys booked within 48 hours. No obligation." />
        </div>
      </div>
    </WavePanel>
  );
}

/* ---------- Trust bar ---------- */
const ACCRED = ["PAS 2030", "Which? Trusted", "Elmhurst Energy", "AECB", "ECMK", "British Assessment Bureau", "QualityMark", "IWA"];
function TrustBar({ mist }) {
  const Ic = LIcons;
  return (
    <div className={`trust ${mist ? "trust--mist" : ""}`}>
      <div className="wrap">
        <div className="trust__lbl">Accredited &amp; approved by</div>
        <div className="trust__row">
          {ACCRED.map((a) => <span className="trust__chip" key={a}><Ic.Shield size={15} /> {a}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ---------- Value proposition / intro ---------- */
const INTRO_BENEFITS = ["Lower energy bills", "A warmer home in winter", "Cooler through summer", "Less condensation", "More property value", "Fewer carbon emissions"];
function Intro() {
  const Ic = LIcons;
  return (
    <section className="section">
      <div className="wrap intro reveal">
        <div>
          <span className="lii-eyebrow">Why insulate your loft</span>
          <h2><span className="lii-marker">Keep the heat where it belongs.</span></h2>
          <p>Around a quarter of your home's heat escapes through the roof. A proper layer of loft insulation creates a thermal barrier that keeps warm air in, so you stay comfortable, waste less energy and cut your carbon footprint.</p>
          <p>We're not a faceless trade. We match you with an accredited local installer who surveys your loft, recommends the right sustainable material, and fits it cleanly and correctly, at a fair price.</p>
          <ul className="benefit-list">
            {INTRO_BENEFITS.map((b) => <li key={b}><Ic.Check size={18} /> {b}</li>)}
          </ul>
        </div>
        <div className="intro__aside">
          <Card raised className="mini-stat"><span className="n">¼</span><span className="l">of household heat is lost through an uninsulated roof.</span></Card>
          <WavePanel color="true-teal" radius="var(--radius-md)" className="mini-stat mini-stat--accent"><span className="n">14%</span><span className="l">potential uplift to your property's market value.</span></WavePanel>
          <Card raised className="mini-stat"><span className="n">2–3<span style={{ fontSize: 18 }}>hrs</span></span><span className="l">to fully insulate a standard three-bedroom home.</span></Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Calculator section ---------- */
function CalcSection({ onNav }) {
  return (
    <section className="section section--mist" id="calculator">
      <div className="wrap">
        <SectionHead center eyebrow="Cost savings calculator" title="See how much you could save." marker
          sub="Improving your loft insulation typically cuts heating costs by around a quarter. Move the slider to estimate your saving." />
        <Calculator onStartSaving={() => onNav("home", "quote")} />
      </div>
    </section>
  );
}

/* ---------- Loft insulation types (4 cards) ---------- */
const INS_CARDS = [
  { id: "sheep-wool", brand: "Thermafleece", title: "Sheep Wool", tag: "Period homes", img: "/assets/sheep-wool.jpg", body: "Natural, renewable and breathable. Ideal for older, pre-1920 properties with untreated timbers." },
  { id: "foil", brand: "SuperFOIL", title: "Foil", tag: "1920–1965", img: "/assets/foil.jpg", body: "Slim reflective multifoil, first proven in spacecraft, that bounces radiant heat back into the home." },
  { id: "recycled-plastic", brand: "SupaSoft", title: "Recycled Plastic", tag: "Post-1965", img: "/assets/recycled-plastic.jpg", body: "Made from thousands of recycled bottles. Soft, safe to handle and easy to fit in modern homes." },
  { id: "hemp", brand: "Natural fibre", title: "Hemp", tag: "Vegan & natural", img: "/assets/hemp.jpg", body: "A vegan alternative to sheep's wool: breathable, moisture-balancing and beautifully sustainable." },
];
function InsulationTypes({ onNav }) {
  const Ic = LIcons;
  return (
    <section className="section" id="insulation-types">
      <div className="wrap">
        <SectionHead eyebrow="Loft insulation" title="Choose your sustainable material." marker
          sub="Four eco-friendly materials, each suited to a different kind of home. Not sure? Our survey recommends the right one for you." />
        <div className="svc-grid svc-grid--4">
          {INS_CARDS.map((m) => {
            const Ph = m.ph ? Ic[m.ph] : null;
            return (
            <Card key={m.id} raised interactive className="svc" onClick={() => onNav(m.id)}>
              <div className="svc__top">
                {m.img
                  ? <><img src={m.img} alt={m.title + " loft insulation"} loading="lazy" /><div className="ovl" /></>
                  : <WavePanel color={m.phColor} className="svc__ph" style={{ position: "absolute", inset: 0 }}><Ph size={56} /></WavePanel>}
                <span className="svc__tag"><Badge tone="green">{m.tag}</Badge></span>
              </div>
              <div className="svc__body">
                <div className="svc__brand">{m.brand}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
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

/* ---------- Loft storage services (3 cards) ---------- */
const STORE_CARDS = [
  { id: "loft-boarding", title: "Loft Boarding", img: "/assets/loft-boarding.jpg", tag: "Reclaim your space", body: "Turn a dark, unsafe loft into safe, usable storage, raised over your insulation so it keeps performing." },
  { id: "loft-ladders", title: "Loft Ladders", img: "/assets/loft-ladder.jpg", tag: "Safe access", body: "Sturdy, space-saving ladders professionally fitted, so there's no more balancing on chairs to reach the loft." },
  { id: "loft-hatch", title: "Loft Hatch", img: "/assets/loft-hatch.jpg", tag: "Draught-sealed", body: "Insulated, airtight loft hatches that cut draughts and heat loss, fitted by certified specialists." },
  { id: "loft-storage-rooms", title: "Loft Storage Rooms", img: "/assets/loft-storage-room.jpg", tag: "More usable space", body: "Transform an empty loft into a clean, fully-boarded storage room: insulated, lit and ready to use." },
];
function StorageServices({ onNav }) {
  const Ic = LIcons;
  return (
    <section className="section section--mist" id="storage-services">
      <div className="wrap">
        <SectionHead eyebrow="Loft storage" title="Make more of your loft." marker
          sub="Reclaim unused space without undoing your insulation. Boarding, ladders, hatches and full storage rooms, fitted to building-regs standard." />
        <div className="svc-grid svc-grid--4">
          {STORE_CARDS.map((s) => {
            return (
            <Card key={s.id} raised interactive className="svc" onClick={() => onNav(s.id)}>
              <div className="svc__top">
                <img src={s.img} alt={s.title + ", fitted by an accredited installer"} loading="lazy" /><div className="ovl" />
                <span className="svc__tag"><Badge tone="green">{s.tag}</Badge></span>
              </div>
              <div className="svc__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
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

/* ---------- Benefits grid (6) ---------- */
const BENEFITS = [
  ["Pound", "Lower energy bills", "Save up to £225–£580 a year on fuel and energy bills with the best-performing insulation."],
  ["Thermometer", "A warmer home", "Stay warm in winter and, with proper ventilation, keep your home cooler through the summer."],
  ["Droplet", "Less condensation", "The right amount of insulation reduces damp and condensation build-up across your home."],
  ["Smile", "Peace of mind", "Stop pumping more energy into your home than you need. Calm your mind and your meter readings."],
  ["Trend", "More home value", "Boosting energy efficiency can lift your property's market value, by as much as 14%."],
  ["Cloud", "Fewer emissions", "Less wasted energy means a smaller carbon footprint: a real, lasting reduction in emissions."],
];
function Benefits() {
  const Ic = LIcons;
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow="The benefits" title="Why homeowners insulate with us." marker
          sub="Effective loft insulation reduces your bills, your carbon footprint and your discomfort in cold weather, and the difference is felt immediately." />
        <div className="ben-grid">
          {BENEFITS.map(([icon, t, b]) => {
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
  );
}

/* ---------- Why a professional / accredited installer ---------- */
const WHY = [
  ["ShieldCheck", "Accredited & insured", "Every installer in our network is vetted, fully insured and certified, so the work meets a guaranteed standard."],
  ["Award", "High-quality work", "Trained, properly-equipped fitters minimise the risk of faulty fitting, injury or damage to your property."],
  ["Leaf", "Safer & cleaner", "Professional kit and dust protection handle the sharp, easily-inhaled fibres that DIY insulation can't."],
  ["Sparkle", "Tidy, every time", "Hazards surveyed before work begins, belongings respected, and everything cleaned up once the job's done."],
];
function WhyPro() {
  const Ic = LIcons;
  return (
    <section className="section section--mist" id="why">
      <div className="wrap split">
        <div className="split__media reveal">
          <img src="/assets/team.jpg" alt="The accredited Loft Insulation Installer team in a customer's home" loading="lazy" />
        </div>
        <div>
          <span className="lii-eyebrow">Why choose us</span>
          <h2 style={{ fontSize: "clamp(28px,3.2vw,42px)", margin: "12px 0 0" }}><span className="lii-marker">Work with a trusted partner, not just a trade.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, margin: "16px 0 0" }}>When you enquire, we match you with an accredited local specialist, so you get expert advice and a properly-fitted job, with none of the risk of going it alone.</p>
          <ul className="why-list">
            {WHY.map(([icon, t, b]) => {
              const C = Ic[icon];
              return <li key={t}><span className="ic"><C size={20} /></span><div><b>{t}</b><span>{b}</span></div></li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works (5 steps) ---------- */
const STEPS = [
  ["Free survey", "An accredited surveyor reviews your loft, including its dimensions, ventilation, lighting and floor stability, to confirm what's suitable."],
  ["Your quote", "You receive a clear, detailed quote with a full cost breakdown. No pressure, no being left in the dark."],
  ["Place your order", "Happy to go ahead? Lock in a date with a small deposit, plus your contract and completion estimate."],
  ["Technical survey", "A closer assessment of the loft floor so nothing is missed, working around storage and existing materials."],
  ["Installation", "Your installer fits the insulation safely and tidily. A standard three-bed loft takes around 2–3 hours."],
];
function Process({ eyebrow = "How it works", title = "A simple, hassle-free process.", sub = "From first enquiry to a fully insulated loft: five clear steps, with reassurance the whole way.", cta = null }) {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} marker sub={sub} />
        <div className="steps">
          {STEPS.map(([t, b], i) => (
            <div className="step reveal" key={t}>
              <div className="step__n">{String(i + 1).padStart(2, "0")}</div>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
        {cta && <div style={{ marginTop: 52 }}>{cta}</div>}
      </div>
    </section>
  );
}

/* ---------- Funding & savings strip (shared, per-page variant) ---------- */
const FUNDING = {
  insulation: {
    eyebrow: "Bills & impact",
    title: "Lower bills and a lighter footprint.",
    sub: "Improving your home's thermal efficiency cuts the energy you waste, and the emissions that come with it. The savings, and the difference, last for years.",
    a: { big: "£580", unit: "/yr", h: "Potential energy-bill saving", p: "Some households save up to £580 a year with the best-performing loft insulation. A quarter of heat is lost through the roof, and an effective layer cuts that waste fast." },
    b: { big: "1,300", unit: "kg", h: "Less CO₂ for a detached home, each year", p: "Roughly the equivalent of charging a smartphone over 150,000 times: a genuine reduction in your home's carbon footprint, year after year." },
  },
  storage: {
    eyebrow: "Space & efficiency",
    title: "More space, without the waste.",
    sub: "Make more of your loft without losing thermal performance. Done properly, loft storage reclaims valuable space while keeping your insulation, and your heat, exactly where they belong.",
    a: { big: "270mm", unit: "", h: "Insulation kept at full depth", p: "Raised storage sits above your insulation, so it keeps performing at full depth, no squashing and no lost heat, while you gain a usable floor." },
    b: { big: "14%", unit: "", h: "Potential property-value uplift", p: "A warmer, more functional home can be worth more, letting you reclaim usable space without the cost or upheaval of an extension." },
  },
};
function Funding({ onNav, target = "home", variant = "insulation" }) {
  const Ic = LIcons;
  const f = FUNDING[variant] || FUNDING.insulation;
  return (
    <section className="section section--slate">
      <div className="wrap">
        <SectionHead onDark eyebrow={f.eyebrow} title={f.title} sub={f.sub} />
        <div className="fund">
          <WavePanel color="true-teal" radius="var(--radius-xl)" className="fund__panel reveal">
            <div className="big">{f.a.big}<span style={{ fontSize: 22 }}>{f.a.unit}</span></div>
            <h3>{f.a.h}</h3>
            <p>{f.a.p}</p>
            <Button variant="outline" onDark onClick={() => onNav(target, "calculator")} rightIcon={<Ic.Arrow size={16} />}>Estimate your saving</Button>
          </WavePanel>
          <WavePanel color="orange" radius="var(--radius-xl)" className="fund__panel orange reveal">
            <div className="big">{f.b.big}<span style={{ fontSize: 22 }}>{f.b.unit}</span></div>
            <h3>{f.b.h}</h3>
            <p>{f.b.p}</p>
            <Button variant="secondary" onClick={() => onNav(target, "quote")} rightIcon={<Ic.Arrow size={16} />}>Get my free quote</Button>
          </WavePanel>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */
const REVIEWS = [
  ["Suffolk", "From placing the order to installation in just a week, every member of staff was friendly, polite and professional. The product and installation were explained in plain language, and the finished job is excellent."],
  ["Worcestershire", "Very efficient from start to finish, with no hard sell, we were given time and information to review the options. The team arrived on time, cleared the old insulation and communicated clearly throughout."],
  ["Derby", "A clean, efficient job by hardworking, friendly fitters, done in under five hours. They put the heavy items back for us afterwards. We're looking forward to a much warmer home."],
];
function Reviews({ title = "Trusted by homeowners across the UK.", sub = "Real reviews from people whose homes we've helped make warmer, quieter and more efficient.", reviews = REVIEWS }) {
  const Ic = LIcons;
  return (
    <section className="section section--mist" id="reviews">
      <div className="wrap">
        <SectionHead center eyebrow="What homeowners say" title={title} marker sub={sub} />
        <div className="center"><div className="rev-summary">
          <span className="score">4.9</span>
          <span><Stars size={16} /><div className="txt">Rated excellent · verified homeowner reviews</div></span>
        </div></div>
        <div className="rev-grid">
          {reviews.map(([name, text]) => (
            <Card key={name} raised className="rev reveal">
              <Stars size={18} />
              <p>"{text}"</p>
              <div className="rev__by">
                <div className="rev__av">{name[0]}</div>
                <div><div className="rev__name">{name}</div><div className="rev__src">Verified customer</div></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  ["What is loft insulation?", "Loft insulation is a layer of thermally resistant material installed in the roof space of a home to slow the escape of heat. It works by trapping pockets of still air within its structure, dramatically slowing the transfer of warmth from the heated rooms below into the cold loft and out through the roof. Because warm air rises and roughly a quarter of a home's heat is lost upward in an uninsulated property, this simple barrier has a disproportionately large effect on comfort and running costs. It usually comes in rolls or batts laid across and between the ceiling joists, though it can also be fitted between the rafters where a warmer insulated loft space or loft storage room is required. There are several material options, including natural sheep's wool and hemp, recycled plastic and reflective aluminium multifoil, alongside traditional mineral wool. The eco-friendly materials we arrange are designed to outperform older fibreglass while being safer and cleaner to handle. Correctly installed to around 270mm, or the equivalent for higher-performance products, loft insulation keeps working for decades with little maintenance. To understand which type best suits your home, an accredited installer from our network can advise during a no-obligation survey."],
  ["What is the purpose of loft insulation?", "The purpose of loft insulation is to slow the escape of heat through the roof so the rooms below stay warmer, more comfortable and more efficient to heat. Warm air naturally rises, so an uninsulated or poorly insulated loft can allow a large amount of heat to pass into the roof space and disappear through the roof covering. A properly installed insulation layer creates a thermal barrier across the loft floor or, in some projects, along the roof rafters. This keeps more warmth where it is needed and reduces the amount of energy the heating system has to use. Loft insulation also improves the feel of the home. Rooms can warm up faster, stay warm for longer and feel less affected by draughts or cold spots around ceilings. In summer, certain systems, especially foil at rafter level, can also help reduce heat build up in the roof space. The benefits depend on the current condition of the loft, the depth of insulation, the material chosen and whether details such as ventilation, pipework and the loft hatch are handled properly. Poorly installed insulation can be patchy or compressed, which reduces performance. A good installation should therefore improve comfort, reduce wasted heat and support a healthier, more usable loft space without creating condensation problems."],
  ["How is loft insulation installed?", "Professional loft insulation follows a straightforward, methodical process. It begins with a survey to assess the loft's dimensions, existing insulation, ventilation, joist depth and any hazards such as wiring or water tanks. The space is then cleared and prepared. For a standard cold loft, the first layer of insulation is laid snugly between the ceiling joists, and a second layer is usually laid across the joists at right angles to eliminate the cold bridging that would otherwise occur through the timber, building up to the recommended depth of around 270mm. Throughout, installers maintain ventilation, leaving the eaves clear and using ventilation trays where the insulation meets the roof slope, so air can circulate and condensation does not form. Pipes and any cold-water tank are insulated separately so they do not freeze in the now-colder loft, and care is taken not to compress the material, since squashing it reduces its thermal performance. The job is finished tidily, with any old or damaged insulation removed and bagged. A typical three-bedroom house can be completed in just a few hours. Because working in a loft can be awkward and some older materials are irritants, professional installation is safer and more reliable than DIY. Our network installers handle the entire process after a survey."],
  ["How long does loft insulation installation take?", "For most homes, loft insulation is a quick job. A standard three-bedroom house with reasonable access can usually be insulated in just two to four hours, and many installations are completed comfortably within a single day. The work is far less disruptive than many home improvements: there is no structural change, minimal mess when done professionally, and you can use your home normally throughout. Several factors affect the timing. The size and layout of the loft is the main one, a large detached property naturally takes longer than a compact terrace. Access matters too: a loft reached through a small hatch, with low headroom or awkward angles, slows the process. The biggest variable is usually the condition of any existing insulation. If old, degraded or contaminated material needs to be cleared out and bagged before new material goes down, that adds time, as does combining insulation with extras such as loft boarding, a new hatch or ventilation improvements, which can extend the job to a second day. Removing items stored in the loft beforehand helps everything run smoothly. During your no-obligation survey, an accredited installer from our network will assess your loft and give you a realistic timescale alongside your quote."],
  ["How much does loft insulation cost to install in the UK?", "The cost of loft insulation in the UK depends on the size of the loft, the material chosen, the depth required, the condition of any existing insulation and how easy the space is to access. As a broad guide, a professional loft insulation installation for a typical home can range from several hundred pounds to over one thousand pounds, with larger properties, premium natural materials and more complex preparation work sitting higher in the range. A simple top up is usually cheaper than a full removal and replacement, while a combined project with raised loft boarding, a new loft hatch or a loft ladder will cost more because it includes extra materials and labour. It is important to compare what is included, not just the headline price. A cheap quote may only cover laying insulation rolls, while a more complete quote may include a proper survey, preparation, protection of eaves ventilation, cutting around obstacles, pipe insulation where needed, removal of damaged material and tidy disposal. The material also affects price. Recycled plastic is often a strong value option, while sheep wool and hemp usually cost more because they are natural, breathable materials with a premium specification. Foil systems can vary widely depending on the roof structure and the detailing required. The most reliable way to price the work is to measure the loft and agree a clear specification before installation."],
  ["Is loft insulation worth the investment?", "For the overwhelming majority of homes, yes. Loft insulation is consistently rated among the most cost-effective energy improvements available because it is relatively inexpensive, quick to install and delivers savings every year for decades. With around a quarter of heat escaping through an uninsulated roof, the reduction in wasted energy is immediate and noticeable, and standard insulation lasts 40 years or more, so the benefit compounds over a very long period. Beyond the direct savings there are added benefits: a warmer, more comfortable home with fewer draughts, a lower carbon footprint, reduced condensation risk when ventilation is correct, and an improved EPC rating that can support property value and appeal to buyers or tenants. The main caveat is that the work must be done properly, with the right depth and maintained ventilation. To confirm the likely return for your home, our accredited network installers offer a no-obligation survey."],
  ["Can I add loft insulation to an existing property?", "Almost certainly, yes. The vast majority of existing UK homes can have loft insulation added or topped up, and doing so is one of the simplest retrofit improvements available. If your loft is uninsulated, a full layer can be laid from scratch; if it already has some, often older 50mm-100mm material that falls short of today's 270mm standard, a top-up layer is laid across the joists to bring it up to the recommended depth. Modern materials such as recycled plastic and multifoil can even be installed over sound existing insulation, while degraded, damp or contaminated old material is usually cleared out first. Different property types and ages suit different materials: breathable sheep's wool or hemp for older and period homes, foil for mid-century houses, and recycled plastic for newer builds, with the final choice confirmed on site. The key practical considerations are maintaining ventilation at the eaves to prevent condensation, insulating pipes and tanks separately, and not compressing the material. Awkward lofts, limited access or rooms-in-roof can all be handled with the right approach. Whether your home is a new build or a centuries-old cottage, there is almost always a suitable, effective solution. To find the best option for your existing property, an accredited installer from our network will advise during a no-obligation survey."],
  ["Are your loft insulation installers accredited and trustworthy?", "Loft Insulation Installer connects homeowners with professional loft insulation installers who can survey the property, explain the options and provide a clear specification before work begins. Trust matters because loft insulation is not just a product placed in the roof space. The installer needs to understand insulation depth, ventilation, condensation risk, loft access, pipework, wiring, boarding requirements and the suitability of materials such as sheep wool, hemp, foil and recycled plastic. A trustworthy installer should be able to explain the proposed work in plain English. They should make clear what material will be used, how deep it will be installed, whether existing insulation is being topped up or removed, how the eaves will be kept clear, and how the loft hatch or boarding may affect performance. You should also expect a written quote, tidy workmanship and sensible answers to practical questions. Reviews, experience, insurance, workmanship guarantees and transparent communication are all important signs of professionalism. The right installer will not pressure you into a product before understanding the loft. They will look at the building first, then recommend the option that gives the best balance of warmth, comfort, safety, access and value for your home."],
  ["What should I look for in loft insulation installers near me?", "When comparing loft insulation installers near you, look beyond the cheapest price and focus on the quality of the survey, the clarity of the specification and the care taken with ventilation. A good installer should measure the loft properly, check the existing insulation depth, inspect access, identify any damp or ventilation concerns, look at pipes and wiring, and explain whether your home needs a full installation, a top up, removal of damaged material, rafter level insulation or a combined insulation and storage solution. They should also explain the material options in plain English, including sheep wool, hemp, foil and recycled plastic, rather than pushing one product before seeing the loft. A professional quote should be clear about what is included. It should state the material, depth, area covered, preparation work, disposal of old insulation if required, how ventilation will be protected and whether extras such as loft boarding, a ladder or a hatch are included. This matters because poor installation can create hidden problems. Insulation that is compressed, patchy, pushed into the eaves or laid around unsafe access will not perform as it should. The best loft insulation installers give practical advice, leave the space tidy and help you choose the right solution for how you actually use your loft."],
  ["What is the difference between loft insulation installers, fitters, companies and specialists?", "People often use the terms loft insulation installers, loft insulation fitters, loft insulation companies and loft insulation specialists to mean similar things, but there are useful differences. A fitter is usually the person physically installing the insulation. An installer may refer to the individual or team carrying out the work. A company is the business responsible for the survey, quote, installation, customer service and aftercare. A specialist should bring deeper knowledge of materials, roof structures, ventilation, condensation risk, loft access and storage requirements. For a homeowner, the label is less important than the process. The right professional should be able to explain why a particular material suits your loft, how much insulation depth is needed, whether existing insulation can be retained, and how the installation will avoid common problems. They should also understand the relationship between loft insulation, loft boarding, loft ladders and loft hatches. For example, if you want storage, the installer should not simply squash boarding onto the joists over deep insulation. They should recommend a raised approach that protects performance. In short, choose the team that can demonstrate practical expertise, not just the one using the most impressive title."],
  ["Can Loft Insulation Installer help with insulation, boarding, ladders and hatches together?", "Yes, the best loft projects often combine insulation, boarding, ladder and hatch improvements because these elements affect one another. Loft insulation improves warmth and reduces heat loss, but if the hatch is draughty, the ladder is unsafe or the loft is boarded incorrectly, the finished result may not perform or function as well as it should. Planning the work together makes it easier to create a loft that is warmer, cleaner, safer and more practical for storage. For example, if insulation is installed to the recommended depth and then standard boards are fixed directly over the joists, the insulation can become compressed. That reduces its ability to trap air and weakens the thermal benefit. A raised loft boarding system avoids this by creating a platform above the insulation. Likewise, a properly fitted loft ladder and insulated hatch can make the space easier to access while helping reduce draughts around the ceiling opening. A survey should look at the whole loft rather than treating each part in isolation. This helps homeowners avoid paying twice, prevents awkward retrofitting and creates a neater, better performing result."],
];
function FAQ() {
  const Ic = LIcons;
  const [open, setOpen] = React.useState(-1);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead center eyebrow="Good to know" title="Loft insulation FAQs." marker />
        <div className="faq">
          {FAQS.map(([q, a], i) => (
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

/* ---------- Final form section ---------- */
function FinalForm({ onNav }) {
  const Ic = LIcons;
  const points = [
    [Ic.Pound, "Free, no-obligation quote & home survey"],
    [Ic.ShieldCheck, "Accredited, fully-insured local installers"],
    [Ic.Leaf, "Sustainable, eco-friendly materials"],
    [Ic.Clock, "Most surveys booked within 48 hours"],
  ];
  return (
    <section className="section section--mist" id="quote">
      <div className="wrap">
        <SectionHead eyebrow="Book a free survey" title="Get your free, no-obligation quote." marker
          sub="Send us your details and an accredited local installer will call you back to arrange a free survey, with advice on the right sustainable insulation for your home." />
        <div className="finalform">
          <LeadForm onNav={onNav} title="Request your free quote." sub="Takes under a minute. No obligation, ever." />
          <aside className="finalform__aside">
            <Card raised style={{ padding: 30 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--text-heading)", fontSize: 21, margin: "0 0 18px" }}>What you get</h3>
              <ul className="finalform__points">
                {points.map(([C, t]) => <li key={t}><Ic.Check size={20} /><span>{t}</span></li>)}
              </ul>
            </Card>
            <WavePanel color="true-teal" radius="var(--radius-lg)" style={{ padding: 30, color: "#fff" }}>
              <div className="lii-eyebrow" style={{ color: "var(--lii-grass-green)" }}>Not sure what you need?</div>
              <p style={{ margin: "12px 0 0", color: "rgba(255,255,255,0.92)", fontSize: 15, lineHeight: 1.6 }}>No problem. Tell us your home's age in the form's helper, or just choose "please recommend", and your installer will advise on the best sustainable option during your free survey.</p>
            </WavePanel>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function HomePage({ onNav }) {
  useReveal();
  return (
    <div>
      <Hero onNav={onNav} />
      <TrustBar />
      <Intro />
      <CalcSection onNav={onNav} />
      <InsulationTypes onNav={onNav} />
      <StorageServices onNav={onNav} />
      <Benefits />
      <WhyPro />
      <Process cta={<CtaBand embed onNav={onNav} title="Warmer home. Lower bills. Less waste." text="Join the homeowners across the UK who've made their homes more efficient with an accredited local installer." cta="Get my free quote" />} />
      <Reviews />
      <FAQ />
      <FinalForm onNav={onNav} />
      <Funding onNav={onNav} target="home" variant="insulation" />
    </div>
  );
}

export { HomePage, TrustBar, Process, Reviews, WhyPro, Funding, FAQ, CalcSection, FinalForm };
