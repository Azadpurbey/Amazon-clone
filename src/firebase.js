import React from 'react'
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbXRcPhAOOzVZZ1GGm7DZ_YkI8GSpdQwQ",
    authDomain: "challenge-6334c.firebaseapp.com",
    projectId: "challenge-6334c",
    storageBucket: "challenge-6334c.appspot.com",
    messagingSenderId: "958584459733",
    appId: "1:958584459733:web:8ecce588dc36d2ba252d5c",
    measurementId: "G-4FXRQ2GK3S"
};


const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}; 
