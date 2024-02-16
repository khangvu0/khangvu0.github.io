/*---------------- MENU SHOW & HIDDEN ----------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*----- SHOW MENU -----*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*----- HIDE MENU -----*/
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*----- REMOVE MENU MOBILE -----*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //click on each nav link -> remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*---------------- ACCORDION SKILLS ----------------*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*---------------- QUALIFICATION TABS ----------------*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tabs.addEventListener('click', () =>{
        const target = document.querySelector(tab.CDATA_SECTION_NODE.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*---------------- SERVICES MODAL ----------------*/


/*---------------- PORTFOLIO SWIPER  ----------------*/
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*---------------- TESTIMONIAL ----------------*/


/*---------------- SCROLL SECTIONS ACTIVE LINK ----------------*/
/* const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {

    })
} */

/*---------------- CHANGE BACKGROUND HEADER ----------------*/ 


/*---------------- SHOW SCROLL UP ----------------*/ 


/*---------------- DARK LIGHT THEME ----------------*/ 