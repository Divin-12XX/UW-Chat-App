// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoSH1awlWA0snVKARhDqzI--StAR1SCKc",
  authDomain: "chat-app-bde73.firebaseapp.com",
  projectId: "chat-app-bde73",
  storageBucket: "chat-app-bde73.appspot.com",
  messagingSenderId: "202966766886",
  appId: "1:202966766886:web:cf7fdc866b240ccd2a5de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)