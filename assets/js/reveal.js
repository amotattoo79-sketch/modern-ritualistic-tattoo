(() => {
  const els = Array.from(document.querySelectorAll('.reveal'));

  // Falls nix da ist: raus
  if (!els.length) return;

  const show = (el) => el.classList.add('is-visible');

  // Fallback: alte Browser -> alles sichtbar
  if (!('IntersectionObserver' in window)) {
    els.forEach(show);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target); // nur einmal "rein"
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
})();
