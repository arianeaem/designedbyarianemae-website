document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.flip-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      // If the click came from inside a .hero-cta, don't flip
      if (e.target.closest('.hero-cta')) {
        e.stopPropagation();
        return;
      }
      card.classList.toggle('flipped');
    });
  });
});
