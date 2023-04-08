const burger = document.querySelector('.burger');
const closeMNBtn = document.querySelector('.mn__close-btn');
const mobileMenu = document.querySelector('.mn');

const backdrop = document.querySelector('.backdrop');

const mobileSearchFormOpen = document.querySelector('.open-search');
const mobileSearchFormClose = document.querySelector('.close-search');
const mobileSearchForm = document.querySelector('.header__mobile-form');

const showBackdrop = () => {
    backdrop.classList.add('active');
}
const hideBackdrop = () => {
    backdrop.classList.remove('active');
}

const backdropClickHandler = () => {
    hideBackdrop();
    hideMobileMenu();
}

const hideMobileMenu = () => {
    mobileMenu.classList.remove('opened');
}

burger.addEventListener('click', () => {
    burger.classList.add('opened');
    burger.setAttribute('aria-expanded', true);
    mobileMenu.classList.add('opened');
    showBackdrop();
})

closeMNBtn.addEventListener('click', () => {
    hideMobileMenu();
    hideBackdrop();
})

backdrop.addEventListener('click', backdropClickHandler)


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