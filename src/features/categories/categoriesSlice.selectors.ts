import { createSelector } from "reselect";

import type { RootState } from "App/store";
import type { IAsyncState } from "../async";
import type { ICategory } from "./categoriesSlice.types";

export const selectCategoriesData: (state: RootState) => Record<string, ICategory> =
    ({ categories: { data } }) => data;

export const selectCategoriesAsyncState: (state: RootState) => IAsyncState =
    ({ categories: { async } }) => async;

export const selectCategoryById: (state: RootState, id: string) => ICategory =
    (state, id) => selectCategoriesData(state)[id];

export const selectCategoryIds: (state: RootState) => string[] = createSelector(
    [ selectCategoriesData ],
    (data) => Object.keys(data)
);
