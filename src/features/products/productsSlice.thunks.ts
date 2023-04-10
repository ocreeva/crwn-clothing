import { createAsyncThunk } from "@reduxjs/toolkit";
import { readProductsData } from "services/storage";

import type { IProduct } from "./productsSlice.types";
import type { RootState } from "App/store";

export const readProductsDataAsync = createAsyncThunk<Record<string, IProduct> | undefined, void, { state: RootState }>(
    "products/readProductsDataAsync",
    async (_, { getState, requestId }) => {
        const { products } = getState();
        if (products.async.requestId !== requestId) return;
        return await readProductsData();
    }
);
