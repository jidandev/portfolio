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
const tema = document.querySelector('.tema');
let temaTerang = false;

//TEMA
function loadTheme() {
    let savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        if(savedTheme === "terang") {
            theme(true);
            temaTerang = true;
        } else {
            theme(false);
            temaTerang = false;
        }
    } else {
        theme(false);
        temaTerang = false;
    }
}

loadTheme();

function theme(kondisi) {
    if(kondisi) {
        tema.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
        tema.style.color = `var(--text-color-light)`;
        document.body.style.backgroundColor = `var(--primary-color-light)`;
        document.querySelector('nav ul').style.background = `var(--glass-light)`;
        for(let i = 0;i<5;i++) {
            document.querySelectorAll('nav ul li')[i].style.backgroundColor = `var(--accent-color-light)`;
            document.querySelectorAll('nav ul li')[i].style.color = `var(--text-color-light)`;
        }
        document.querySelector('.home h1').style.color = `var(--text-color-light)`;
        document.querySelector('.home h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.home p').style.color = `var(--text-color-light)`;
        document.querySelector('.about div').style.background = `var(--glass-light)`;
        document.querySelector('.about div div').style.backgroundColor = `var(--accent-color-light)`;
        document.querySelector('.about div h1').style.color = `var(--text-color-light)`;
        document.querySelector('.about div h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.about div p').style.color = `var(--text-color-light)`;
        document.querySelector('.about .isi h1').style.color = `var(--text-color-light)`;
        document.querySelector('.about .isi h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.about .isi p').style.color = `var(--text-color-light)`;
        document.querySelector('.project h1').style.color = `var(--text-color-light)`;
        document.querySelector('.project h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.project ul li').style.background = `var(--glass-light)`;
        document.querySelector('.project ul li h1').style.color = `var(--text-color-light)`;
        document.querySelector('.project ul li h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.project ul li a').style.color = `var(--text-color-light)`;
        document.querySelector('.project ul li .github').style.color = `var(--text-color-light)`;
        document.querySelector('.skils h1').style.color = `var(--text-color-light)`;
        document.querySelector('.skils h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.contact h1').style.color = `var(--text-color-light)`;
        document.querySelector('.contact h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.githubimg').style.filter = `invert(0%)`;
    } else {
        tema.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`
        tema.style.color = `var(--text-color)`;
        document.body.style.backgroundColor = `var(--primary-color)`;
        document.querySelector('nav ul').style.background = `var(--glass-dark)`;
        for(let i = 0;i<5;i++) {
            document.querySelectorAll('nav ul li')[i].style.backgroundColor = `var(--accent-color)`;
            document.querySelectorAll('nav ul li')[i].style.color = `var(--text-color)`;
        }
        document.querySelector('.home h1').style.color = `var(--text-color)`;
        document.querySelector('.home h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.home p').style.color = `var(--text-color)`;
        document.querySelector('.about div').style.background = `var(--glass-dark)`;
        document.querySelector('.about div div').style.backgroundColor = `var(--accent-color)`;
        document.querySelector('.about div h1').style.color = `var(--text-color)`;
        document.querySelector('.about div h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.about div p').style.color = `var(--text-color)`;
        document.querySelector('.about .isi h1').style.color = `var(--text-color)`;
        document.querySelector('.about .isi h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.about .isi p').style.color = `var(--text-color)`;
        document.querySelector('.project h1').style.color = `var(--text-color)`;
        document.querySelector('.project h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.project ul li').style.background = `var(--glass-dark)`;
        document.querySelector('.project ul li h1').style.color = `var(--text-color)`;
        document.querySelector('.project ul li h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.project ul li a').style.color = `var(--text-color)`;
        document.querySelector('.project ul li .github').style.color = `var(--text-color)`;
        document.querySelector('.skils h1').style.color = `var(--text-color)`;
        document.querySelector('.skils h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.contact h1').style.color = `var(--text-color)`;
        document.querySelector('.contact h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.githubimg').style.filter = `invert(100%)`;
    }
}

tema.addEventListener('click', () => {
    if(!temaTerang) {
        theme(true);
        localStorage.setItem('theme', "terang");
        temaTerang = true;
    } else {
        theme(false);
        localStorage.setItem('theme', "gelap");
        temaTerang = false;
    }
})

let scrollHome = -300;
let scrollAbout = -50;
let scrollProject = -200;
let scrollSkils = -200;
let scrollContact = 10;
//SCREEN SIZE
function checkScreenSize() {
    if (window.matchMedia('(min-width: 481px)').matches) {
        scrollHome = -300;
        scrollAbout = -100;
        scrollProject = -50;
        scrollSkils = -100;
        scrollContact = 110;
        
    } else {
        scrollHome = -300;
        scrollAbout = -50;
        scrollProject = -200;
        scrollSkils = -200;
        scrollContact = 10;
    }
}

checkScreenSize();

//SCROLL POSITION
function smoothScroll(event, targetId) {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    let yOffset = 0;
    if(targetId === "#home") {
        yOffset = scrollHome;
    } else if(targetId === "#about") {
        yOffset = scrollAbout;
    } else if(targetId === "#project") {
        yOffset = scrollProject;
    } else if(targetId === "#skils") {
        yOffset = scrollSkils;
    } else if(targetId === "#contact") {
        yOffset = scrollContact;
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

aboutObserver.observe(document.querySelector('.about .isi h1'));

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

window.addEventListener('resize', checkScreenSize);

