import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_xZyIy7R2BHhVE9-voAKcF2_Dymy-Rmk",
  authDomain: "fb-messenger-clone-6b6f2.firebaseapp.com",
  projectId: "fb-messenger-clone-6b6f2",
  storageBucket: "fb-messenger-clone-6b6f2.appspot.com",
  messagingSenderId: "816858676163",
  appId: "1:816858676163:web:3a171a94a89f53049fdb76",
  measurementId: "G-FQYR1YSCNW",
});

const db = firebaseApp.firestore();

export default db;
