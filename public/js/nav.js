const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const overlay = document.querySelector(".overlay");

function toggleNav(listener) {
  // Toggle Nav
  listener.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    // Overlay Option
    overlay.classList.toggle("hide");
  });
}

toggleNav(burger);
toggleNav(overlay);
