const home = document.querySelector('.home p');
const about = document.querySelector('.about section p');
const project = document.querySelector('.project h1');
const skils = document.querySelector('.skils h1');
const contact = document.querySelector('.contact h1');
const homeNav = document.querySelector('.homenav');
const aboutNav = document.querySelector('.aboutnav');
const projectNav = document.querySelector('.projectnav');
const skilsNav = document.querySelector('.skilsnav');
const contactNav = document.querySelector('.contactnav');

//NAV
function smoothScroll(event, targetId) {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    let yOffset = 0;
    if(targetId === "#home") {
        yOffset = -300;
    } else if(targetId === "#about") {
        yOffset = -150;
    } else if(targetId === "#project") {
        yOffset = -350;
    } else if(targetId === "#skils") {
        yOffset = -350;
    } else if(targetId === "#contact") {
        yOffset = -500;
    }
    
    
    const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
    });
}

//HOME
const homeObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if(entry.isIntersecting) {
        homeNav.style.transform = "scale(1.2)";
    }
    else {
        homeNav.style.transform = "scale(1)";
    }
}, {threshold: 0.9});

homeObserver.observe(home);

//ABOUT
const aboutObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if(entry.isIntersecting) {
        aboutNav.style.transform = "scale(1.2)";
    }
    else {
        aboutNav.style.transform = "scale(1)";
    }
}, {threshold: 0.9});

aboutObserver.observe(about);

//PROJECT
const projectObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if(entry.isIntersecting) {
        projectNav.style.transform = "scale(1.2)";
    }
    else {
        projectNav.style.transform = "scale(1)";
    }
}, {threshold: 0.9});

projectObserver.observe(project);

//SKILS
const skilsObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if(entry.isIntersecting) {
        skilsNav.style.transform = "scale(1.2)";
    }
    else {
        skilsNav.style.transform = "scale(1)";
    }
}, {threshold: 0.9});

skilsObserver.observe(skils);

//CONTACT
const contactObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if(entry.isIntersecting) {
        contactNav.style.transform = "scale(1.2)";
    }
    else {
        contactNav.style.transform = "scale(1)";
    }
}, {threshold: 0.9});

contactObserver.observe(contact);
