const slides = document.querySelectorAll('.sweets__slider .sweets__slider-line .slider__image-container');
const sliderLine = document.querySelector('.sweets__slider-line');
let count = 0;
let width;

window.addEventListener('resize', init)
init();

document.querySelector('.slider_next').addEventListener('click', function () {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
})

document.querySelector('.slider_prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

function init() {
    width = document.querySelector('.sweets__slider').offsetWidth;
    sliderLine.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        item.style.width = width * 2 + 'px';
        item.style.heigth = 'auto';
        rollSlider();
    })
}