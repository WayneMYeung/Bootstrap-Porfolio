// snap-scroll.js

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.snap-wrapper');
  let isScrolling = false;

  wrapper.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    e.preventDefault(); // prevent default scroll behavior
    isScrolling = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const scrollAmount = window.innerHeight;

    wrapper.scrollBy({
      top: direction * scrollAmount,
      left: 0,
      behavior: 'smooth'
    });

    setTimeout(() => isScrolling = false, 800); // Adjust speed here
  }, { passive: false });
});
