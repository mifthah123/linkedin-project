import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrKXMf-xkOl7Jk9vEY7fKzlODYlCOv194",
  authDomain: "linked-in-project-398af.firebaseapp.com",
  projectId: "linked-in-project-398af",
  storageBucket: "linked-in-project-398af.appspot.com",
  messagingSenderId: "955931269502",
  appId: "1:955931269502:web:ae6d18577d025d1607bb2f",
  measurementId: "G-15RNMPPJ1M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
