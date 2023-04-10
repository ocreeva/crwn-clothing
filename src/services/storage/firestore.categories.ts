import { getDocs, query } from "firebase/firestore";
import db from "./firestore.db";

import type { ICategory } from "features/categories";

export const readCategoriesData = async (): Promise<Record<string, ICategory>> => {
    const querySnapshot = await getDocs(query(db.categories));
    return querySnapshot.docs.reduce<Record<string, ICategory>>((map, doc) => {
        map[doc.id] = doc.data();
        return map;
    }, {});
};
