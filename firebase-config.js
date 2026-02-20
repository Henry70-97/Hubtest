// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendEmailVerification,
    reload,
    fetchSignInMethodsForEmail
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    serverTimestamp,
    limit,
    arrayUnion,
    arrayRemove
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChk2JA68-I5s1D0S10r9WK71LgTNi4hRQ",
    authDomain: "nextgen-5fb6f.firebaseapp.com",
    projectId: "nextgen-5fb6f",
    storageBucket: "nextgen-5fb6f.firebasestorage.app",
    messagingSenderId: "100132076455",
    appId: "1:100132076455:web:c5aea1f6e1a5ebbea99482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Export all necessary functions and variables
export {
    app,
    auth,
    db,
    googleProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendEmailVerification,
    reload,
    fetchSignInMethodsForEmail,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    serverTimestamp,
    limit,
    arrayUnion,
    arrayRemove
};

