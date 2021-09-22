import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgFGo1grqMUOWIN4ASv0Sps4ylO3IMggE",
  authDomain: "crown-db-e7b6f.firebaseapp.com",
  projectId: "crown-db-e7b6f",
  storageBucket: "crown-db-e7b6f.appspot.com",
  messagingSenderId: "112843467353",
  appId: "1:112843467353:web:2567c08db4cda7461b5f48",
  measurementId: "G-6L01VPJHT4",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
