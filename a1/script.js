document.addEventListener("DOMContentLoaded", () => {

  // 🚫 PREVENT PAGE FLASH
  document.documentElement.style.display = "none";

  // 🔐 ACCESS CONTROL
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");

  const VALID_KEY = "X9k2!7Lp";

  if (key !== VALID_KEY) {
    window.location.replace(`${window.location.origin}/403.html`);
    return;
  }

  // ✅ SHOW PAGE
  document.documentElement.style.display = "block";

  // 🌗 THEME TOGGLE
  const toggle = document.getElementById('themeSwitch');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark', toggle.checked);
      localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
    });
  }

});