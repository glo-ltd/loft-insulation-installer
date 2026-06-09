// Shared lead-context state (calculator → form → thank-you page).
let ctx = null;

export const getLeadContext = () => ctx;
export const setLeadContext = (newCtx) => {
  ctx = newCtx;
  window.dispatchEvent(new Event('lii-context'));
};
