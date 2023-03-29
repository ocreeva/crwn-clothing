import { createSelector } from "reselect";
import { getProductsMap } from "../products/products.selector";

export const isDropdownOpen = ({ cart }) => cart.isDropdownOpen;

export const getCartItems = ({ cart }) => cart.items;

export const getCartCount = createSelector(
    [ getCartItems ],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotal = createSelector(
    [ getCartItems, getProductsMap ],
    (items, productsMap) => items.reduce(
        (total, { id, quantity }) => total + quantity * productsMap[id].price,
        0)
);
