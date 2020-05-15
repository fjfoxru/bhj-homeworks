const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const slides = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
let nextSlide;
let activeSlide;


// dots[activeDot].className = 'slider__dot slider__dot_active';

arrows.forEach(arrow => {
    arrow.onclick = () => {
        activeSlide = slides.indexOf(document.querySelector('.slider__item_active'));
        slides[activeSlide].className = 'slider__item';
        if (arrow.className.includes('slider__arrow_prev')) {
            if (nextSlide == slides[0]) {
                nextSlide = slides[slides.length - 1];
            } else {
                nextSlide = slides[activeSlide - 1];
            }
        } else if (arrow.className.includes('slider__arrow_next')) {
            if (nextSlide == slides[slides.length - 1]) {
                nextSlide = slides[0];
            } else {
                nextSlide = slides[activeSlide + 1];
            }
        }
        activeSlide = nextSlide;
        activeSlide.className = 'slider__item slider__item_active';
    }
});



dots.forEach(dot => {
    dot.onclick = () => {
        dots.forEach(dot => dot.className = 'slider__dot');
        dot.className = 'slider__dot slider__dot_active';
        let dotIndex = dots.indexOf(document.querySelector('.slider__dot_active'));
        slides.forEach(slide => slide.className = 'slider__item');
        slides[dotIndex].className = 'slider__item slider__item_active';
    }
});



