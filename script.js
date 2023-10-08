// JavaScript to toggle mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navbarList = document.querySelector(".navbar-list");

menuToggle.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});

// added script for type-text creation
src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js";

var typed = new Typed(".auto-type", {
  strings: ["Jarvis"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
