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
let temaGelap = true;
//TEMA
tema.addEventListener('click', () => {
    if(temaGelap) {
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
        document.querySelector('.about section h1').style.color = `var(--text-color-light)`;
        document.querySelector('.about section h1').style.borderColor = `var(--text-color-light)`;
        document.querySelector('.about section p').style.color = `var(--text-color-light)`;
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
        temaGelap = false;
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
        document.querySelector('.about section h1').style.color = `var(--text-color)`;
        document.querySelector('.about section h1').style.borderColor = `var(--text-color)`;
        document.querySelector('.about section p').style.color = `var(--text-color)`;
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
        temaGelap = true;
    }
})

//NAV
function smoothScroll(event, targetId) {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    let yOffset = 0;
    if(targetId === "#home") {
        yOffset = -300;
    } else if(targetId === "#about") {
        yOffset = -50;
    } else if(targetId === "#project") {
        yOffset = -200;
    } else if(targetId === "#skils") {
        yOffset = -200;
    } else if(targetId === "#contact") {
        yOffset = 10;
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
