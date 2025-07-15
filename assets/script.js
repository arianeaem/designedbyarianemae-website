const hamburger = document.getElementById('hamburger');
const navPopup = document.getElementById('navPopup');

hamburger.addEventListener('click', () => {
  navPopup.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navPopup.contains(e.target)) {
    navPopup.classList.remove('show');
  }
});

// CTA Loading Animation
const heroCTA = document.getElementById('heroCTA');
if (heroCTA) {
  const ctaText = heroCTA.querySelector('.hero-cta__text');

  heroCTA.addEventListener('click', function (e) {
    e.preventDefault();

    if (this.classList.contains('loading')) return;

    this.classList.add('loading');
    if (ctaText) ctaText.style.opacity = '0';

    // Simulate a 2-second "loading"
    setTimeout(() => {
      this.classList.remove('loading');
      if (ctaText) ctaText.style.opacity = '1';

      // Scroll to section
      const target = document.querySelector('#works');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  });
}

