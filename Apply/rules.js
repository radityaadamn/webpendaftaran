document.getElementById("studentForm").addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get all form inputs
  const formInputs = document.querySelectorAll("#studentForm input, #studentForm select");
  let allFilled = true;

  // Loop through inputs and check if all are filled
  formInputs.forEach(input => {
      if (!input.value.trim()) {
          allFilled = false;
          input.style.border = "2px solid red"; // Highlight empty field
      } else {
          input.style.border = ""; // Reset border if filled
      }
  });

  // If all inputs are filled, proceed to form submission
  if (allFilled) {
      alert("Semua input telah terisi. Formulir siap dikirim!");
      // Call your uploadData function or submit the form here
      uploadData(event);
  } else {
      alert("Harap isi semua input yang diperlukan sebelum mengirim!");
  }
});
