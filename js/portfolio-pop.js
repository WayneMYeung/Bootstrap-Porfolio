document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.modal-close');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalGithub = document.getElementById('modalGithub');

  const items = document.querySelectorAll('.portfolio-item');

  // Show modal function
  function showModal(largeImgSrc, title, description, githubLink) {
    modalImg.src = largeImgSrc;
    modalTitle.textContent = title || 'Untitled Project';
    modalDescription.textContent = description || 'No description available.';
    modalGithub.href = githubLink || '#';

    // First set display, then force reflow, then add show class
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('show');
    });
  }

  // Hide modal function
  function hideModal() {
    modal.classList.remove('show');
  }

  // When transition ends and modal isn't shown, hide it completely
  modal.addEventListener('transitionend', () => {
    if (!modal.classList.contains('show')) {
      modal.style.display = 'none';
    }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const largeImgSrc = item.getAttribute('data-image');
      const title = item.getAttribute('data-title');
      const description = item.getAttribute('data-description');
      const githubLink = item.getAttribute('data-github');

      showModal(largeImgSrc, title, description, githubLink);
    });
  });

  closeBtn.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });
});
