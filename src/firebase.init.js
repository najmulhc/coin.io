// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-7A9kPaIoKE2eRTN9arSP5YsA7z1LZBY",
  authDomain: "coin-io-90e0b.firebaseapp.com",
  projectId: "coin-io-90e0b",
  storageBucket: "coin-io-90e0b.appspot.com",
  messagingSenderId: "20598206083",
  appId: "1:20598206083:web:874fb5db4cf8706a4635b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)