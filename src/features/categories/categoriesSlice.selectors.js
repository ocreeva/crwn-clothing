import { createSelector } from "reselect";

export const selectCategoriesData = ({ categories: { data } }) => data;
export const selectCategoriesAsyncState = ({ categories: { async } }) => async;

export const selectCategoryById = (state, id) => selectCategoriesData(state)[id];
export const selectCategoryIds = createSelector(
    [ selectCategoriesData ],
    (data) => Object.keys(data)
);
