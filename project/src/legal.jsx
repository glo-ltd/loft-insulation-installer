// Legal pages: Privacy Policy and Cookie Policy.
// Document-style, readable, routed and hash-linkable like the rest of the site.
// Cookie Policy content supplied by the client; Privacy Policy is good-faith
// boilerplate for a UK lead-generation consortium with a form-only contact
// model. Both should be reviewed by a qualified adviser before going live.
const { LIcons, WavePanel, Button, useReveal } = window;

const PRIVACY = {
  id: "privacy-policy",
  title: "Privacy Policy.",
  updated: "Last updated: 10 June 2026",
  intro: "Loft Insulation Installer operates loftinsulationinstaller.co.uk. This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website, submit an enquiry, request a quote, book a survey or use any of the forms or features on our website. For the purposes of this policy, \u201cwe\u201d, \u201cus\u201d and \u201cour\u201d refers to Loft Insulation Installer, and \u201cyou\u201d and \u201cyour\u201d refers to visitors, customers, prospective customers and any person who uses our website or contacts us through it. We are committed to protecting your privacy and handling your personal information fairly, lawfully and transparently.",
  sections: [
    { h: "1. Who we are", body: [
      "Loft Insulation Installer is a UK website that helps homeowners and property owners enquire about loft insulation and related loft services. Our website may allow you to request information, submit an enquiry, ask for a quote, request a survey or contact us about services including:",
      ["Loft insulation", "Sheep wool loft insulation", "Foil loft insulation", "Recycled plastic loft insulation", "Hemp loft insulation", "Insulated loft space", "Loft boarding", "Loft ladders", "Loft hatches", "Loft storage rooms", "Loft storage"],
      "Where appropriate, we may connect you with a relevant installer or service provider who can respond to your enquiry.",
    ]},
    { h: "2. Information we collect", body: [
      "We may collect personal information when you use our website, contact us or submit a form. This may include:",
      ["Your name", "Your email address", "Your telephone number", "Your address or postcode", "Details about your property", "Details about the service you are interested in", "Information you include in your message or enquiry", "Your preferred contact method", "Information about your website visit", "Technical information such as your IP address, browser type, device type and pages visited"],
      "We only ask for information that is relevant to responding to your enquiry, providing information about our services, arranging a quote or helping you with your request.",
    ]},
    { h: "3. How we collect your information", body: [
      "We may collect your information in the following ways:",
      ["When you complete a contact or enquiry form", "When you request a quote", "When you request a survey", "When you interact with our website", "When you use website features such as embedded forms, booking tools or contact options", "When cookies or similar technologies collect technical website data"],
      "Some information is provided directly by you. Other information, such as website usage data, may be collected automatically when you browse our website.",
    ]},
    { h: "4. How we use your information", body: [
      "We may use your personal information to:",
      ["Respond to your enquiry", "Contact you about your request", "Provide information about the service you asked about", "Arrange a quote, survey or follow up", "Pass your enquiry to a relevant installer or service provider where needed", "Improve our website and customer experience", "Understand how visitors use our website", "Monitor website performance and security", "Prevent spam, misuse or fraudulent activity", "Keep internal records", "Comply with legal, accounting or regulatory responsibilities"],
      "We do not sell your personal information. We do not use your personal information for purposes that are unrelated to your enquiry or your use of our website.",
    ]},
    { h: "5. Our lawful bases for using your information", body: [
      "Under UK data protection law, we must have a lawful basis for using your personal information. Depending on the circumstances, we may rely on one or more of the following lawful bases.",
    ]},
    { h: "Consent", sub: true, body: [
      "We may rely on your consent where you have clearly agreed to a specific use of your personal information. This may include consenting to certain cookies or choosing to receive marketing communications. You can withdraw consent at any time.",
    ]},
    { h: "Contract", sub: true, body: [
      "We may use your information where it is necessary to take steps at your request before entering into a contract, or where it is necessary to provide a service you have asked for.",
    ]},
    { h: "Legitimate interests", sub: true, body: [
      "We may use your information where we have a legitimate business interest and your rights do not override that interest. This may include responding to enquiries, improving our website, monitoring website security, following up on service requests and managing our business operations.",
    ]},
    { h: "Legal obligation", sub: true, body: [
      "We may use your information where we need to comply with a legal obligation, such as maintaining records or responding to lawful requests.",
    ]},
    { h: "6. Sharing your information", body: [
      "We may share your personal information where necessary to respond to your enquiry or provide the service you have requested. This may include sharing information with:",
      ["Installers or service providers who may respond to your enquiry", "Website hosting providers", "Email and communication providers", "Form and booking software providers", "Customer relationship management systems", "Analytics providers", "Security and spam prevention tools", "Professional advisers where required", "Legal or regulatory authorities where required by law"],
      "Where we share your information with third party service providers, we only share what is necessary for them to perform their role. We expect service providers to handle personal information securely and only use it for the purpose for which it was provided.",
      "If your enquiry is passed to an installer or service provider, they may contact you directly about your request. They may also be an independent data controller for the information they receive and use.",
    ]},
    { h: "7. Marketing communications", body: [
      "We may contact you about your enquiry or request using the contact details you provide. We will only send direct marketing communications where we have a lawful basis to do so, and where consent is required, we will ask for it.",
      "You can ask us to stop sending marketing communications at any time by contacting us or using any unsubscribe option provided. Even if you opt out of marketing, we may still contact you about an active enquiry, quote, survey or service related matter.",
    ]},
    { h: "8. Cookies and similar technologies", body: [
      "Our website may use cookies and similar technologies. Cookies are small files placed on your device when you visit a website. They help the website function, improve user experience, understand website performance and support security. We may use:",
      ["Essential cookies that are needed for the website to work", "Functional cookies that remember preferences", "Analytics cookies that help us understand how visitors use the website", "Security cookies that help protect the website from spam or misuse", "Marketing cookies where applicable"],
      "Essential cookies may be used without your consent because they are necessary for the website to operate. For non-essential cookies, we will request consent where required. You can manage or withdraw cookie consent through the cookie settings on our website, where available, and through your browser settings. If you block cookies, some parts of the website may not work properly. For full details, see our Cookie Policy.",
    ]},
    { h: "9. Analytics and website tracking", body: [
      "We may use analytics tools to understand how visitors use our website. This may include information such as pages visited, time spent on the website, device type, browser type, approximate location and how visitors arrived at the website. This information helps us improve the website, understand which pages are useful and fix issues that affect user experience. Where analytics tools use non-essential cookies or similar technologies, we will request consent where required.",
    ]},
    { h: "10. Security and spam prevention", body: [
      "We may use security tools and spam prevention services to protect our website, forms and users. These tools may process technical information such as IP addresses, browser information, device information and behaviour on the website to help detect spam, bots, abuse or suspicious activity. This helps us keep the website secure and protect genuine users.",
    ]},
    { h: "11. How long we keep your information", body: [
      "We only keep your personal information for as long as necessary for the purpose it was collected. How long we keep information depends on the type of data and why it was collected. As a general guide:",
      ["Enquiry information may be kept for as long as needed to respond to your request and manage follow up", "Quote or survey information may be kept for a reasonable period for customer service and record keeping", "Marketing preferences may be kept until you unsubscribe or ask us to delete them", "Website analytics data may be kept for reporting and performance analysis", "Technical security logs may be kept for a limited period to protect the website"],
      "We may keep certain information for longer where needed for legal, accounting, dispute resolution or business record purposes. When information is no longer needed, we will delete it, anonymise it or securely archive it.",
    ]},
    { h: "12. How we protect your information", body: [
      "We take appropriate steps to protect your personal information against unauthorised access, loss, misuse, alteration or disclosure. These steps may include secure website hosting, access controls, password protection, security monitoring, spam protection and limiting access to personal information to those who need it.",
      "However, no method of transmitting information over the internet or storing information electronically can be guaranteed as completely secure. We cannot guarantee absolute security, but we work to protect your information using reasonable and appropriate measures.",
    ]},
    { h: "13. International transfers", body: [
      "Some of the service providers we use may process personal information outside the United Kingdom. Where this happens, we will take reasonable steps to ensure your information is protected in line with applicable data protection law. This may include using appropriate contractual protections or ensuring that the provider has suitable safeguards in place.",
    ]},
    { h: "14. Your data protection rights", body: [
      "Under UK data protection law, you have rights in relation to your personal information. These may include the right to:",
      ["Ask for a copy of the personal information we hold about you", "Ask us to correct inaccurate or incomplete information", "Ask us to delete your personal information in certain circumstances", "Ask us to restrict how we use your information in certain circumstances", "Object to our use of your information in certain circumstances", "Ask for your information to be transferred to another organisation in certain circumstances", "Withdraw consent where we rely on consent", "Complain to the UK Information Commissioner's Office if you are unhappy with how your information is handled"],
      "These rights are not absolute and may depend on the circumstances. If you make a request, we may need to verify your identity before responding.",
    ]},
    { h: "15. Children's privacy", body: [
      "Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided personal information through our website, we will take appropriate steps to delete it.",
    ]},
    { h: "16. Links to other websites", body: [
      "Our website may contain links to other websites. We are not responsible for the privacy practices, content or security of other websites. When you leave our website, you should read the privacy policy of the website you visit.",
    ]},
    { h: "17. Third party tools and embedded content", body: [
      "Our website may include third party tools, embedded content or integrations, such as maps, booking tools, forms, videos, analytics tools, spam protection tools or social media features. These third parties may collect information about your interaction with their content or services. Their use of your information is governed by their own privacy policies. We recommend reviewing the privacy information provided by any third party service you interact with.",
    ]},
    { h: "18. Changes to this Privacy Policy", body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \u201cLast updated\u201d date. You should review this page periodically to stay informed about how we use and protect your information. Changes take effect when they are published on this website.",
    ]},
    { h: "19. Contact us", body: [
      "If you have any questions about this Privacy Policy or how your personal information is used, please contact us using the enquiry form on this website (loftinsulationinstaller.co.uk). You can also contact us if you would like to exercise any of your data protection rights.",
    ]},
    { h: "20. Complaints", body: [
      "If you are unhappy with how we handle your personal information, please contact us first so we can try to resolve the issue. You also have the right to complain to the UK Information Commissioner's Office, which is the UK regulator for data protection matters.",
    ]},
  ],
};

