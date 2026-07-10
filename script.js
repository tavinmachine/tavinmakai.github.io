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

// ============================================================
// HERO "WOOSH" TRANSITION
// The first scroll (or a click on the "More below" arrow) smoothly
// carries the page down into the Portfolio section, instead of a
// plain gradual scroll. Only active while you're still on the hero —
// once you're past it, scrolling behaves normally everywhere else.
// ============================================================
const portfolioSection = document.getElementById('portfolio');
const scrollCue = document.getElementById('scrollCue');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let isWooshing = false;

function isAtHero() {
  return window.scrollY < window.innerHeight * 0.5;
}

function wooshToPortfolio() {
  if (isWooshing) return;
  isWooshing = true;
  portfolioSection.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start'
  });
  // Lock out repeat triggers until the smooth scroll has had time to finish
  window.setTimeout(() => { isWooshing = false; }, 900);
}

// Mouse wheel / trackpad
window.addEventListener('wheel', (e) => {
  if (prefersReducedMotion || !isAtHero() || e.deltaY <= 15) return;
  e.preventDefault();
  wooshToPortfolio();
}, { passive: false });

// Touch (mobile)
let touchStartY = null;
window.addEventListener('touchstart', (e) => {
  touchStartY = isAtHero() ? e.touches[0].clientY : null;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (prefersReducedMotion || touchStartY === null || !isAtHero()) return;
  const delta = touchStartY - e.touches[0].clientY;
  if (delta > 40) {
    e.preventDefault();
    wooshToPortfolio();
    touchStartY = null;
  }
}, { passive: false });

// Clicking the arrow does the exact same motion
scrollCue.addEventListener('click', wooshToPortfolio);

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
