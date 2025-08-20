// Adds .in-view once when a card first appears (safe if nothing matches)
document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroll-snap") || null;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        obs.unobserve(e.target);
      }
    });
  }, { root: scroller, threshold: 0.5 });

  // observe expertise cards (adjust selector if you want more)
  document.querySelectorAll(".expertise-card").forEach(el => io.observe(el));
});
