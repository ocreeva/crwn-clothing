import { createSelector } from "reselect";
import { AsyncStatus } from "../async";

import type { RootState } from "App/store";
import type { IAsyncState } from "../async";
import type { IProduct } from "./productsSlice.types";

export const selectProductsData: (state: RootState) => Record<string, IProduct> =
    ({ products: { data } }) => data;

export const selectProductsAsyncState: (state: RootState) => IAsyncState =
    ({ products: { async } }) => async;

export const selectProductsAreLoaded: (state: RootState) => boolean =
    ({ products: { async: { status } } }) => status === AsyncStatus.succeeded;

export const selectProductById: (state: RootState, id: string) => IProduct =
    ({ products: { data } }, id) => data[id];

const selectMapByCategoryId: (state: RootState) => Record<string, IProduct[]> = createSelector(
    [ selectProductsData ],
    (data) => Object.values(data).reduce<Record<string, IProduct[]>>((map, product) => {
        const { categoryId } = product;
        if (!map[categoryId]) map[categoryId] = [];
        map[categoryId].push(product);
        return map;
    }, {})
);
export const selectProductsByCategory: (state: RootState, categoryId: string) => IProduct[] =
    (state, categoryId) => selectMapByCategoryId(state)[categoryId];
