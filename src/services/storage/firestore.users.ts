import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "./firestore.db";

import type { IRegistrationProperties, IUserData } from "features/user";

export const createOrReadUserData = async (user: User, registrationProperties: IRegistrationProperties): Promise<IUserData | undefined> => {
    const userDocRef = doc(db.users, user.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
        return userDocSnapshot.data();
    }

    const { displayName, email } = user;
    const createdAt = new Date();
    const createdAtISO = createdAt.toISOString();
    const userData = { id: user.uid, createdAtISO, displayName, email, ...registrationProperties };
    try {
        await setDoc(userDocRef, userData);
        return userData;
    } catch (error) {
        console.error("Error creating the user document:", error);
    }
};
