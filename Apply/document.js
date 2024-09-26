// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// Firebase configuration
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

// Initialize Firebase Storage
const storage = getStorage(app);

// Fungsi untuk menangani unggahan file PDF
function getFile(event) {
  const file = event.target.files[0]; // Mendapatkan file yang diunggah dari input

  if (file && file.type === 'application/pdf') { // Pastikan file adalah PDF
    const storageRef = ref(storage, `documents/${file.name}`); // Lokasi penyimpanan di Firebase

    // Unggah file ke Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor status unggahan
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Proses sedang berlangsung
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Tangani kesalahan unggahan
        console.error('Error uploading file:', error);
      },
      () => {
        // Unggahan berhasil, dapatkan URL file yang diunggah
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // Anda dapat menyimpan URL download ini ke Realtime Database jika diperlukan
        });
      }
    );
  } else {
    console.error('Please upload a valid PDF file.');
  }
}

// Event listener untuk input file (sudah terhubung di HTML)
document.getElementById('file').addEventListener('change', getFile);
