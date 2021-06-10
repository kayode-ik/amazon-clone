import firebase from "firebase";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIctAc3bzwkUwYsIMpmyloSIYMzcfoX5w",
  authDomain: "clone-ed42f.firebaseapp.com",
  projectId: "clone-ed42f",
  storageBucket: "clone-ed42f.appspot.com",
  messagingSenderId: "693359871680",
  appId: "1:693359871680:web:f1e0a69c5f76e220b34f25",
  measurementId: "G-CMWRWMWEJT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth } ;