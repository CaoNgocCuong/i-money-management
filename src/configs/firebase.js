import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZqXPks8dVXyNYHFcX1KB1Egb2inZzEEI",
  authDomain: "i-money-3c818.firebaseapp.com",
  projectId: "i-money-3c818",
  storageBucket: "i-money-3c818.appspot.com",
  messagingSenderId: "447461888555",
  appId: "1:447461888555:web:6d5026048ba38c23bad06e",
  measurementId: "G-ZPL3QYK800",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, projectStorage, timestamp };
