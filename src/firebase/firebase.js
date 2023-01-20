import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDN5-cWQ2IjGp5qjXk8ShB6bewh3e7lqMk",
    authDomain: "wrthxrotala.firebaseapp.com",
    projectId: "wrthxrotala",
    storageBucket: "wrthxrotala.appspot.com",
    messagingSenderId: "457894262362",
    appId: "1:457894262362:web:698eacdac9017d760f0a63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)