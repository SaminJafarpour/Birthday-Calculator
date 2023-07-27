
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
  import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAh1Bzi3vw3mqrz09Zz_pVZ42FLJUfw15A",
    authDomain: "birthdayapp-268b6.firebaseapp.com",
    projectId: "birthdayapp-268b6",
    storageBucket: "birthdayapp-268b6.appspot.com",
    messagingSenderId: "1087719180039",
    appId: "1:1087719180039:web:5121bc64b77f192a5a27a2",
    measurementId: "G-00LS41NP6F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getDatabase(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, ref, set, child, get, remove}