const COOKIES = {
  id: "cookie-policy",
  title: "Cookie Policy.",
  updated: "Last updated: 10 June 2026",
  intro: "This Cookie Policy explains how Loft Insulation Installer uses cookies and similar technologies on loftinsulationinstaller.co.uk. For the purposes of this policy, \u201cwe\u201d, \u201cus\u201d and \u201cour\u201d refers to Loft Insulation Installer, and \u201cyou\u201d and \u201cyour\u201d refers to visitors and users of our website. This Cookie Policy applies to users in the United Kingdom.",
  sections: [
    { h: "1. Introduction", body: [
      "Our website uses cookies and similar technologies to help the website work properly, improve performance, understand how visitors use the website, protect forms from spam and support marketing activity where consent has been provided.",
      "Cookies may be placed by us or by third party services used on our website. These third party services may include tools for analytics, website security, spam protection, advertising, embedded content, social media, forms and booking features.",
      "When you first visit our website, you may be shown a cookie banner or consent pop up that allows you to accept, reject or manage non-essential cookies. Essential cookies may be placed without consent because they are necessary for the website to function.",
    ]},
    { h: "2. What are cookies?", body: [
      "Cookies are small text files that are placed on your computer, phone, tablet or other device when you visit a website. They allow a website to recognise your device, remember certain information and improve the way the website works \u2014 for example, remembering your cookie preferences, keeping forms secure, understanding which pages are visited or supporting advertising.",
      "Cookies can be session cookies or persistent cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them.",
    ]},
    { h: "3. What are similar technologies?", body: [
      "In addition to cookies, our website may use similar technologies such as pixels, tags, scripts, local storage, session storage and web beacons.",
      "A script is a piece of code that helps a website function properly and interactively. A pixel tag or web beacon is a small, often invisible, piece of code or image that can be used to understand how users interact with a website, email, advert or online feature. Local storage and session storage allow information to be stored in your browser to support website functionality and user preferences.",
      "For simplicity, this policy refers to all of these technologies as \u201ccookies\u201d.",
    ]},
    { h: "4. Types of cookies we use", body: [
      "Our website may use the following categories of cookies.",
    ]},
    { h: "4.1 Strictly necessary cookies", sub: true, body: [
      "Strictly necessary cookies are required for the website to work. These cookies may be used to:",
      ["Remember your cookie preferences", "Keep the website secure", "Help pages load correctly", "Enable contact forms to work", "Protect forms from spam or abuse", "Maintain basic website functionality", "Support accessibility or essential user settings"],
      "These cookies do not require consent because the website cannot function properly without them.",
    ]},
    { h: "4.2 Functional cookies", sub: true, body: [
      "Functional cookies help improve the way the website works and remember choices you make. These cookies may be used to:",
      ["Remember preferences", "Support embedded features", "Improve form behaviour", "Enable booking or enquiry features", "Improve the usability of website tools"],
      "Some functional cookies may be essential. Others may only be used where consent has been provided, depending on their purpose.",
    ]},
    { h: "4.3 Analytics and statistics cookies", sub: true, body: [
      "Analytics and statistics cookies help us understand how visitors use our website. These cookies may collect information such as:",
      ["Which pages are visited", "How long visitors stay on pages", "How visitors arrive at the website", "Which devices and browsers are used", "Approximate location data", "Technical performance information"],
      "This information helps us improve the website, identify issues and understand which pages are useful. Analytics cookies are not used unless consent has been provided, unless they fall within a lawful exemption under applicable cookie rules.",
    ]},
    { h: "4.4 Marketing and tracking cookies", sub: true, body: [
      "Marketing and tracking cookies are used to support advertising, remarketing, conversion tracking and campaign measurement. These cookies may be used to:",
      ["Show relevant adverts", "Measure advertising performance", "Understand whether an advert led to an enquiry", "Build remarketing audiences", "Limit how often adverts are shown", "Track interactions across websites or platforms"],
      "Marketing and tracking cookies are only used where you have given consent.",
    ]},
    { h: "4.5 Social media cookies", sub: true, body: [
      "Our website may include content or features from social media platforms such as Facebook or Instagram. These features may include embedded content, sharing tools, pixels or platform integrations.",
      "Social media platforms may place cookies or similar technologies on your device. These may be used to track interactions, personalise content or support advertising. These cookies are controlled by the relevant social media provider and are subject to their own cookie and privacy policies.",
    ]},
    { h: "5. Cookies and services that may be used", body: [
      "Our website may use cookies or similar technologies from the following services. The exact cookies placed may change over time depending on updates to our website, plugins and third party tools.",
      { svc: "WordPress", purpose: "Website functionality and content management", category: "Strictly necessary or functional", desc: "WordPress cookies may help the website operate correctly, support logged in functionality where applicable and maintain basic website features." },
      { svc: "Cookie consent tool", purpose: "Cookie banner and consent management", category: "Strictly necessary", desc: "Cookie consent cookies remember your cookie choices so we know whether you have accepted, rejected or customised cookie settings." },
      { svc: "Google Analytics", purpose: "Website analytics and performance measurement", category: "Analytics and statistics", desc: "Google Analytics may help us understand how visitors use the website, which pages are viewed and how the website performs. These cookies are only used where consent has been provided, unless a lawful exemption applies." },
      { svc: "Google Ads and conversion tracking", purpose: "Advertising, remarketing and conversion measurement", category: "Marketing and tracking", desc: "Google Ads cookies may help measure advert performance, track enquiries generated from adverts and support remarketing activity. These cookies are only used where consent has been provided." },
      { svc: "Google reCAPTCHA", purpose: "Spam prevention and website security", category: "Strictly necessary, functional or security related", desc: "Google reCAPTCHA may be used to help protect forms from spam, bots and abuse. It may collect technical information about your device, browser and interaction with the website, and may set cookies or use similar technologies." },
      { svc: "Meta, Facebook and Instagram", purpose: "Social media features, advertising, remarketing and conversion tracking", category: "Marketing and tracking, and in some cases functional", desc: "Meta technologies may be used to measure advertising performance, understand enquiries from ads, support remarketing and enable social media features. These cookies are only used where consent has been provided." },
      { svc: "Wordfence or website security tools", purpose: "Website security, firewall protection and spam prevention", category: "Strictly necessary or security related", desc: "Security cookies may help protect the website from malicious traffic, unauthorised access, spam and abuse." },
      { svc: "Calendly or booking tools", purpose: "Booking and appointment scheduling", category: "Functional, analytics or marketing depending on configuration", desc: "Booking tools may use cookies to allow users to schedule appointments, remember preferences, operate embedded booking forms and measure interactions. Non-essential cookies from booking tools are only used where consent has been provided." },
      { svc: "Embedded content", purpose: "Displaying third party content or features", category: "Functional, analytics or marketing depending on provider", desc: "Embedded content may include maps, forms, videos, social media content or booking tools. These providers may place cookies when you interact with embedded content." },
      "From time to time, our website may use other cookies or technologies for website functionality, performance, security or user experience. Where we identify additional cookies, we will categorise them according to their purpose and update this policy where appropriate.",
    ]},
    { h: "6. Consent", body: [
      "When you first visit our website, we may show a cookie banner or pop up explaining the use of cookies. You may be given the option to:",
      ["Accept all cookies", "Reject non-essential cookies", "Manage your cookie preferences", "Save your chosen preferences"],
      "Strictly necessary cookies are always active because they are required for the website to work. Analytics, marketing, tracking and other non-essential cookies will only be used where consent has been provided, unless a lawful exemption applies.",
      "You can withdraw or change your consent at any time by using the cookie settings or consent management option on our website, where available.",
    ]},
    { h: "7. Managing cookie preferences", body: [
      "You can manage cookies in several ways. You can use the cookie banner or cookie settings tool on our website to accept, reject or customise non-essential cookies. You can also control cookies through your browser settings. Most browsers allow you to:",
      ["View cookies stored on your device", "Delete cookies", "Block all cookies", "Block third party cookies", "Set preferences for specific websites", "Receive alerts before cookies are placed"],
      "Please note that if you disable all cookies, parts of our website may not work properly. For example, forms, cookie preferences, embedded tools or security features may be affected.",
    ]},
    { h: "8. Browser cookie controls", body: [
      "You can usually find cookie settings in the privacy or security section of your browser. For common browsers, cookie controls are usually available through Google Chrome settings, Safari settings, Microsoft Edge settings, Mozilla Firefox settings, and the device level privacy settings on mobile phones and tablets.",
      "If you delete cookies after setting your preferences, our website may ask you to set your preferences again on your next visit.",
    ]},
    { h: "9. Third party cookies", body: [
      "Some cookies on our website may be placed by third parties. Third party cookies may be used for analytics, advertising, social media, embedded content, booking tools, security or spam prevention.",
      "We do not control all third party cookies directly. Third party providers may use cookies in accordance with their own privacy and cookie policies. Third parties may process data outside the United Kingdom. Where this happens, their own safeguards and privacy terms may apply.",
    ]},
    { h: "10. Your rights in relation to personal data", body: [
      "Cookies and similar technologies may collect information that identifies you directly or indirectly, such as your IP address, device information, online identifiers, browsing behaviour or advertising identifiers. Under UK data protection law, you may have rights in relation to your personal data, including the right to:",
      ["Ask what personal data we hold about you", "Request access to your personal data", "Ask us to correct inaccurate personal data", "Ask us to delete personal data in certain circumstances", "Ask us to restrict processing in certain circumstances", "Object to processing in certain circumstances", "Withdraw consent where we rely on consent", "Request data portability in certain circumstances", "Complain to the UK Information Commissioner's Office"],
      "These rights are not absolute and may depend on the circumstances. For more information about how we use personal information, please read our Privacy Policy.",
    ]},
    { h: "11. Changes to this Cookie Policy", body: [
      "We may update this Cookie Policy from time to time to reflect changes in the law, our website, the cookies we use or the third party services we work with. When we update this policy, we will change the \u201cLast updated\u201d date at the top of this page. You should review this Cookie Policy periodically to stay informed about how we use cookies.",
    ]},
    { h: "12. Contact us", body: [
      "If you have any questions about this Cookie Policy, our use of cookies or how we process personal data, please contact us using the enquiry form on this website (loftinsulationinstaller.co.uk).",
    ]},
    { h: "13. Complaints", body: [
      "If you are unhappy with how we use cookies or handle your personal data, please contact us first so we can try to resolve the issue. You also have the right to complain to the Information Commissioner's Office, the UK regulator for data protection matters.",
    ]},
  ],
};

