
function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var phoneNumber = "918920627071"; // 👉 your WhatsApp number

  var whatsappURL =
    "https://wa.me/" + phoneNumber + "?text=" +
    encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Subject: " + subject + "\n" +
      "Message: " + message
    );

  window.open(whatsappURL, "_blank");
}

