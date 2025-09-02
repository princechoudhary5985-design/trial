document.addEventListener('DOMContentLoaded', () => {
  const kitty = document.getElementById('kitty');
  const nextBtn = document.getElementById('nextBtn');
  const layer  = document.getElementById('balloonLayer');

  let clicked = false;

  kitty.addEventListener('click', () => {
    if (clicked) return;
    clicked = true;

    const BALLOON_COUNT = 28;
    let maxTotal = 0;

    for (let i = 0; i < BALLOON_COUNT; i++) {
      const b = document.createElement('div');
      b.className = 'balloon';

      const w = 26 + Math.random() * 34;           // 26–60px
      const h = w * 1.4;
      const dur = 3.6 + Math.random() * 2.4;       // 3.6–6.0s
      const delay = Math.random() * 0.8;           // 0–0.8s
      const left = Math.random() * 100;            // vw
      const drift = (Math.random() * 60 - 30) + 'px';
      const rot   = (Math.random() * 60 - 30) + 'deg';
      const clr   = `hsl(${Math.floor(Math.random()*360)},80%,65%)`;

      b.style.left = left + 'vw';
      b.style.setProperty('--w', w + 'px');
      b.style.setProperty('--h', h + 'px');
      b.style.setProperty('--dur', dur + 's');
      b.style.setProperty('--delay', delay + 's');
      b.style.setProperty('--drift', drift);
      b.style.setProperty('--rot', rot);
      b.style.setProperty('--clr', clr);

      layer.appendChild(b);

      const total = dur + delay;
      if (total > maxTotal) maxTotal = total;
      setTimeout(() => b.remove(), (total + 0.2) * 1000);
    }

    // show the Next button after the last balloon should be gone
    setTimeout(() => nextBtn.classList.add('show'), (maxTotal + 0.2) * 1000);
  });
});

