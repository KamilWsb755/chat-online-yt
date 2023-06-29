// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3I_rpJ8tcqQ32VYPL_oCFPzA9QtMAgwU",
    authDomain: "teb-yt.firebaseapp.com",
    projectId: "teb-yt",
    storageBucket: "teb-yt.appspot.com",
    messagingSenderId: "484899314774",
    appId: "1:484899314774:web:3f7e0606a4d5412e912ff7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
