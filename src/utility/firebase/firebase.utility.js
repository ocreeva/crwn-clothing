import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, signInWithEmailAndPassword as signInWithEmailAndPasswordImpl } from 'firebase/auth';
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

const auth = getAuth();

export const signInWithEmailAndPassword = (email, password) => signInWithEmailAndPasswordImpl(auth, email, password);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const registerUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
