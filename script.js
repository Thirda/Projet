// Burger menu
const menuHam = document.querySelector(".menu-ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuHam.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
