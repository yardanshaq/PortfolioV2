// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKFBja457RSIsO8kMjwDI-ZNTh7SGwGxY",
  authDomain: "yardansh.xyz",
  projectId: "portov2-68e10",
  storageBucket: "portov2-68e10.firebasestorage.app",
  messagingSenderId: "346219678621",
  appId: "1:346219678621:web:df566bad6a93be4dc2fd74"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
