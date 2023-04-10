const mobileBurger = document.querySelector('#mobile-burger');
const desktopBurger = document.querySelector('#desktop-burger');
const closeMNBtn = document.querySelector('.mn__btn--close');
const mobileMenu = document.querySelector('.mn');



const backdrop = document.querySelector('.backdrop');

const mobileSearchFormOpen = document.querySelector('.open-search');
const mobileSearchFormClose = document.querySelector('.close-search');
const mobileSearchForm = document.querySelector('.header__mobile-form');


const mnNextLevel = document.querySelectorAll('.mn__next-level');
const initialMobileMenuPanels = document.querySelector('.mn__panels--initial');
const mnBackBtn = document.querySelector('.mn__btn--back');

const stickyHeader = document.querySelector('.header__bot');
const stickyHeaderEl = document.querySelector('.header__bot-content')
const stickyHeaderHeight = stickyHeaderEl.offsetHeight;
const stickyHeaderOffset = stickyHeader.offsetTop;

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

mobileBurger.addEventListener('click', () => {
    mobileBurger.classList.add('opened');
    mobileBurger.setAttribute('aria-expanded', true);
    mobileMenu.classList.add('opened');
    showBackdrop();
})


desktopBurger.addEventListener('click', () => {
    desktopBurger.classList.toggle('opened');
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


window.addEventListener('scroll', e => {
    const scroll = window.scrollY;
    console.log(stickyHeaderHeight)
    console.log(`scroll: ${scroll}`);
    console.log(`offset: ${stickyHeaderOffset}`);
    if (scroll < stickyHeaderOffset) {
        console.log('remove');
        stickyHeaderEl.classList.remove('sticked');
    } else if (scroll >= stickyHeaderOffset + stickyHeaderHeight) {
        if (!stickyHeaderEl.classList.contains('sticked')) {
            stickyHeaderEl.classList.add('sticked');
        }
    }
})




const headerTopSlider = new Swiper('.header__top-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    }
})