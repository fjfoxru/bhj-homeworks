const revealElements = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
  let viewportHeight = window.innerHeight;
  revealElements.forEach(reveal => {
    let revealPosition = reveal.getBoundingClientRect();
    if (revealPosition.bottom < 0 || revealPosition.top > viewportHeight) {
        reveal.classList.remove('reveal_active');
    } else {
        reveal.classList.add('reveal_active');
    }
  });
});