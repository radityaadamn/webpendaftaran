function uploadData() {
    // Get all required input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var born_date = document.getElementById("born_date").value;
    var address = document.getElementById("address").value;
    var birth_place = document.getElementById("birth_place").value;
    var gender = document.getElementById("gender").value;
    var anak_ke = document.getElementById("anak-ke").value;
    var siblings = document.getElementById("siblings").value;
    var school = document.getElementById("school").value;
    var nisn = document.getElementById("nisn").value;
    var score = document.getElementById("score").value;
  
    // Check if any required field is empty
    if (name === "" || email === "" || phone === "" || born_date === "" || address === "" || birth_place === "" || gender === "" || anak_ke === "" || siblings === "" || school === "" || nisn === "" || score === "") {
        alert("Lengkapi formulir terlebih dahulu (Please fill out the form first).");
        return; // Exit the function if any field is empty
      }
      return false;
    }