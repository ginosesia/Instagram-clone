import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5peVszc96EFW7QlJS6r73_ojdkDcDSBU",
  authDomain: "instagram-clone-45b96.firebaseapp.com",
  projectId: "instagram-clone-45b96",
  storageBucket: "instagram-clone-45b96.appspot.com",
  messagingSenderId: "405903860105",
  appId: "1:405903860105:web:dff900e5028a5419650158"
};

const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;