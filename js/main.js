(function () {
  'use strict';

  var menuBtn = document.getElementById('menuBtn');
  var headerNav = document.getElementById('headerNav');
  var header = document.getElementById('header');

  if (menuBtn && headerNav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = headerNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    headerNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        headerNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
