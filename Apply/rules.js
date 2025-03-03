function validateBirthDate(input) {
  const today = new Date("2025-06-19");
  const minDate = new Date(today);
  const maxDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 17);
  maxDate.setFullYear(today.getFullYear() - 14);

  const birthDate = new Date(input.value);
  const errorMessageElement = document.getElementById("birthDateError");

  if (!input.value || birthDate < minDate || birthDate > maxDate) {
    errorMessageElement.textContent = `Tanggal lahir harus antara ${minDate.toLocaleDateString()} dan ${maxDate.toLocaleDateString()}`;
    input.style.borderColor = "red";
    errorMessageElement.style.display = "block";
    return false;
  }

  errorMessageElement.textContent = "";
  input.style.borderColor = "";
  errorMessageElement.style.display = "none";
  return true;
}
