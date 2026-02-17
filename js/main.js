/* ============================================
   EFFICIENTLY — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* --- Scroll Reveal Animation --- */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.eff-fade-up');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('eff-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      elements.forEach(function (el) {
        el.classList.add('eff-visible');
      });
    }
  }

  /* --- Navbar scroll effect --- */
  function initNavScroll() {
    var nav = document.querySelector('.eff-nav');
    if (!nav) return;

    function checkScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('eff-nav--scrolled');
      } else {
        nav.classList.remove('eff-nav--scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /* --- Mobile nav toggle --- */
  function initMobileNav() {
    var toggle = document.querySelector('.eff-nav__toggle');
    var menu = document.querySelector('.eff-nav__links');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('eff-nav__toggle--open');
      menu.classList.toggle('eff-nav__links--open');
      document.body.style.overflow = menu.classList.contains('eff-nav__links--open') ? 'hidden' : '';
    });

    var links = menu.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('eff-nav__toggle--open');
        menu.classList.remove('eff-nav__links--open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Active nav link --- */
  function initActiveNav() {
    var path = window.location.pathname.replace(/\/$/, '');
    var filename = path.split('/').pop() || 'index.html';

    var links = document.querySelectorAll('.eff-nav__link');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var linkFile = href.replace(/^\.\//, '').replace(/\/$/, '') || 'index.html';

      if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
        link.classList.add('eff-nav__link--active');
      }
    });
  }

  /* --- Contact form handler --- */
  function initContactForm() {
    var form = document.getElementById('eff-contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('[name="name"]').value;
      var email = form.querySelector('[name="email"]').value;
      var company = form.querySelector('[name="company"]').value || 'Not provided';
      var interest = form.querySelector('[name="interest"]').value || 'Not specified';
      var message = form.querySelector('[name="message"]').value;

      var subject = encodeURIComponent('Efficiently — Inquiry from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Company: ' + company + '\n' +
        'Interest: ' + interest + '\n\n' +
        'Message:\n' + message
      );

      window.location.href = 'mailto:hello@efficiently.world?subject=' + subject + '&body=' + body;

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Opening email client...';
      btn.style.opacity = '0.7';
      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.opacity = '1';
      }, 3000);
    });
  }

  /* --- Initialize everything --- */
  function init() {
    initScrollReveal();
    initNavScroll();
    initMobileNav();
    initActiveNav();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
