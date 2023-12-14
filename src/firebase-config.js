// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdDHgpK00I9nBlmTEo3GJ6Nz0v_r6Flq8",
  authDomain: "blogproject-c34f7.firebaseapp.com",
  projectId: "blogproject-c34f7",
  storageBucket: "blogproject-c34f7.appspot.com",
  messagingSenderId: "216041846021",
  appId: "1:216041846021:web:8a7245d0996f41fae7736c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
