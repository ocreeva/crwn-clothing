import "../firebase";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    setDoc,
    query,
    getDocs
} from 'firebase/firestore';

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
};

export const readCategoriesData = async () => {
    const collectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(query(collectionRef));
    return querySnapshot.docs.map(doc => doc.data());
};
