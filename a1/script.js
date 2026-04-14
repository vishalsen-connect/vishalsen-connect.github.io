// THEME TOGGLE WITH PERSISTENCE
const toggle = document.getElementById('themeSwitch');

// load saved theme
if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', ()=>{
  document.body.classList.toggle('dark', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
