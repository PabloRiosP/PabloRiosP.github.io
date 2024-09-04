/**
 * Función que simula un efecto de escritura en el título de la página.
 * @param {string} text - El texto que se mostrará dinámicamente en el título de la página.
 */
function typeTitle(text) {
    let minDelay = 50; // Tiempo mínimo en milisegundos entre cada carácter.
    let maxDelay = 200; // Tiempo máximo en milisegundos entre cada carácter.
    let title = ""; // Variable para almacenar el título actualizado.
    let index = 0; // Índice actual en el texto que se está escribiendo.

    /**
     * Función interna que agrega el siguiente carácter al título y actualiza el título de la página.
     * Continúa hasta que todo el texto haya sido procesado.
     */
    function typeNextChar() {
        // Añadir el siguiente carácter del texto al título.
        title += text[index];
        // Actualizar el título de la página.
        document.title = title;
        // Avanzar al siguiente carácter.
        index++;

        // Si no hemos terminado de escribir el texto
        if (index < text.length) {
            // Generar un intervalo aleatorio entre minDelay y maxDelay
            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            // Llamar a typeNextChar después del intervalo aleatorio.
            setTimeout(typeNextChar, randomDelay);
        }
    }

    // Inicializar el título como vacío para empezar el efecto de escritura.
    document.title = "";
    // Comenzar el efecto de escritura.
    typeNextChar();
}

// Configurar la función para que se ejecute cuando la ventana se haya cargado completamente.
window.onload = function() {
    // Iniciar el efecto de escritura con el título actual de la página.
    typeTitle(document.title);
};

