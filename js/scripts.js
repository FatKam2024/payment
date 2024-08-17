// scripts.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();

        // Extract the target section ID from the link
        const targetId = this.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the target section
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header Functionality
window.onscroll = function() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

// Enhance Navigation Active State
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjust for sticky header
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').split('#')[1] === current) {
            a.classList.add('active');
        }
    });
});

// Add 'active' class for CSS styling
document.querySelectorAll('nav ul li a').forEach(a => {
    a.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});
