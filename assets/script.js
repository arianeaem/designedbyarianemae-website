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
    e.preventDefault(); // Prevent default to delay the navigation for 2 sec

    if (this.classList.contains('loading')) return;

    this.classList.add('loading');
    if (ctaText) ctaText.style.opacity = '0';

    // Simulate a 2-second loading animation, then navigate
    setTimeout(() => {
      window.location.href = this.href; // ✅ Navigate to the link after delay
    }, 2000);
  });
}
