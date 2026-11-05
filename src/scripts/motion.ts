/**
 * Animations pilotées en JS (vanilla, sans librairie) :
 * 1. apparition au défilement (IntersectionObserver)
 * 2. carreaux du damier qui changent doucement de couleur
 * 3. menu mobile
 * Tout ce qui bouge est coupé si l'appareil demande moins d'animations.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1. Apparition au défilement */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  revealables.forEach((el) => io.observe(el));
}

/* 2. Damier vivant : un carreau à la fois change de couleur */
if (!reduce) {
  const palette = ['--c1', '--c2', '--c3', '--c4', '--c5', '--c6', '--c7', '--c7'];
  document.querySelectorAll<HTMLElement>('[data-checker]').forEach((grid) => {
    const cells = Array.from(grid.children) as HTMLElement[];
    let visible = false;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(grid);
    window.setInterval(() => {
      if (!visible || document.hidden) return;
      for (let k = 0; k < 3; k++) {
        const cell = cells[Math.floor(Math.random() * cells.length)];
        cell.style.background = `var(${palette[Math.floor(Math.random() * palette.length)]})`;
      }
    }, 700);
  });
}

/* 3. Menu mobile */
const btn = document.querySelector<HTMLButtonElement>('[data-menu]');
const nav = document.getElementById('topnav');
if (btn && nav) {
  const setOpen = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
}
