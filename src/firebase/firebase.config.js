// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7E5VugZ3Yq5XtM9r4MAizLaSB2iflgk",
  authDomain: "jobbox-66702.firebaseapp.com",
  projectId: "jobbox-66702",
  storageBucket: "jobbox-66702.appspot.com",
  messagingSenderId: "419066753640",
  appId: "1:419066753640:web:8549166907a3c9cdab81dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;