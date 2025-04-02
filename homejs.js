const bgCarousel = document.querySelector('.background-carousel');
const fgCarousel = document.querySelector('.foreground-carousel');

let currentSlide = 0;
const totalSlides = 4; 
const slideWidth = 25; 
const slideDuration = 3000; 
const transitionDuration = 1000;

function updateCarousel() {
    const offset = -currentSlide * slideWidth;
    bgCarousel.style.transform = `translateX(${offset}%)`;
    fgCarousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide === totalSlides - 1) {
        setTimeout(() => {
            bgCarousel.style.transition = 'none';
            fgCarousel.style.transition = 'none';
            currentSlide = 0;
            updateCarousel();
            setTimeout(() => {
                bgCarousel.style.transition = `transform ${transitionDuration}ms ease`;
                fgCarousel.style.transition = `transform ${transitionDuration}ms ease`;
            }, 20);
        }, transitionDuration);
    }
    updateCarousel();
}

// Start the carousel
function startCarousel() {
    setInterval(() => {
        nextSlide();
    }, slideDuration + transitionDuration); 
}
updateCarousel();
startCarousel();