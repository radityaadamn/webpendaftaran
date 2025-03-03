// Tetap pertahankan konfigurasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRPOfdYdC6Lerq-q_0cRQ0BSXvGhzcXwg",
  authDomain: "webpendaftaran-3abf6.firebaseapp.com",
  databaseURL: "https://webpendaftaran-3abf6-default-rtdb.firebaseio.com",
  projectId: "webpendaftaran-3abf6",
  storageBucket: "webpendaftaran-3abf6.appspot.com",
  messagingSenderId: "266514772300",
  appId: "1:266514772300:web:e5f9cff7ac213f001a9fe9",
  measurementId: "G-S1T2WDLEQC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  const form = document.getElementById("studentForm");
  const inputs = form.querySelectorAll("input, select");
  let allFilled = true;

  // Validasi field kosong
  inputs.forEach((input) => {
    if (!input.value) {
      allFilled = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  // Validasi tanggal lahir
  const birthDateInput = document.getElementById("born_date");
  const isBirthDateValid = validateBirthDate(birthDateInput);

  if (allFilled && isBirthDateValid) {
    set(ref(db, "student/" + document.getElementById("name").value), {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      born_date: document.getElementById("born_date").value,
      address: document.getElementById("address").value,
      religion: document.getElementById("religion").value,
      rt: document.getElementById("rt").value,
      rw: document.getElementById("rw").value,
      village: document.getElementById("village").value,
      district: document.getElementById("district").value,
      city: document.getElementById("city").value,
      province: document.getElementById("province").value,
      zipcode: document.getElementById("zipcode").value,
      birth_place: document.getElementById("birth_place").value,
      gender: document.getElementById("gender").value,
      anak_ke: document.getElementById("anak-ke").value,
      siblings: document.getElementById("siblings").value,
      school: document.getElementById("school").value,
      nisn: document.getElementById("nisn").value,
      score: document.getElementById("score").value,
      father: document.getElementById("father").value,
      mother: document.getElementById("mother").value,
      fatherPhone: document.getElementById("fatherPhone").value,
      motherPhone: document.getElementById("motherPhone").value,
    })
      .then(() => {
        alert("Data berhasil dikirim!");
        form.reset();
      })
      .catch((error) => {
        alert("Terjadi kesalahan: " + error.message);
      });
  } else {
    if (!allFilled) {
      alert("Silakan isi semua field!");
    } else {
      alert("Tanggal lahir tidak sesuai ketentuan!");
    }
  }
});
