const slides = [
    '<div class="cake-fillings__item"><div class="cake-fillings__box box"><img class="box__image" src="img/vanilla-card-cakes.jpg" alt="Vanilla Tenderness"></div><h3 class="cake-fillings__item-title">Vanilla Tenderness</h3><p class="cake-fillings__item-price">$20/kg</p><p class="cake-fillings__item-description">Sweet and mouth-filling vanilla biscuits covered with sour cream, custard cream and delicate nut syrup.</p></div>',
    '<div class="cake-fillings__item"><div class="cake-fillings__box box"><img class="box__image" src="img/strawberry-card-cakes.jpg" alt="Strawberry Summer"></div><h3 class="cake-fillings__item-title">Strawberry Summer</h3><p class="cake-fillings__item-price">$25/kg</p><p class="cake-fillings__item-description">Wet vanilla biscuits with strawberry pieces soaked with strawberry juice, layers are covered with strawberry-basil cheese cream.</p></div>',
    '<div class="cake-fillings__item"><div class="cake-fillings__box box"><img class="box__image" src="img/pistachio-card-cakes.jpg" alt="Pistachio Queen"></div><h3 class="cake-fillings__item-title">Pistachio Queen</h3><p class="cake-fillings__item-price">$30/kg</p><p class="cake-fillings__item-description">Airy biscuits soaked in rum syrup, delicate pistachio and vanilla cream with milk-chocolate sauce.</p></div>',
    '<div class="cake-fillings__item"><div class="cake-fillings__box box"><img class="box__image" src="img/tiramisu-card-cakes.png" alt="Tiramisu"></div><h3 class="cake-fillings__item-title">Tiramisu</h3><p class="cake-fillings__item-price">$30/kg</p><p class="cake-fillings__item-description">Italian multi-layered dessert, which is made of mascarpone cheese, coffee, chicken eggs, sugar and Savoyardi cookies. Belissimo!</p></div>'
]

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.cake-fillings__items-carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 992px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const prevBtn = document.querySelector('.cake-fillings__items-carousel-btn-prev');
const nextBtn = document.querySelector('.cake-fillings__items-carousel-btn-next');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);