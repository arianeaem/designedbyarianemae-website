// Swap stacked about images on click
document.addEventListener('DOMContentLoaded', function () {
  const aboutImages = document.querySelector('.about-images');
  if (!aboutImages) return;
  const imgs = aboutImages.querySelectorAll('img');
  if (imgs.length !== 2) return;

  // Initial state: 2nd image is front
  imgs[0].classList.add('back');
  imgs[1].classList.add('front');

  aboutImages.addEventListener('click', function () {
    imgs[0].classList.toggle('front');
    imgs[0].classList.toggle('back');
    imgs[1].classList.toggle('front');
    imgs[1].classList.toggle('back');
  });
});
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
