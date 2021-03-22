// Burger menu
const menuHam = document.querySelector(".menu-ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuHam.addEventListener("click", () => {
  menuHam.classList.toggle("active");
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// Disable scrolling in the background when burger menu is open
function lockScroll() {
  document.body.classList.toggle("lock-scroll");
}
