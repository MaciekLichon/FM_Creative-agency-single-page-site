/* ----------- NAVBAR ----------- */

const navOpen = document.querySelector('.navbar__open');
const navClose = document.querySelector('.navbar__close');
const navMenu = document.querySelector('.navbar__links');

navOpen.addEventListener('click', () => {
    navMenu.classList.add('navbar__links-open');
    navOpen.classList.add('hidden');
    navClose.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('navbar__links-open');
    navOpen.classList.remove('hidden');
    navClose.classList.add('hidden');
});

/* ----------- GALLERY ----------- */

let currentSlide = 0;

const btnPrev = document.querySelector('.slider__controls-buttons-left');
const btnNext = document.querySelector('.slider__controls-buttons-right');

const slideTitles = document.querySelectorAll('.slider__title');
const slideImages = document.querySelectorAll('.slider__image');

const showItem = (index, items) => {
    for (let slide of items) {
        slide.classList.remove('open');
    }
    const newSlide = Array.from(items).find(item => item.getAttribute('data-slide') === `${index}`);
    newSlide.classList.add('open');
}

btnPrev.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
    }
    showItem(currentSlide, slideTitles);
    showItem(currentSlide, slideImages);
});

btnNext.addEventListener('click', () => {
    if (currentSlide < slideTitles.length - 1) {
        currentSlide += 1;
    }
    showItem(currentSlide, slideTitles);
    showItem(currentSlide, slideImages);
});
