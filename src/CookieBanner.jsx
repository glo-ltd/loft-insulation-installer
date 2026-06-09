import React from 'react';
import { Button } from './ui.jsx';

// Cookie consent banner wired to Google Consent Mode (set up in index.html).
// On "Accept", we flip analytics/ad consent to granted so GTM/GA4 may fire;
// on "Reject", consent stays at the denied default. The choice is persisted in
// localStorage. A "Cookie settings" footer link dispatches `lii-open-consent`
// to reopen this banner so visitors can change or withdraw consent later.
const STORAGE_KEY = 'lii-consent';

function updateConsent(granted) {
  const state = granted ? 'granted' : 'denied';
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
}

function CookieBanner({ onNav }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Show on first visit (no stored choice).
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!stored) setOpen(true);

    // Allow re-opening from the footer "Cookie settings" link.
    const reopen = () => setOpen(true);
    window.addEventListener('lii-open-consent', reopen);
    return () => window.removeEventListener('lii-open-consent', reopen);
  }, []);

  const choose = (granted) => {
    try { localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied'); } catch (e) {}
    updateConsent(granted);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <div className="cookie-banner__in">
        <div className="cookie-banner__text">
          <h4>We value your privacy</h4>
          <p>
            We use essential cookies to make this site work. With your consent, we'd also like to use
            analytics cookies to understand how visitors use the site and improve it. You can change your
            choice at any time. See our{' '}
            <a href="#cookie-policy" onClick={(e) => { e.preventDefault(); onNav('cookie-policy'); setOpen(false); }}>Cookie Policy</a>{' '}
            and{' '}
            <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); onNav('privacy-policy'); setOpen(false); }}>Privacy Policy</a>.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <Button variant="ghost" onClick={() => choose(false)}>Reject non-essential</Button>
          <Button variant="primary" onClick={() => choose(true)}>Accept all</Button>
        </div>
      </div>
    </div>
  );
}

export { CookieBanner };
