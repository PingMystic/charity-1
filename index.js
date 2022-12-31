let barsIcon = document.querySelector(".mobile .bars");
let mobMenu = document.querySelector(".mob-menu");
let xmark = document.querySelector(".mob-menu .xmark");
let header = document.querySelector(".header");

barsIcon.addEventListener("click", showMenu);
function showMenu() {
  mobMenu.style.left = `0px`;
  mobMenu.style.visibility = `visible`;
  mobMenu.style.opacity = `1`;
  mobMenu.style.transition = `.3s`;
  header.classList.add("transparent");
  document.body.classList.add("stop-scrolling");
};

xmark.addEventListener("click", closeMenu);
function closeMenu() {
  mobMenu.style.visibility = `hidden`;
  mobMenu.style.opacity = `0`;
  mobMenu.style.transition = `.3s`;
  header.classList.remove("transparent");
  document.body.classList.remove("stop-scrolling");
};