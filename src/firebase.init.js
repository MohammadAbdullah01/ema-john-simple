// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAuth } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKJbEog13lCeHo9YO0uYduq_Cc-pL7gBg",
    authDomain: "ema-john-simple-7b292.firebaseapp.com",
    projectId: "ema-john-simple-7b292",
    storageBucket: "ema-john-simple-7b292.appspot.com",
    messagingSenderId: "150623407175",
    appId: "1:150623407175:web:398d7fb0fe9de2a8fd3562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;