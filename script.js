// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Testimonial Slider (Auto-scroll)
const slider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;
setInterval(() => {
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  } else {
    scrollAmount += 320;
  }
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 4000);
