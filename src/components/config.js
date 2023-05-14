// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_oHoaRePXGjf-Gdvbc25hib63O_-512M",
  authDomain: "my-app-ad3ae.firebaseapp.com",
  projectId: "my-app-ad3ae",
  storageBucket: "my-app-ad3ae.appspot.com",
  messagingSenderId: "213473220493",
  appId: "1:213473220493:web:658e62a25f6096094d0fc4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
