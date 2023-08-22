// script.js
document.getElementById("interest-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const university = document.getElementById("university").value;
  
    // Simulate sending data to the server (in a real scenario, you would use AJAX or a backend)
    // For now, let's just display a confirmation message.
    const confirmationMessage = `Merci ${name} ! Votre intérêt pour ScootArabia a été enregistré. Nous vous tiendrons informé par e-mail.`;
    document.getElementById("confirmation-message").textContent = confirmationMessage;
  });
  