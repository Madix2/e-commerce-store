// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuwUL9w7M5r6nkWD4W6kkZ_GeSofjaenk",
  authDomain: "adic-technologies.firebaseapp.com",
  projectId: "adic-technologies",
  storageBucket: "adic-technologies.appspot.com",
  messagingSenderId: "325939332596",
  appId: "1:325939332596:web:0438cda0c847b95a28a5a1",
  measurementId: "G-VB15ZE6JP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);