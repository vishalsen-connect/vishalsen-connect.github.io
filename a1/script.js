// 🚫 PREVENT PAGE FLASH
document.documentElement.style.display = "none";

// 🔐 ACCESS CONTROL
const params = new URLSearchParams(window.location.search);
const key = params.get("key");

// change this key per resume if needed
const VALID_KEY = "X9k2#7Lp";

if (key !== VALID_KEY) {
  window.location.replace("/403.html");
} else {
  // ✅ SHOW PAGE ONLY IF AUTHORIZED
  document.documentElement.style.display = "block";
}

// 🌗 THEME TOGGLE WITH PERSISTENCE
const toggle = document.getElementById('themeSwitch');

// load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (toggle) {
    toggle.checked = true;
  }
}

// toggle handler
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggle.checked);
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
  });
}