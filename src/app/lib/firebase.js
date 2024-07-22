// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIjQ0pZlwXSfzkxg06Gi-jDgnh3SXW6fc",
  authDomain: "ecommerce-80d80.firebaseapp.com",
  projectId: "ecommerce-80d80",
  storageBucket: "ecommerce-80d80.appspot.com",
  messagingSenderId: "27915653010",
  appId: "1:27915653010:web:ba174926c1ec1638223b4b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
