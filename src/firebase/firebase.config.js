
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Xa-FLgWNFEKYDTrgjzDyWAGP_fuJVVU",
  authDomain: "jobbox-7d1f3.firebaseapp.com",
  projectId: "jobbox-7d1f3",
  storageBucket: "jobbox-7d1f3.appspot.com",
  messagingSenderId: "518835470324",
  appId: "1:518835470324:web:9dadf58695ab42186683a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
