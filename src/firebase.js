import { getFirestore, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwatkApOXahjmpxjDkqvPHO0Ifa3lyvW0",
  authDomain: "cheli-micro-blogging-itc.firebaseapp.com",
  projectId: "cheli-micro-blogging-itc",
  storageBucket: "cheli-micro-blogging-itc.appspot.com",
  messagingSenderId: "479687652155",
  appId: "1:479687652155:web:5e7df22acdb1b3c2c9bd1e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const tweetsCol = collection(db, "tweets");
const auth = getAuth(app);

export { app, tweetsCol, auth, db };
