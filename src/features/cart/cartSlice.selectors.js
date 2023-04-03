import { createSelector } from "reselect";
import { selectProductsAsyncState, selectProductsData } from "../products";
import asyncStatus from "../../constants/asyncStatus";

export const selectCartItems = ({ cart }) => cart.items;

export const selectCartCount = createSelector(
    [ selectCartItems ],
    (items) => Object.keys(items).reduce((count, productId) => count + items[productId].quantity, 0)
);

export const selectCartTotal = createSelector(
    [ selectCartItems, selectProductsData, selectProductsAsyncState ],
    (items, products, asyncState) => {
        if (asyncState.status !== asyncStatus.succeeded) return 0;
        return Object.keys(items).reduce(
            (total, productId) => total + items[productId].quantity * products[productId].price,
            0);
    }
);
