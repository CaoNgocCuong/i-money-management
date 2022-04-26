import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJVzbP_2P6QW6jHBnQwfu3McR5CqTZK9Y",
  authDomain: "i-money-6c340.firebaseapp.com",
  projectId: "i-money-6c340",
  storageBucket: "i-money-6c340.appspot.com",
  messagingSenderId: "526095001509",
  appId: "1:526095001509:web:c744079cbe5d2a3bd9aa4c",
  measurementId: "G-DL3ZP3J75F",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp };
