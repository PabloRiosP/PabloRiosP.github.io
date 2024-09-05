let typingTimer;
let keepAliveTimer;
let keepAliveCounter = 0;
const inactivityLimit = 30 * 1000;
const keepAliveInterval = 290 * 1000;
const maxKeepAlives = 3;

function resetTypingTimer() {
    clearTimeout(typingTimer);
    clearTimeout(keepAliveTimer);

    if (keepAliveCounter < maxKeepAlives) {
        typingTimer = setTimeout(stopKeepAlive, inactivityLimit);
        keepAliveTimer = setTimeout(keepAlive, keepAliveInterval);
    }
}

function stopKeepAlive() {
    clearTimeout(keepAliveTimer);
    console.log("Inactividad detectada o límite de keep alive alcanzado, deteniendo conexión.");
}

function keepAlive() {
    if (keepAliveCounter < maxKeepAlives) {
        fetch("https://clean-organic-tiglon.glitch.me/ping", {
            method: "GET",
            keepalive: true
        }).then(response => {
            if (!response.ok) {
                console.log("Fallo en el keep alive");
            } else {
                keepAliveCounter++;
                console.log("Conexión mantenida, número de keep alive enviados:", keepAliveCounter);
                resetTypingTimer();
            }
        }).catch(error => {
            console.log("Error en el keep alive:", error);
        });
    } else {
        stopKeepAlive();
    }
}

// Escuchar eventos de tipeo en los campos del formulario
document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
    input.addEventListener('input', resetTypingTimer);
});

// Iniciar el primer ciclo de keep alive cuando se carga la página
resetTypingTimer();

document.getElementById("contact-form").onsubmit = (event) => {
  event.preventDefault();

  let nameField = document.getElementById("name");
  let emailField = document.getElementById("email");
  let messageField = document.getElementById("message");

  let name = nameField.value;
  let email = emailField.value;
  let message = messageField.value;

  fetch("https://clean-organic-tiglon.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => response.text())
    .then((result) => {
      alert(result);
      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
    })
    .catch((error) => {
      alert("Hubo un problema al enviar el mensaje: " + error.message);
    });
};

