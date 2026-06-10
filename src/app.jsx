// App shell + routing. Single-file interactive prototype with JS routing.
// Full service pages render <ServicePage>; services without a built page yet
// fall back to the matching homepage section so every link stays clickable.
import React from 'react';
import { TopBar, Header, Footer } from './chrome.jsx';
import { HomePage } from './home.jsx';
import { ThankYouPage } from './thankyou.jsx';
import { ServicePage } from './service.jsx';
import { HubPage } from './hub.jsx';
import { LegalPage, LEGAL_PAGES as LEGAL_PAGES_LIST } from './legal.jsx';
import { CookieBanner } from './CookieBanner.jsx';
import { applyPageMeta, pageToPath, pageFromPath, normalizePath } from './seo.js';
import { MATERIALS, HUBS } from './materials-data.jsx';

const SERVICE_PAGES = Object.keys(MATERIALS);
const HUB_PAGES = Object.keys(HUBS);
const LEGAL_PAGES = LEGAL_PAGES_LIST;

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
  const [page, setPage] = React.useState(() => pageFromPath(window.location.pathname));

  // Keep the URL path in sync with the current page so every page is directly
  // linkable and survives a refresh (Netlify serves index.html for any path).
  // Pushes a new history entry only when the path actually changes — so this
  // also runs harmlessly after a popstate (URL already matches → no push).
  React.useEffect(() => {
    const desired = pageToPath(page);
    if (normalizePath(window.location.pathname) !== normalizePath(desired)) {
      history.pushState(null, "", desired);
    }
    applyPageMeta(page);
  }, [page]);

  // Back/forward navigation.
  React.useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
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
      <CookieBanner onNav={onNav} />
    </div>
  );
}

export default App;
