function klik() {
    // Get all input elements in the form
    const inputs = document.querySelectorAll("form input");

    // Check if all inputs have a value (are not empty)
    let allFilled = true;
    for (const input of inputs) {
      if (input.value === "") {
        allFilled = false;
        break; // Exit the loop if an empty input is found
      }
    }

    if (allFilled) {
      alert("Data anda sudah terkirim!");
    } else {
      alert("Silahkan isi semua kolom terlebih dahulu.");
    }
  }