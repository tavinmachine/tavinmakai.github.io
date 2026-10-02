// Tavin Makai site — lightbox + mobile menu. No dependencies.

(function () {
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
    el.addEventListener('click', function () {
      var img = el.querySelector('img');
      openLightbox(el.getAttribute('data-full'), el.getAttribute('data-caption'), img ? img.alt : '');
    });
  });

  lightbox.addEventListener('click', closeLightbox);
  lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });

  // ---------- mobile menu ----------
  var menuBtn = document.getElementById('menuBtn');
  var siteNav = document.getElementById('siteNav');

  menuBtn.addEventListener('click', function () {
    var open = siteNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      siteNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();
