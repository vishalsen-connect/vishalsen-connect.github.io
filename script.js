// THEME TOGGLE
const toggle = document.getElementById('themeSwitch');
toggle.addEventListener('change', ()=>document.body.classList.toggle('dark', toggle.checked));

// SMOOTH SCROLL & ACTIVE NAV
const sections = document.querySelectorAll('section, .hero');
const navLinks = document.querySelectorAll('nav .theme-btn');

window.addEventListener('scroll', ()=>{
  const pos = window.scrollY + 80;
  sections.forEach((sec,i)=>{
    if(pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight){
      navLinks.forEach(l=>l.classList.remove('active'));
      navLinks[i].classList.add('active');
    }
  });
});

navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth', block:'start'});
  });
});
