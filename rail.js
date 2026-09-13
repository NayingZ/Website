/* Highlights the section currently being read in the left contents rail.
   Loaded only by pages that have a .page-rail. Safe to delete: the rail
   still works as plain jump links without it. */
(function () {
  const rail = document.querySelector('.page-rail');
  if (!rail || !('IntersectionObserver' in window)) return;

  const links = new Map();
  rail.querySelectorAll('a[href^="#"]').forEach(a => {
    const el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) links.set(el, a);
  });
  if (!links.size) return;

  let current = null;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) current = e.target; });
    links.forEach((a, el) => a.classList.toggle('is-current', el === current));
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

  links.forEach((a, el) => io.observe(el));
})();
