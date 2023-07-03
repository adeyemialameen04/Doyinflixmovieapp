// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const apiKey = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "doyinflix.firebaseapp.com",
  projectId: "doyinflix",
  storageBucket: "doyinflix.appspot.com",
  messagingSenderId: "665244874426",
  appId: "1:665244874426:web:715ec2ea6eda6f58297483",
  measurementId: "G-J3CGMGSPR0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
