document.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top on page load
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    /* =========================================
       SCROLL ANIMATIONS (Reveal on Scroll)
       ========================================= */
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 50;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);


    /* =========================================
       NAVBAR SCROLL EFFECT
       ========================================= */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       ACTIVE NAV LINK HIGHLIGHTING
       ========================================= */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjust to offset navbar height
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* =========================================
       PARALLAX EFFECT FOR HERO SHAPES
       ========================================= */
    document.addEventListener('mousemove', (e) => {
        const shape1 = document.querySelector('.shape-1');
        const shape2 = document.querySelector('.shape-2');
        
        if(shape1 && shape2) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Move opposite to mouse with different speeds
            shape1.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
            shape2.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        }
    });
});
