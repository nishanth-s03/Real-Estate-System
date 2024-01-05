// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dddd4.firebaseapp.com",
  projectId: "real-estate-dddd4",
  storageBucket: "real-estate-dddd4.appspot.com",
  messagingSenderId: "327010030817",
  appId: "1:327010030817:web:c6818fd8acd832b5ab53a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);