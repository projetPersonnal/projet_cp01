// Corps for Progress — comportements de la version statique
(function () {
  'use strict';

  // Menu mobile
  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  if (header && burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    header.querySelectorAll('.mobile-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1000) header.classList.remove('is-open');
    });
  }

  // Année du pied de page
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Fonctions qui nécessitent le serveur (comptes, détail des cours)
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  document.body.appendChild(toast);
  var timer;
  document.querySelectorAll('[data-soon]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      toast.textContent = btn.getAttribute('data-soon') || 'Disponible prochainement.';
      toast.classList.add('is-visible');
      clearTimeout(timer);
      timer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2800);
    });
  });
})();
