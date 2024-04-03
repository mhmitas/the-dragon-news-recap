
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjK3y0G26bF4vxZi_NUnWbpGaFu8f1jhI",
    authDomain: "the-dragon-news-with-firebase.firebaseapp.com",
    projectId: "the-dragon-news-with-firebase",
    storageBucket: "the-dragon-news-with-firebase.appspot.com",
    messagingSenderId: "707417478062",
    appId: "1:707417478062:web:5c0dd0983ad3f6c6edee3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)