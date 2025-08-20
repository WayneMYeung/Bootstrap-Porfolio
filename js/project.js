// ===============
// Mobile menu
// ===============
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('siteMenu');
  if (!toggle || !menu) return;

  const open = () => {
    menu.removeAttribute('hidden');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    menu.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isHidden = menu.hasAttribute('hidden');
    isHidden ? open() : close();
  });

  // click backdrop to close
  menu.addEventListener('click', (e) => {
    if (e.target === menu) close();
  });

  // esc to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hasAttribute('hidden')) close();
  });
})();

// ===============
// Lightbox
// ===============
(() => {
  const grid = document.querySelector('.screen-grid');
  if (!grid) return;

  const images = Array.from(grid.querySelectorAll('img'));
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');
  const btnPrev = document.getElementById('lbPrev');
  const btnNext = document.getElementById('lbNext');
  const btnClose = document.querySelector('.lb-close');

  let idx = 0;

  const fullSrc = (imgEl) => imgEl.getAttribute('data-full') || imgEl.src;

  function open(i) {
    idx = i;
    update();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function update() {
    const img = images[idx];
    lbImg.src = fullSrc(img);
    lbImg.alt = img.alt || '';
    lbCounter.textContent = `${idx + 1} / ${images.length}`;

    // Preload neighbors
    const prev = new Image(), next = new Image();
    prev.src = fullSrc(images[(idx - 1 + images.length) % images.length]);
    next.src = fullSrc(images[(idx + 1) % images.length]);
  }
  function prev() {
    idx = (idx - 1 + images.length) % images.length;
    update();
  }
  function next() {
    idx = (idx + 1) % images.length;
    update();
  }

  images.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(i));
  });

  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnClose.addEventListener('click', close);

  // click backdrop to close
  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  // keyboard support
  window.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
