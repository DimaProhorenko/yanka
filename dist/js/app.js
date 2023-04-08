const burger = document.querySelector('.burger');
const mobileSearchFormOpen = document.querySelector('.open-search');
const mobileSearchFormClose = document.querySelector('.close-search');
const mobileSearchForm = document.querySelector('.header__mobile-form');

burger.addEventListener('click', () => {
    burger.classList.toggle('opened');
    // burger.setAttribute('aria-expanded', );

    if (burger.ariaExpanded == 'true') {
        burger.setAttribute('aria-expanded', false);
    } else {
        burger.setAttribute('aria-expanded', true);
    }
    
})

mobileSearchFormOpen.addEventListener('click', () => {
    mobileSearchForm.classList.add('opened');
})
mobileSearchFormClose.addEventListener('click', () => {
    mobileSearchForm.classList.remove('opened');
})

const headerTopSlider = new Swiper('.header__top-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    }
})