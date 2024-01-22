// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");

//input fields
const signUp = document.getElementById("signup");
signUp.addEventListener("click", function(event) {
  event.preventDefault();

 // const confirm = document.getElementById("confirm").value;

 // if (email === "" || username === "" || password === "" || confirm === "") {
  //  alert("Please fill in all the fields.");
   // return false;
  //} else if (password !== confirm) {
   // alert("Password and confirmation don't match.");
   // return false;
  //} else {
    createUserWithEmailAndPassword(auth, email.value, password.value, username.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Account created")
        window.location.href = "/index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      //  const errorAlert = document.getElementById("error");
     //   errorAlert.innerHTML = errorMessage;
      });
  }
//}
);
