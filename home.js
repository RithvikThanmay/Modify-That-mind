document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;
    const slideWrapper = document.querySelector('.slide-wrapper');

    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        const translateValue = -currentSlide * 100 + '%';
        slideWrapper.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000); 

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    document.querySelector('.slider-navigation .prev-button').addEventListener('click', prevSlide);
    document.querySelector('.slider-navigation .next-button').addEventListener('click', nextSlide);
});
