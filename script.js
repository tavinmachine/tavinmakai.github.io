// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Gallery filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const artworks = document.querySelectorAll('.artwork');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    artworks.forEach(art => {
      if (filter === 'all' || art.dataset.status === filter) {
        art.hidden = false;
      } else {
        art.hidden = true;
      }
    });
  });
});
