import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword as signInWithEmailAndPasswordImpl,
    signInWithPopup,
    signOut as signOutImpl,
    GoogleAuthProvider,
} from 'firebase/auth';
import "../firebase";

import type { NextOrObserver, Unsubscribe, User, UserCredential } from "firebase/auth";

const auth = getAuth();

export const addAuthStateChangedCallback = (callback: NextOrObserver<User>): Unsubscribe => onAuthStateChanged(auth, callback);

export const registerUserWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAndPassword = (email: string, password: string): Promise<UserCredential> => signInWithEmailAndPasswordImpl(auth, email, password);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, googleAuthProvider);

export const signOut = (): Promise<void> => signOutImpl(auth);
