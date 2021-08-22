import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxzz61RoNE8cZAlH6X7lk1lZdfMcv0PeU",
  authDomain: "docs-d704a.firebaseapp.com",
  projectId: "docs-d704a",
  storageBucket: "docs-d704a.appspot.com",
  messagingSenderId: "222094115192",
  appId: "1:222094115192:web:de2b2d0c5bcf1b28ac888d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
