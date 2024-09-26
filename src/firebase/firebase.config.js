// Import functions you need from the SDKs need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// initialize provider //


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzJfvwGSA6Fawc8EYmG9avj-N3jqat9o",
  authDomain: "buckets-b168f.firebaseapp.com",
  projectId: "buckets-b168f",
  storageBucket: "buckets-b168f.appspot.com",
  messagingSenderId: "414479363821",
  appId: "1:414479363821:web:56e1861418d6f9b717e6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);