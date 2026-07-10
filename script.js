// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mini sticky header — fades in once the hero scrolls out of view
const hero = document.getElementById('top');
const miniHeader = document.getElementById('miniHeader');

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    miniHeader.classList.toggle('is-visible', !entry.isIntersecting);
  },
  { threshold: 0.15 }
);
heroObserver.observe(hero);

// Item popups (native <dialog>)
document.querySelectorAll('[data-dialog]').forEach(card => {
  card.addEventListener('click', () => {
    const dialog = document.getElementById(card.dataset.dialog);
    if (dialog) dialog.showModal();
  });
});

document.querySelectorAll('.item-dialog').forEach(dialog => {
  // Close button
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

  // Click outside the dialog content (on the backdrop) closes it
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
});
