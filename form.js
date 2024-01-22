import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
const db = getDatabase(app);

document.getElementById("form-sub").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const title = getElementVal('title');
    var issue = getElementVal('issue');
    var type = getElementVal('type');

    saveMessages(title, issue, type);

     //   enable alert
     document.querySelector(".alert").style.display = "block";
  
     //   remove the alert
     setTimeout(() => {
       document.querySelector(".alert").style.display = "none";
     }, 3000);

    // Reset the form
    document.getElementById("form-sub").reset();
}

const saveMessages = (title, issue, type) => {
    const formSubDB = ref(db, 'TrialBot');
    const newFormSub = push(formSubDB);

    set(newFormSub, {
        title: title,
        issue: issue,
        type: type,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};


     