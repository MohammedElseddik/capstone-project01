const navBar = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggler");
const toggleFirstdBar = document.querySelector(".first-bar");
const toggleSecondBar = document.querySelector(".second-bar");
const toggleThirdBar = document.querySelector(".third-bar");
const toggleBars = document.querySelector("toggler-bar");
const navItems = document.querySelectorAll(".nav__item");

function opneMenu() {
  navItems.forEach((elem) => {
    elem.classList.toggle("mobile-menu__item");
    elem.classList.remove("active-item");
  });
  toggleSecondBar.classList.toggle("hidden");
  toggleFirstdBar.classList.toggle("transform");
  toggleThirdBar.classList.toggle("transform");
  document.body.classList.toggle("no-scroll");
  navBar.classList.toggle("nav");
  navBar.classList.toggle("mobile-menu__nav");
  navList.classList.toggle("mobile-menu");
}

['click', 'keypress'].forEach((event) => {
  navToggle.addEventListener(event, opneMenu);
});
