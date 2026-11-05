const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function preferredTheme() {
  try { return localStorage.getItem('tz-theme') || (systemTheme.matches ? 'dark' : 'light'); }
  catch { return systemTheme.matches ? 'dark' : 'light'; }
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = document.querySelector('.theme');
  if (button) button.setAttribute('aria-pressed', String(theme === 'dark'));
}
applyTheme(preferredTheme());
systemTheme.addEventListener('change', () => applyTheme(preferredTheme()));
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(preferredTheme());
  document.querySelector('.theme').addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('tz-theme',theme); } catch {}
  });
});