const LEGAL = { "privacy-policy": PRIVACY, "cookie-policy": COOKIES };

function LegalItem({ it }) {
  const Ic = LIcons;
  if (typeof it === "string") return <p>{it}</p>;
  if (Array.isArray(it)) {
    return <ul className="legal__list">{it.map((b, j) => <li key={j}><Ic.Check size={16} />{b}</li>)}</ul>;
  }
  if (it && it.svc) {
    return (
      <div className="legal__svc">
        <h3>{it.svc}</h3>
        <p className="legal__meta"><span>Purpose</span> {it.purpose}</p>
        <p className="legal__meta"><span>Category</span> {it.category}</p>
        <p>{it.desc}</p>
      </div>
    );
  }
  return null;
}

function LegalPage({ id, onNav }) {
  const Ic = LIcons;
  useReveal();
  const d = LEGAL[id];
  if (!d) return null;
  const other = id === "privacy-policy" ? COOKIES : PRIVACY;
  return (
    <div>
      <WavePanel color="dark-slate" radius="0" style={{ color: "#fff" }}>
        <div className="wrap" style={{ padding: "64px 28px 68px", maxWidth: 860 }}>
          <div className="breadcrumb">
            <a onClick={() => onNav("home")}>Home</a>
            <Ic.Chevron size={13} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "#fff" }}>{d.title.replace(".", "")}</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(34px,4.2vw,52px)", margin: "16px 0 14px", lineHeight: 1.06 }}>{d.title}</h1>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: 18, lineHeight: 1.6, margin: "0 0 14px", maxWidth: "46em" }}>{d.intro}</p>
          <p style={{ color: "var(--lii-grass-green)", fontFamily: "var(--font-ui)", fontSize: 13.5, margin: 0 }}>{d.updated}</p>
        </div>
      </WavePanel>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="legal reveal">
            {d.sections.map((s, i) => (
              <div className={"legal__block" + (s.sub ? " legal__block--sub" : "")} key={i}>
                <h2>{s.h}</h2>
                {s.body.map((it, j) => <LegalItem it={it} key={j} />)}
              </div>
            ))}
            <div className="legal__note">
              This policy is provided as general information and does not constitute legal advice.
            </div>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => onNav("home", "quote")} rightIcon={<Ic.Arrow size={16} />}>Get a free quote</Button>
              <Button variant="ghost" onClick={() => onNav(other.id)}>Read our {other.title.replace(".", "")}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { LegalPage, LEGAL_PAGES: Object.keys(LEGAL) });
