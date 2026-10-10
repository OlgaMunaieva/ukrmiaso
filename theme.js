'use strict';
(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved = null;
  try { saved = localStorage.getItem('ukrmiaso-theme'); } catch {}
  if (saved !== 'light' && saved !== 'dark') saved = null;
  let theme = saved || (preference.matches ? 'dark' : 'light');
  function updateControl() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const dark = theme === 'dark';
    const english = root.lang === 'en';
    const label = english
      ? (dark ? 'Switch to light theme' : 'Switch to dark theme')
      : (dark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему');
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', String(dark));
    button.hidden = false;
  }
  function apply() {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#191816' : '#501e29');
    updateControl();
  }
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      saved = theme;
      try { localStorage.setItem('ukrmiaso-theme', theme); } catch {}
      apply();
    });
  });
  preference.addEventListener('change', event => {
    if (!saved) { theme = event.matches ? 'dark' : 'light'; apply(); }
  });
  window.UKRMIASO_THEME = { updateControl };
})();
