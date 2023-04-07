import "../firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword as signInWithEmailAndPasswordImpl,
    signOut as signOutImpl,
    GoogleAuthProvider,
    NextOrObserver,
    User,
} from 'firebase/auth';

const auth = getAuth();

export const addAuthStateChangedCallback = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const registerUserWithEmailAndPassword = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAndPassword = (email: string, password: string) => signInWithEmailAndPasswordImpl(auth, email, password);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signOut = () => signOutImpl(auth);
