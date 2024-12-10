// Menu Hamburger
const MENU_HAMBURGER = document.querySelector('.header-menu-hamburger');

function toggleMenu(){
    const HEADER = document.querySelector('header');
    const ICON_HAMBURGER = document.querySelector('.hamburger-icon');
    const MENU_BOX_01 = document.querySelector('.header-menu-box-1');
    const LIST_LINK = [...document.querySelectorAll('.list-link')];

    HEADER.classList.toggle('header-active');
    ICON_HAMBURGER.classList.toggle('hamburger-icon-active');
    MENU_BOX_01.classList.toggle('header-menu-box-1-active');
    LIST_LINK.map((el)=>{
        el.classList.toggle('list-link-active');
    });
};

MENU_HAMBURGER.addEventListener('click', toggleMenu);

// Skills
const SKILLS_TEXT_01 = [...document.querySelectorAll('.skills-text-01')];
const SKILLS_TEXT_02 = [...document.querySelectorAll('.skills-text-02')];

setInterval(()=>{
    SKILLS_TEXT_01.map((el)=>{
        el.classList.toggle('skills-text-hidden');
        el.classList.toggle('skills-text-animation');
    })
    SKILLS_TEXT_02.map((el)=>{
        el.classList.toggle('skills-text-hidden');
        el.classList.toggle('skills-text-animation');
    })
}, 3000);