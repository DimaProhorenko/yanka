const burger = document.querySelector('.burger');
const closeMNBtn = document.querySelector('.mn__btn--close');
const mobileMenu = document.querySelector('.mn');


const backdrop = document.querySelector('.backdrop');

const mobileSearchFormOpen = document.querySelector('.open-search');
const mobileSearchFormClose = document.querySelector('.close-search');
const mobileSearchForm = document.querySelector('.header__mobile-form');


const mnNextLevel = document.querySelectorAll('.mn__next-level');
const initialMobileMenuPanels = document.querySelector('.mn__panels--initial');
const mnBackBtn = document.querySelector('.mn__btn--back');

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
    resetMobilePanels();
}

const resetMobilePanels = () => {
    hidePanels();
    hideMnBackBtn();
}

const hidePanels = () => {
    const panels = document.querySelectorAll('.mn__panels');
    panels.forEach(panel => panel.classList.remove('mn__panels--current'));
}

const toggleMnBackBtn = () => {
    mnBackBtn.classList.toggle('mn__btn--hidden');
}

const showMnBackBtn = () => {
    mnBackBtn.classList.remove('mn__btn--hidden');
}

const hideMnBackBtn = () => {
    mnBackBtn.classList.add('mn__btn--hidden');
}

const showPanelHandler = (e) => {
    e.preventDefault();
    const clickedEl = e.target;
    const targetId = clickedEl.getAttribute('data-target');
    const target = document.querySelector(targetId);
    showMnBackBtn();
    target?.classList.add('mn__panels--current')
}

const showPrevPanelHandler = () => {
    const activePanels = [...document.querySelectorAll('.mn__panels--current')];
    if (activePanels.length <= 1) hideMnBackBtn();

    const lastPanel = activePanels.pop();
    lastPanel.classList.remove('mn__panels--current');
    
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

mnNextLevel.forEach(el => el.addEventListener('click', showPanelHandler));

mnBackBtn.addEventListener('click', showPrevPanelHandler);

const headerTopSlider = new Swiper('.header__top-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    }
})