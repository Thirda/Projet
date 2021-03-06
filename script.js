// Burger menu
const navbar = document.querySelector("nav");
const menuHam = document.querySelector(".menu-ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuHam.addEventListener("click", () => {
  navbar.classList.toggle("visible");
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

//Sticky navbar
window.onscroll = function () {
  myFunction();
};

const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
