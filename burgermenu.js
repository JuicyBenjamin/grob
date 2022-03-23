const burgermenu = document.getElementById("burgermenu");
const nav = document.getElementById("nav-list");

burgermenu.addEventListener("click", () => {
  burgermenu.classList.toggle("active");

  if (burgermenu.classList.contains("active")) {
    burgermenu.textContent = "×";
    nav.style.display = "flex";
  } else {
    burgermenu.textContent = "☰";
    nav.attributes.removeNamedItem("style");
  }
});

/*document.addEventListener("scroll", () => {
  let y = window.scrollY;
  const header = document.getElementById("header-nav");
  header.style.backgroundColor = `hsl(${y / 4}, 75%, 64%)`;
  header.style.transform = `rotateZ(${y}deg) scaleY(${100 + y * 1.1}%)`;
});*/
