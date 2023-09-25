// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvN-YqZNB-OQhCLPboSbEjxfRqLWh51s",
  authDomain: "buybusy-redux-c892c.firebaseapp.com",
  projectId: "buybusy-redux-c892c",
  storageBucket: "buybusy-redux-c892c.appspot.com",
  messagingSenderId: "224968348618",
  appId: "1:224968348618:web:ef464e531e03b3d4ebb533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);