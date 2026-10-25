const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const backToTop = document.getElementById("back-to-top");
const year = document.getElementById("year");

// Automatically display the current year in the footer.
year.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after a navigation link is selected.
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Show the back-to-top button after the visitor scrolls down.
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Smoothly return to the top.
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
