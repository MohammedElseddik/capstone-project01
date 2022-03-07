const navBar = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const toggoler = document.querySelector('.nav__toggler');


function opneMenu () {
  navBar.classList.toggle('collapsible');
  navBar.classList.toggle("collapsible--expanded");
}


toggoler.addEventListener('click', opneMenu)


// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );