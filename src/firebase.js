// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHK1tUDxKyg7tNjakrhsZhKwi1ipjisyk",
  authDomain: "react-chat-18111.firebaseapp.com",
  projectId: "react-chat-18111",
  storageBucket: "react-chat-18111.appspot.com",
  messagingSenderId: "1062365113808",
  appId: "1:1062365113808:web:d4cb2cacfd6674eef1ddd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)