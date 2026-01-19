document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menuLinks");

  if (!toggle || !menu) return;

  // Toggle menu open / close
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active"); // Animate hamburger to X
  });

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
});
