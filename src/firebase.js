// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWQ1U6h-QbZGUliFoWBS6G-Iz-l_J-3NI",
  authDomain: "scale-chat.firebaseapp.com",
  projectId: "scale-chat",
  storageBucket: "scale-chat.appspot.com",
  messagingSenderId: "879887637913",
  appId: "1:879887637913:web:adc970a66738407fb68708"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


