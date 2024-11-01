// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRPOfdYdC6Lerq-q_0cRQ0BSXvGhzcXwg",
    authDomain: "webpendaftaran-3abf6.firebaseapp.com",
    databaseURL: "https://webpendaftaran-3abf6-default-rtdb.firebaseio.com",
    projectId: "webpendaftaran-3abf6",
    storageBucket: "webpendaftaran-3abf6.appspot.com",
    messagingSenderId: "266514772300",
    appId: "1:266514772300:web:e5f9cff7ac213f001a9fe9",
    measurementId: "G-S1T2WDLEQC"
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// function for showing message
function showMessage(message, elementId) {
    const messageDiv = document.getElementById(elementId);
    messageDiv.style.display = 'block';
    messageDiv.textContent = message;
}

// Event listener for login button
const signInButton = document.getElementById('submitSignIn');
signInButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        showMessage('Login is successful', 'signInMessage');
        window.location.href = 'mainpage.html';
    } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
            showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
            showMessage('Error occurred: ' + error.message, 'signInMessage');
        }
    }
});
