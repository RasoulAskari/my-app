// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTMCtkSD-G6czBl12pExtHJ62uue459_M",
  authDomain: "my-next-app-405c7.firebaseapp.com",
  projectId: "my-next-app-405c7",
  storageBucket: "my-next-app-405c7.appspot.com",
  messagingSenderId: "278654166863",
  appId: "1:278654166863:web:e7b129ffe8e559aee7073a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
