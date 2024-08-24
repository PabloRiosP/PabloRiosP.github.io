// Para el formulario de contacto.
// Envía el contenido a un medio especificado en el sericio
// Inicializando el servicio
emailjs.init("DUR0SD1U5BvgXKl2n");

const btn = document.getElementById("submit-button");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    emailjs.sendForm("service_61926pv", "template_q3npk9q", this).then(
      () => {
        btn.value = "Enviar";
        alert("Mensaje enviado con éxito");
      },
      (error) => {
        btn.value = "Enviar";
        alert(`Hubo un error al enviar el mensaje: ${error}`);
      }
    );
  });
