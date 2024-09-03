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
