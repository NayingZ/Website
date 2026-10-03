/* Mobile menu toggle + gentle reveal-on-scroll. Pages work without it. */
(function () {
  document.documentElement.classList.add('js');
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.nav-toggle');
  if (btn && header) btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();

/* Research focus: hovering a theme highlights its arc on the map, and vice versa */
(function () {
  var svg = document.querySelector('.focus-split .rmap');
  var pillars = document.querySelectorAll('.pillar');
  if (!svg || !pillars.length) return;
  var groups = svg.querySelectorAll('.rm-group');
  function focus(i) {
    svg.classList.toggle('has-focus', i !== null);
    groups.forEach(function (g, k) { g.classList.toggle('is-focus', k === i); });
    pillars.forEach(function (p, k) { p.classList.toggle('is-focus', k === i); });
  }
  pillars.forEach(function (p, i) {
    p.addEventListener('mouseenter', function () { focus(i); });
    p.addEventListener('focus', function () { focus(i); });
    p.addEventListener('mouseleave', function () { focus(null); });
    p.addEventListener('blur', function () { focus(null); });
  });
  groups.forEach(function (g, i) {
    g.addEventListener('mouseenter', function () { focus(i); });
    g.addEventListener('mouseleave', function () { focus(null); });
  });
})();

/* Paper briefs: underline the section being read in the "In this brief" bar */
(function () {
  var links = document.querySelectorAll('.brief-nav .bn-links a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = new Map();
  links.forEach(function (a) { var el = document.getElementById(a.getAttribute('href').slice(1)); if (el) map.set(el, a); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { links.forEach(function (a) { a.classList.remove('is-current'); }); map.get(e.target).classList.add('is-current'); }
    });
  }, { rootMargin: '-160px 0px -60% 0px' });
  map.forEach(function (a, el) { io.observe(el); });
})();
