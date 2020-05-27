const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const slides = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
let nextIndex;
let currentIndex = slides.indexOf(document.querySelector('.slider__item_active'));
dots[currentIndex].classList.add('slider__dot_active');

function setSlide (nextIndex) {
    slides[currentIndex].classList.remove('slider__item_active');
    dots[currentIndex].classList.remove('slider__dot_active');
    slides[nextIndex].classList.add('slider__item_active');
    dots[nextIndex].classList.add('slider__dot_active');
    currentIndex = nextIndex;
}

arrows.forEach(arrow => {
    arrow.onclick = () => {
        if (arrow.classList.contains('slider__arrow_prev')) {
            if (currentIndex == 0) {
                nextIndex = slides.length - 1;
            } else {
                nextIndex = currentIndex - 1;
            }
        } else if (arrow.classList.contains('slider__arrow_next')) {
            if (currentIndex == slides.length - 1) {
                nextIndex = 0;
            } else {
                nextIndex = currentIndex + 1;
            }
        }
        
        setSlide(nextIndex);     
    }
});

dots.forEach(dot => {
    dot.onclick = () => {
        setSlide(dots.indexOf(dot));
    }
});