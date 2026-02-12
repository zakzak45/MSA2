// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animations
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const revealSelectors = [
    '.service-card',
    '.featured-item',
    '.industry-card',
    '.concept-card',
    '.process-card',
    '.product-showcase-card',
    '.carousel-item',
    '.why-feature',
    '.feature-box',
    '.contact-form',
    '.contact-hero-content',
    '.contact-hero-image',
    '.contact-quick-item'
];

document.querySelectorAll(revealSelectors.join(',')).forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});

// CTA Button click handler
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Product carousel controls
document.querySelectorAll('[data-carousel-wrapper]').forEach(wrapper => {
    const track = wrapper.querySelector('[data-carousel-track]');
    const prevBtn = wrapper.querySelector('[data-carousel-prev]');
    const nextBtn = wrapper.querySelector('[data-carousel-next]');

    if (!track || !prevBtn || !nextBtn) {
        return;
    }

    if (track.dataset.carouselInitialized === 'true') {
        return;
    }
    track.dataset.carouselInitialized = 'true';

    const getScrollAmount = () => {
        const item = track.querySelector('.carousel-item');
        if (!item) {
            return 0;
        }
        const itemWidth = item.getBoundingClientRect().width;
        const gapValue = parseFloat(getComputedStyle(track).gap || '0');
        return itemWidth + gapValue;
    };

    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

});

console.log('MSA Website - JavaScript Initialized');
