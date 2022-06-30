import './normalize.css'
import './home.css';
import './menu.css'
import './contact.css'
import favicon from "./img/bruh.jpg"
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

// home.addHome();
// menu.addMenu();
// contact.addContact();

const main = (() => {
  function initialize() {
    home.addHome();
    addFavicon()
  }

  function addFavicon() {
    const head = document.querySelector("head")

    let icon = /*html*/ `
    <link rel="icon" href=${favicon}>
    `

    head.innerHTML += icon;
  }

  function tabSwitch() {
    const homeButton = document.querySelector(".home-button");
    const menuButton = document.querySelector(".menu-button");
    const contactButton = document.querySelector(".contact-button");

    homeButton.addEventListener("click", () => {
      home.addHome();
      console.log(document.querySelector(".home-button"))
      tabSwitch();
    })
    menuButton.addEventListener("click", () => {
      menu.addMenu();
      tabSwitch();
    })
    contactButton.addEventListener("click", () => {
      contact.addContact();
      tabSwitch();
    })
  }

  return {
    initialize,
    addFavicon,
    tabSwitch,
  }
})();

main.initialize()
main.tabSwitch()