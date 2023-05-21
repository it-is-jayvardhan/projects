// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLhqt8nunrObXlJ5MrSKzE-41LRLRQSeQ",
  authDomain: "personal-project-61eb7.firebaseapp.com",
  projectId: "personal-project-61eb7",
  storageBucket: "personal-project-61eb7.appspot.com",
  messagingSenderId: "922860742722",
  appId: "1:922860742722:web:cf502a6337df6f771c65db",
  measurementId: "G-VQ9G0ETMGY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);
