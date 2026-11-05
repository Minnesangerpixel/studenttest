
(() => {
  const page = document.querySelector('.tz');
  const track = page && page.querySelector('.slides');
  if (!track) return;
  track.addEventListener('click', event => {
    const arrow = event.target.closest('.switcher a');
    if (!arrow) return;
    const target = track.querySelector(arrow.hash);
    if (!target) return;
    event.preventDefault();
    const offset = target.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({left: track.scrollLeft + offset, behavior: reduced ? 'instant' : 'smooth'});
    const nextFocus = target.querySelector('[aria-label="' + arrow.getAttribute('aria-label') + '"]');
    if (nextFocus) nextFocus.focus({preventScroll:true});
  });
})();
