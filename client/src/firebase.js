// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-5a52c.firebaseapp.com",
  projectId: "real-estate-app-5a52c",
  storageBucket: "real-estate-app-5a52c.appspot.com",
  messagingSenderId: "205711808570",
  appId: "1:205711808570:web:01e0655ccaf1ef7586bd03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);