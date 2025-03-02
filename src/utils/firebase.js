// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjICEqvq9Ym02DegA_oLFGyuY44C1HON0",
  authDomain: "netflixgpt-a4a48.firebaseapp.com",
  projectId: "netflixgpt-a4a48",
  storageBucket: "netflixgpt-a4a48.firebasestorage.app",
  messagingSenderId: "589389664263",
  appId: "1:589389664263:web:69a813da29844decdf1aa2",
  measurementId: "G-YJQYJZR9F0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
