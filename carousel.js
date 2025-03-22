 let slideIndex = 0;

// Функция для перехода между слайдами
function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex += n;

    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Инициализация карусели
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-images img');
    slides.forEach(slide => slide.style.display = "none");
    moveSlide(0);
});