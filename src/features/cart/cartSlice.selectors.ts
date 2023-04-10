import { createSelector } from "reselect";
import { selectProductsAreLoaded, selectProductsData } from "../products";

import { RootState } from "App/store";
import { ICartItem } from "./cartSlice.types";

export const selectCartItems: (state: RootState) => Record<string, ICartItem> =
    ({ cart: { items } }) => items;

export const selectCartCount: (state: RootState) => number = createSelector(
    [ selectCartItems ],
    (items) => Object.values(items).reduce((count, { quantity }) => count + quantity, 0)
);

export const selectCartTotal: (state: RootState) => number = createSelector(
    [ selectCartItems, selectProductsData, selectProductsAreLoaded ],
    (items, products, productsAreLoaded) => {
        if (!productsAreLoaded) return 0;
        return Object.values(items).reduce(
            (total, { productId, quantity }) => total + quantity * products[productId].price,
            0);
    }
);
