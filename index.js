let barsIcon = document.querySelector(".mobile .bars");
let mobMenu = document.querySelector(".mob-menu");
let xmark = document.querySelector(".mob-menu .xmark");
let header = document.querySelector(".header");

barsIcon.addEventListener("click", showMenu);
function showMenu() {
  mobMenu.style.visibility = `visible`;
  mobMenu.style.opacity = `1`;
  header.classList.add("transparent");
}

xmark.addEventListener("click", closeMenu);
function closeMenu() {
  mobMenu.style.visibility = `hidden`;
  mobMenu.style.opacity = `0`;
  header.classList.remove("transparent");
}

window.addEventListener("scroll", closeMenu);