import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZgpVNdBRbxbVZP3_gDFbWEBgvVq591Bg",
  authDomain: "fyp-e-swap.firebaseapp.com",
  projectId: "fyp-e-swap",
  storageBucket: "fyp-e-swap.appspot.com",
  messagingSenderId: "466168575185",
  appId: "1:466168575185:web:9a6e192ec7779d99e281f0",
  measurementId: "G-XX60D2WE0H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
