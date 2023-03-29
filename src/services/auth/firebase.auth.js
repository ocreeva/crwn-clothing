import "../firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword as signInWithEmailAndPasswordImpl,
    signOut as signOutImpl,
    GoogleAuthProvider,
} from 'firebase/auth';

const auth = getAuth();

export const addAuthStateChangedCallback = (callback) => onAuthStateChanged(auth, callback);

export const registerUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAndPassword = (email, password) => signInWithEmailAndPasswordImpl(auth, email, password);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signOut = () => signOutImpl(auth);
