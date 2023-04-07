import { getDocs, query } from "firebase/firestore";
import db from "./firestore.db";

import type { IProduct } from "@/features/products";

export const readProductsData = async (): Promise<Record<string, IProduct>> => {
    const querySnapshot = await getDocs(query(db.products));
    return querySnapshot.docs.reduce<Record<string, IProduct>>((map, doc) => {
        map[doc.id] = doc.data();
        return map;
    }, {});
}
