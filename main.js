const navBar = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__toggler");
const toggleFirstdBar = document.querySelector(".first-bar");
const toggleSecondBar = document.querySelector(".second-bar");
const toggleThirdBar = document.querySelector(".third-bar");
const toggleBars = document.querySelector("toggler-bar");
const navItems = document.querySelectorAll(".nav__item");
const featuredSection = document.querySelector(".featured-section");

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

["click", "keypress"].forEach((event) => {
  navToggle.addEventListener(event, opneMenu);
});
    

const projectObjects = [
  {
    name: "Leilani Montoya",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5f896fca5bec830008385831.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
  {
    name: "Levi Barron",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5e6801c56d3b380006d3cf13.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
  {
    name: "Lia Crane",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5e680e326d3b380006d6a253.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
  {
    name: "Alfred Donaldson",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5e6810cb6d3b380006d73d63.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
  {
    name: "Javion Hobbs",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5e68588e6d3b380006e72197.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
  {
    name: "Kelvin Calderon",
    speakerInfo: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates",
    ],
    image: ["./img/generated_photos_5f1804011f67b0000678ae42.jpg"],
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptates",
    ],
  },
];

function createFeaturedSection() {
  const featuredSectionHeader = document.createElement("div");
  const featuredSectionBoy = document.createElement("div");
  featuredSectionHeader.setAttribute(
    "class",
    "featured-section__header featured-element"
  );
  featuredSectionBoy.setAttribute(
    "class",
    "featured-section__body featured-element"
  );
  featuredSection.appendChild(featuredSectionHeader);
  featuredSection.appendChild(featuredSectionBoy);
}

createFeaturedSection();

const featuredElements = [...document.querySelectorAll(".featured-element")];

function createFeatureElements() {
  featuredElements[0].innerHTML = `<div class="featured-section__header">
  <h2 class="featured-section__title">featured Speakers</h2>
  <div class="red-line"></div>
  </div>`;
  for (let i = 0; i < projectObjects.length; i++) {
    featuredElements[1].innerHTML += `<div class="speaker-container">
        <div class="speaker-container__img">
          <img
            src="${projectObjects[i].image[0]}"
            alt=""
          />
        </div>
        <div class="speaker">
          <h3>${projectObjects[i].name}</h3>
          <p class="speaker__info">
            <em>${projectObjects[i].speakerInfo[0]}</em>
          </p>
          <div class="gray-line"></div>
          <p class="speaker__description">${projectObjects[i].description[0]}</p>
        </div>
      </div>`;
  }
  featuredSection.appendChild(featuredElements);
}
createFeatureElements();

