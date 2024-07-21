function sendMail(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

  // Check for empty fields
  if (email === "" || name === "" || message === "") {
    alert("Isi formulir terlebih dahulu (Please fill out the form first).");
    return; // Exit the function if any field is empty
  }
    var params = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_8diduxg";
    const templateID = "template_614oq9k";
    
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("email").value = "";
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Pesanmu berhasil terkirim!");
        })
        .catch((err) => console.log(err));
    }
    
