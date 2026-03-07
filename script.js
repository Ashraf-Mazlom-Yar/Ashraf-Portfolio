
AOS.init({ duration: 1000, once: true });

function toggleTheme() {
  document.body.classList.toggle("light");
  const icon = document.getElementById("themeIcon");
  if (document.body.classList.contains("light")) {
    icon.className = "bi bi-sun-fill";
    localStorage.setItem("theme", "light");
  } else {
    icon.className = "bi bi-moon-fill";
    localStorage.setItem("theme", "dark");
  }
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  document.getElementById("themeIcon").className = "bi bi-sun-fill";

  if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  document.getElementById("themeIcon").className = "bi bi-sun-fill";
}
}
