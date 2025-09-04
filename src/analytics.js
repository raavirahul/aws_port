// src/analytics.js
export const GA_ID = 'G-KZZJ17D5E5';

export function pageview(path) {
  // send SPA page_view
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    send_to: GA_ID,
  });
}

export function gaEvent(action, params = {}) {
  window.gtag?.('event', action, { send_to: GA_ID, ...params });
}
