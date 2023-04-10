import { Firestore, QueryDocumentSnapshot, collection, getFirestore } from "firebase/firestore";
import "../firebase";

import type { IUser } from "features/user";
import type { ICategory } from "features/categories";
import type { IProduct } from "features/products";

const firestore: Firestore = getFirestore();

interface IHasId { id: string }

const converter = <T extends IHasId>() => ({
    toFirestore: (data: T) => {
        const { id, ..._ } = data;
        return _;
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot) => ({
        id: snapshot.id,
        ...snapshot.data()
    } as T),
});

const convertedCollection = <T extends IHasId>(path: string, ...pathSegments: string[]) => collection(firestore, path, ...pathSegments).withConverter(converter<T>());

const db = {
    categories: convertedCollection<ICategory>("categories"),
    products: convertedCollection<IProduct>("products"),
    users: convertedCollection<IUser>("users"),
};

export default db;
