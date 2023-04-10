import { createSlice } from "@reduxjs/toolkit";

import { AsyncStatus, addAsyncThunkCases } from "../async";
import { readCategoriesDataAsync } from "./categoriesSlice.thunks";

import type { ICategoriesState } from "./categoriesSlice.types";

const initialState: ICategoriesState = {
    data: {},
    async: { status: AsyncStatus.idle },
};

export default createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncThunkCases(builder, readCategoriesDataAsync);
    },
});
