document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  var url = 'pabloriosform.infinitefreeapp.com';
  
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: name,
          email: email,
          message: message
      })
  })
  .then(response => response.text())
  .then(result => {
      alert(result);
  })
  .catch(error => {
      alert('Hubo un problema al enviar el mensaje: ' + error.message);
  });
});
