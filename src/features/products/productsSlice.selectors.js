import { createSelector } from "reselect";

export const selectProductsData = ({ products: { data } }) => data;
export const selectProductsAsyncState = ({ products: { async } }) => async;

const selectMapByCategoryId = createSelector(
    [ selectProductsData ],
    (data) => Object.keys(data).reduce((map, productId) => {
        const product = data[productId];
        const { categoryId } = product;
        if (!map[categoryId]) map[categoryId] = [];
        map[categoryId].push(product);
        return map;
    }, {}));

export const selectProductById = ({ products: { data } }, id) => data[id];
export const selectProductsByCategory = (state, categoryId) => selectMapByCategoryId(state)[categoryId];

