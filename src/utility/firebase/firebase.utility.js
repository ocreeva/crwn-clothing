import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword as signInWithEmailAndPasswordImpl, signOut as signOutImpl } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfvlvx0cJhFIUguCwUtnva3rTHLRQYiuw",
    authDomain: "moyba-clothing.firebaseapp.com",
    projectId: "moyba-clothing",
    storageBucket: "moyba-clothing.appspot.com",
    messagingSenderId: "289552744044",
    appId: "1:289552744044:web:f1c0bb46879d5bea426249"
};
  
initializeApp(firebaseConfig);

/** Auth methods **/

const auth = getAuth();

export const addAuthStateChangedCallback = (callback) => onAuthStateChanged(auth, callback);

export const registerUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAndPassword = (email, password) => signInWithEmailAndPasswordImpl(auth, email, password);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signOut = () => signOutImpl(auth);

/** Data methods **/

const db = getFirestore();
const getUserDocRef = (user) => doc(db, 'users', user.uid);
const getUserDocSnapshot = (userDocRef) => getDoc(userDocRef);

export const createOrReadUserData = async (user, additionalProperties) => {
    const userDocRef = getUserDocRef(user);
    const userDocSnapshot = await getUserDocSnapshot(userDocRef);
    if (userDocSnapshot.exists()) {
        return userDocSnapshot.data();
    }

    const { displayName, email } = user;
    const createdAt = new Date();
    const userData = { createdAt, displayName, email, ...additionalProperties };
    try {
        await setDoc(userDocRef, userData);
        return userData;
    } catch (error) {
        console.error("Error creating the user document:", error.message);
    }
}
