import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHQ8sb0bMWTh4VU86glsCAbdqBcoTi93E",
  authDomain: "g-mail-clone-769ea.firebaseapp.com",
  projectId: "g-mail-clone-769ea",
  storageBucket: "g-mail-clone-769ea.appspot.com",
  messagingSenderId: "518600266715",
  appId: "1:518600266715:web:b696715a1d4dc3f5614dfe",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
