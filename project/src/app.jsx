// App shell + routing. Single-file interactive prototype with JS routing.
// Full service pages render <ServicePage>; services without a built page yet
// fall back to the matching homepage section so every link stays clickable.
const { TopBar, Header, Footer, StickyCTA, HomePage, ThankYouPage, ServicePage, HubPage, LegalPage } = window;

const SERVICE_PAGES = window.MATERIALS ? Object.keys(window.MATERIALS) : [];
const HUB_PAGES = window.HUBS ? Object.keys(window.HUBS) : [];
const LEGAL_PAGES = window.LEGAL_PAGES || [];

const SERVICE_TO_ANCHOR = {
  "foil": "insulation-types",
  "recycled-plastic": "insulation-types",
  "hemp": "insulation-types",
  "loft-boarding": "storage-services",
  "loft-ladders": "storage-services",
  "loft-hatch": "storage-services",
  "loft-storage-rooms": "storage-services",
};

function App() {
  const ALL_PAGES = ["home", "thank-you", ...SERVICE_PAGES, ...HUB_PAGES, ...LEGAL_PAGES];
  const pageFromHash = () => {
    const h = (window.location.hash || "").replace(/^#\/?/, "");
    return ALL_PAGES.includes(h) ? h : "home";
  };
  const [page, setPage] = React.useState(pageFromHash);

  // Keep the URL hash in sync so every page is directly linkable and
  // survives a refresh (e.g. open …#thank-you to review the thank-you page).
  React.useEffect(() => {
    if (page === "home") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else if ((window.location.hash || "").replace(/^#\/?/, "") !== page) {
      history.replaceState(null, "", "#" + page);
    }
  }, [page]);

  React.useEffect(() => {
    const onHash = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  const onNav = (target, anchor) => {
    // Full service page or silo hub page or legal page.
    if (SERVICE_PAGES.includes(target) || HUB_PAGES.includes(target) || LEGAL_PAGES.includes(target)) {
      if (page !== target) {
        setPage(target);
        window.scrollTo(0, 0);
        if (anchor) setTimeout(() => scrollToId(anchor), 90);
      } else if (anchor) {
        window.dispatchEvent(new Event("lii-context"));
        scrollToId(anchor);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    // Service / silo pages not built yet → route to home + matching section.
    if (SERVICE_TO_ANCHOR[target]) {
      const dest = SERVICE_TO_ANCHOR[target];
      if (page !== "home") { setPage("home"); window.scrollTo(0, 0); setTimeout(() => scrollToId(dest), 90); }
      else scrollToId(dest);
      return;
    }
    if (target === "thank-you") {
      window.dispatchEvent(new Event("lii-context"));
      setPage("thank-you");
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    // home (with optional anchor)
    if (target === "home") {
      if (page !== "home") {
        setPage("home");
        window.scrollTo(0, 0);
        if (anchor) setTimeout(() => scrollToId(anchor), 90);
      } else if (anchor) {
        window.dispatchEvent(new Event("lii-context"));
        scrollToId(anchor);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    setPage(target);
    window.scrollTo(0, 0);
  };

  let content;
  if (page === "thank-you") content = <ThankYouPage onNav={onNav} />;
  else if (LEGAL_PAGES.includes(page)) content = <LegalPage key={page} id={page} onNav={onNav} />;
  else if (HUB_PAGES.includes(page)) content = <HubPage key={page} id={page} onNav={onNav} />;
  else if (SERVICE_PAGES.includes(page)) content = <ServicePage key={page} id={page} onNav={onNav} />;
  else content = <HomePage onNav={onNav} />;

  return (
    <div className="site">
      <TopBar />
      <Header onNav={onNav} page={page} />
      {content}
      <Footer onNav={onNav} page={page} />
      <StickyCTA onNav={onNav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
