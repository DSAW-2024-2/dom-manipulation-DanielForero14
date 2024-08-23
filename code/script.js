

const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
        dots[index].classList.toggle('active', index === currentIndex);
    });

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();
