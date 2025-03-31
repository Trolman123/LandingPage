const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
});
ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});
ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 5000,
});
ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 5500,
});
ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
});

const quotes = [
    "Tu bienestar es lo más importante",
    "Un paso hacia una mente sana",
    "Encuentra tu equilibrio interior",
    "Cada día es una nueva oportunidad"
];

let currentQuote = 0;
const quoteElement = document.querySelector('.inspiring-quotes');

// Función para mostrar la siguiente frase con efecto de fade
function showNextQuote() {
    // Aplica fade-out
    quoteElement.style.opacity = 0;

    // Después de 1s (duración de la transición), cambia el texto y aplica fade-in
    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuote];
        quoteElement.style.opacity = 1;
        currentQuote = (currentQuote + 1) % quotes.length;
    }, 1000);
}

// Espera 3 segundos después de cargar la página para mostrar la primera frase
window.addEventListener('load', () => {
    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuote];
        quoteElement.style.opacity = 1;
        currentQuote = (currentQuote + 1) % quotes.length;
    }, 6000); // 3000 milisegundos = 3 segundos
});

// Luego, continúa cambiando la frase cada 4 segundos
setInterval(showNextQuote, 4000);