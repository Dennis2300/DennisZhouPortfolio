// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe6TwgDE6JXSANpluxOLzdTsz5CZGfyjE",
  authDomain: "gallery-database-163bc.firebaseapp.com",
  databaseURL: "https://gallery-database-163bc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gallery-database-163bc",
  storageBucket: "gallery-database-163bc.appspot.com",
  messagingSenderId: "659373071573",
  appId: "1:659373071573:web:5bf4262c3c71309ad4d65c",
  measurementId: "G-88764D3KPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);