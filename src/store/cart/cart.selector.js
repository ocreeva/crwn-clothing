import { createSelector } from "reselect";
import { selectProductsData } from "../../features/products";

export const isDropdownOpen = ({ cart }) => cart.isDropdownOpen;

export const getCartItems = ({ cart }) => cart.items;

export const getCartCount = createSelector(
    [ getCartItems ],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const getCartTotal = createSelector(
    [ getCartItems, selectProductsData ],
    (items, productsData) => items.reduce(
        (total, { id, quantity }) => total + quantity * productsData[id].price,
        0)
);
