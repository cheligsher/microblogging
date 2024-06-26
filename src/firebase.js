import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwatkApOXahjmpxjDkqvPHO0Ifa3lyvW0",
  authDomain: "cheli-micro-blogging-itc.firebaseapp.com",
  projectId: "cheli-micro-blogging-itc",
  storageBucket: "cheli-micro-blogging-itc.appspot.com",
  messagingSenderId: "479687652155",
  appId: "1:479687652155:web:5e7df22acdb1b3c2c9bd1e",
  storageBucket: "gs://cheli-micro-blogging-itc.appspot.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const tweetsCol = collection(db, "tweets");
const auth = getAuth(app);
const storage = getStorage(app);

export { app, tweetsCol, auth, db, storage };
