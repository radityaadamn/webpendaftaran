// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

const signUp = document.getElementById('register')
register.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        showMessage('Account Created Succesfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode=='auth/email-already-in-use') {
            showMessage('Email Address Already Exists!', 'signUpMessage');
        }
        else {
            showMessage('unable to create user', 'signUpMessage');
        }
    })
})

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='mainpage.html';
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode==='auth/invalid-credential') {
            showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
            showMessage('Account does not Exist', 'signInMessage');
        }
        
    })
    
    

})