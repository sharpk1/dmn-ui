// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dark-matter-network.firebaseapp.com",
  databaseURL: "https://dark-matter-network-default-rtdb.firebaseio.com",
  projectId: "dark-matter-network",
  storageBucket: "dark-matter-network.appspot.com",
  messagingSenderId: "151703506798",
  appId: "1:151703506798:web:41f13eff825c9253cafb7f",
  measurementId: "G-KJ1Y7PY6DS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
