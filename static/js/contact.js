document.getElementById("contact-form").onsubmit = (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

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
    })
    .catch((error) => {
      alert("Hubo un problema al enviar el mensaje: " + error.message);
    });
};
