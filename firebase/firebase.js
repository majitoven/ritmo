// /firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDy912nc1z4bs5znMJcrvKqr7FbE5Ttpa8",
    authDomain: "ritmo-backoffice.firebaseapp.com",
    projectId: "ritmo-backoffice",
    storageBucket: "ritmo-backoffice.firebasestorage.app",
    messagingSenderId: "467671538169",
    appId: "1:467671538169:web:b7ecc49d5f9a6141814528",
    measurementId: "G-TQ65X5Z9DP"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
