// Fires the single generate_lead conversion using the data stashed on form
// submit (see leadform.jsx). Clearing the store first guarantees it fires
// exactly once per submission — and never on a direct/refresh visit with no
// stored lead. Shared by both thank-you pages (generic + loft storage).
export function fireLeadConversionOnce() {
  let payload = null;
  try { payload = JSON.parse(sessionStorage.getItem("lii_lead") || "null"); } catch (_) {}
  if (!payload) return;
  try { sessionStorage.removeItem("lii_lead"); } catch (_) {}
  window.dataLayer = window.dataLayer || [];
  // Meta advanced-matching data (separate push, read only by the Meta tag).
  if (payload.customer) window.dataLayer.push({ customer: payload.customer });
  // Single conversion event: GA4 non-PII params + Google Enhanced Conversions
  // user_data (raw; GTM hashes SHA-256 before sending).
  window.dataLayer.push({
    event: "generate_lead",
    form_name: "lead_form",
    service_interest: payload.service_interest,
    estimated_monthly_bill: payload.estimated_monthly_bill,
    estimated_yearly_saving: payload.estimated_yearly_saving,
    user_data: payload.user_data,
  });
}
