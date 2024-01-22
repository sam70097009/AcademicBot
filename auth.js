import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfQXIwk_GPu5yXkqq7nC_Y9vgJ0Qa0TKw",
    authDomain: "trialbot-380812.firebaseapp.com",
    databaseURL: "https://trialbot-380812-default-rtdb.firebaseio.com",
    projectId: "trialbot-380812",
    storageBucket: "trialbot-380812.appspot.com",
    messagingSenderId: "624181714783",
    appId: "1:624181714783:web:594207d75a1c1f4dbca0ea",
    measurementId: "G-S56186FF94"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const signIn = document.getElementById("signIn");
signIn.addEventListener("click", function(event) {
 event.preventDefault();

 const email = document.getElementById("email").value;
 var password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     window.location.href = "/dashboard.html";
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     const logError = document.getElementById("logError");
     logError.innerHTML = errorMessage;
   });
});