// Selecciona todas las imágenes dentro del carrusel
const images = document.querySelectorAll('.carrusel-images img');

// Selecciona los botones de navegación del carrusel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Selecciona todos los indicadores (puntos) del carrusel
const dots = document.querySelectorAll('.dot');

// Índice de la imagen actualmente visible en el carrusel
let currentIndex = 0;

// Función para actualizar el estado del carrusel
function updateCarousel() {
    // Itera sobre todas las imágenes
    images.forEach((img, index) => {
        // Muestra la imagen cuyo índice coincide con currentIndex y oculta las demás
        img.classList.toggle('active', index === currentIndex);

        // Actualiza el estado de los puntos, destacando el punto correspondiente a la imagen activa
        dots[index].classList.toggle('active', index === currentIndex);
    });

    // Deshabilita el botón 'prev' si estamos en la primera imagen
    prevButton.disabled = currentIndex === 0;

    // Deshabilita el botón 'next' si estamos en la última imagen
    nextButton.disabled = currentIndex === images.length - 1;
}

// Evento para cuando se hace clic en el botón 'prev'
prevButton.addEventListener('click', () => {
    // Si no estamos en la primera imagen, retrocede una imagen
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Evento para cuando se hace clic en el botón 'next'
nextButton.addEventListener('click', () => {
    // Si no estamos en la última imagen, avanza una imagen
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Añade eventos de clic a cada punto del carrusel
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Actualiza currentIndex con el índice del punto clicado
        currentIndex = index;
        updateCarousel();
    });
});

// Llama a updateCarousel para inicializar el carrusel en el estado correcto
updateCarousel();
