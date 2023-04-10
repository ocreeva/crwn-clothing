import { createAsyncThunk } from "@reduxjs/toolkit";
import { readCategoriesData } from "services/storage";

import type { ICategory } from "./categoriesSlice.types";
import type { RootState } from "App/store";

export const readCategoriesDataAsync = createAsyncThunk<Record<string, ICategory> | undefined, void, { state: RootState }>(
    "categories/readCategoriesDataAsync",
    async (_, { getState, requestId }) => {
        const { categories } = getState();
        if (categories.async.requestId !== requestId) return;
        return await readCategoriesData();
    }
);
