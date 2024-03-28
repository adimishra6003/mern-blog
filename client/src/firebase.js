// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "superai55-16a3c.firebaseapp.com",
  databaseURL: "https://superai55-16a3c.firebaseio.com",
  projectId: "superai55-16a3c",
  storageBucket: "superai55-16a3c.appspot.com",
  messagingSenderId: "24992543318",
  appId: "1:24992543318:web:07b30b8f41a6bd304401f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 