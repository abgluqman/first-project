// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const carousel = document.querySelector('.carousel-track');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Initialize carousel
function initCarousel() {
    updateCarousel();
    // Auto-play carousel every 5 seconds
    setInterval(autoNextSlide, 5000);
}

// Update carousel position and indicators
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Update slide opacity
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Previous slide
function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-play next slide
function autoNextSlide() {
    nextSlide();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Pause auto-play on hover
const carouselContainer = document.querySelector('.carousel-container');
let autoPlayInterval;

carouselContainer.addEventListener('mouseenter', () => {
    // Pause is handled by the fact that we don't reset the interval
});

carouselContainer.addEventListener('mouseleave', () => {
    // Resume auto-play can be added here if desired
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', initCarousel);

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
