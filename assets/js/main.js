// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Typed.js Animation
const typed = new Typed('.typed-text', {
    strings: [
        'Single-player web games designed to rage you.',
        'Open source. Community driven. Pure chaos.',
        'Play instantly. Contribute easily. Build with friends.',
        'No downloads. No installs. Just pure gaming.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const hamburgerIcon = document.querySelector('.hamburger i');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (hamburgerIcon) {
                    hamburgerIcon.classList.remove('fa-times');
                    hamburgerIcon.classList.add('fa-bars');
                }
            }
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}
