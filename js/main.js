// Loading
window.addEventListener('load', ()=>{
    document.querySelector('.container-load').classList.add('hidden-load');
    document.querySelector('.fix-bg').style.display = 'block';
});

// Scroll Animation
const ELE_EFFECT = [...document.querySelectorAll('.hidden-effect-01, .hidden-effect-02, .hidden-effect-03, .hidden-effect-04, .hidden-effect-05')];

const MY_OBSERVER = new IntersectionObserver((pEle)=>{
    pEle.map((ele)=>{
        if(ele.isIntersecting){
            ele.target.classList.add('visible-effect');
        }else{
            ele.target.classList.remove('visible-effect');
        }
    })
});

ELE_EFFECT.map((ele)=>{
    MY_OBSERVER.observe(ele);
});

// Body 01
const PAGE_ID = document.body.id;

if(PAGE_ID === 'page-01'){
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
}

