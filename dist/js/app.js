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
const categories = stickyHeader.querySelector('.categories--sticky');
const categoriesToggler = stickyHeader.querySelector('#desktop-burger');
const hideWhenSticky = document.querySelector('.hide-when-sticky');

const mobileHeader = document.querySelector('.header__mobile');
const mobileHeaderOffset = mobileHeader.offsetTop;
const mobileHeaderHeight = mobileHeader.offsetHeight;

const addUniqueClass = (el, ...className) => {
    if (!el.classList.contains(...className)) {
        el.classList.add(...className);
    }
}

const removeClass = (el, ...className) => el.classList.remove(...className);

const addClass = (el, ...className) => el.classList.add(...className);

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

const toggleCategories = () => {
    categories.classList.toggle('collapsed');
}

const desktopHeaderScrollHandler = (scroll) => {
    if (scroll < stickyHeaderOffset) {
        removeClass(stickyHeaderEl, 'sticked');
        removeClass(desktopBurger, 'opened');
        removeClass(categories, 'collapsed', 'sticked');
        addClass(categoriesToggler, 'burger--secondary', 'burger--lines-hidden');
        hideWhenSticky.style.display = 'block';
    } else if (scroll >= stickyHeaderOffset + stickyHeaderHeight) {
        addUniqueClass(stickyHeaderEl, 'sticked');
        addUniqueClass(categories, 'collapsed', 'sticked');
        removeClass(categoriesToggler, 'burger--secondary', 'burger--lines-hidden');
        hideWhenSticky.style.display = 'none';
    }
}

const mobileHeaderScrollHandler = (scroll) => {
    if (scroll < mobileHeaderOffset) {
        removeClass(mobileHeader, 'sticked');
    } else if (scroll >= mobileHeaderOffset + mobileHeaderHeight) {
        addUniqueClass(mobileHeader, 'sticked');
    }
}

mobileBurger.addEventListener('click', () => {
    mobileBurger.classList.add('opened');
    mobileBurger.setAttribute('aria-expanded', true);
    mobileMenu.classList.add('opened');
    showBackdrop();
})


desktopBurger.addEventListener('click', () => {
    desktopBurger.classList.toggle('opened');
    toggleCategories();
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
    desktopHeaderScrollHandler(scroll);
    mobileHeaderScrollHandler(scroll);
})




const headerTopSlider = new Swiper('.header__top-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    }
})