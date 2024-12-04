// Menu Hamburger
const MENU_HAMBURGER = document.querySelector('.header-menu-hamburger');

function toggleMenu(){
    const HEADER = document.querySelector('header');
    const ICON_HAMBURGER = document.querySelector('.hamburger-icon');
    const BOX_01_MIDIA = document.querySelector('.box-01-midia');
    const BOX_01_PROFILE = document.querySelector('.box-01-profile');
    const LIST_LINK = [...document.querySelectorAll('.list-link')];

    HEADER.classList.toggle('header-active');
    ICON_HAMBURGER.classList.toggle('hamburger-icon-active');
    BOX_01_MIDIA.classList.toggle('box-01-midia-active');
    BOX_01_PROFILE.classList.toggle('box-01-profile-active');
    LIST_LINK.map((el)=>{
        el.classList.toggle('list-link-active');
    });
};

MENU_HAMBURGER.addEventListener('click', toggleMenu);

// Skills
const SKILLS_TEXT_01 = document.querySelector('.skills-text-01');
const SKILLS_TEXT_02 = document.querySelector('.skills-text-02');

setInterval(()=>{
    SKILLS_TEXT_01.classList.toggle('skills-text-hidden');
    SKILLS_TEXT_01.classList.toggle('skills-text-animation');

    SKILLS_TEXT_02.classList.toggle('skills-text-hidden');
    SKILLS_TEXT_02.classList.toggle('skills-text-animation');
}, 3000);