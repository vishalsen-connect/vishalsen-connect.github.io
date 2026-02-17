const switchBtn = document.getElementById("themeSwitch");
switchBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});