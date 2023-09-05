// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API,
  authDomain: "project-80cd9.firebaseapp.com",
  projectId: "project-80cd9",
  storageBucket: "project-80cd9.appspot.com",
  messagingSenderId: process.env.SENDER,
  appId: process.env.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)