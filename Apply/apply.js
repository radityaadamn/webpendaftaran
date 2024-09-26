// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  set(ref(db, "student/" + document.getElementById("name").value), {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    born_date: document.getElementById("born_date").value,
    address: document.getElementById("address").value,
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
  });
  alert("Data anda berhasil terkirim !");
});