// Import the functions you need from the SDKs you need

import firebase from 'firebase/app';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJopjNXnGcf1XrkGM6e4BtCtqoz0NKAvU",
    authDomain: "skyispurple-b5ea1.firebaseapp.com",
    projectId: "skyispurple-b5ea1",
    storageBucket: "skyispurple-b5ea1.appspot.com",
    messagingSenderId: "759691062596",
    appId: "1:759691062596:web:dd299d09c4a943633bfb11",
    measurementId: "G-8Y8Y33R6FR"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db =  firebase.firestore();

export {app, db}