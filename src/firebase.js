import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvg7XscZoHSM2ifcN66a-5GNJL4KrhuXc",
    authDomain: "chat-63bf5.firebaseapp.com",
    projectId: "chat-63bf5",
    storageBucket: "chat-63bf5.appspot.com",
    messagingSenderId: "456094507678",
    appId: "1:456094507678:web:c764cf00ddbcb65bbb518f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()