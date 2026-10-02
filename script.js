// Tavin Makai site. Slimbar on scroll, lightbox, mobile menu. No dependencies.

(function () {
  // ---------- slimbar: slides in after the hero, slides away at top ----------
  var bar = document.getElementById('slimbar');
  var hero = document.getElementById('top');

  function onScroll() {
    var threshold = hero.offsetHeight - 140;
    bar.classList.toggle('visible', window.scrollY > threshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // ---------- lightbox ----------
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, caption, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-full]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      // let the "I want this" link work normally
      if (e.target.closest('a')) return;
      var img = el.querySelector('img');
      openLightbox(el.getAttribute('data-full'), el.getAttribute('data-caption'), img ? img.alt : '');
    });
  });

  lightbox.addEventListener('click', closeLightbox);
  lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  // ---------- mobile menu (slimbar) ----------
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('slimbarNav');

  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();
