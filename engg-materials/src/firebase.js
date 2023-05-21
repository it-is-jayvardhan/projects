// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzyYDAvXbzxhHEED7wOGwbRtksni4pfVY",
  authDomain: "engineering-modules.firebaseapp.com",
  projectId: "engineering-modules",
  storageBucket: "engineering-modules.appspot.com",
  messagingSenderId: "897802742214",
  appId: "1:897802742214:web:99d2fd34c80ac6944f6ac7",
  measurementId: "G-CVEHPG5Y8Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
