// Show sticky navbar only after leaving the landing/hero
document.addEventListener("DOMContentLoaded", () => {
  const nav  = document.getElementById("floatingNavbar");
  const hero = document.querySelector(".hero-section");
  if (!nav) return;

  // No hero on this page? keep it visible.
  if (!hero) { nav.classList.add("is-visible"); return; }

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) nav.classList.remove("is-visible");
    else nav.classList.add("is-visible");
  }, { threshold: 0.15 });

  io.observe(hero);
});
