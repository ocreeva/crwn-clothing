import { createSlice } from "@reduxjs/toolkit";

import { AsyncStatus, addAsyncThunkCases } from "../async";
import { readProductsDataAsync } from "./productsSlice.thunks";

import type { IProductsState } from "./productsSlice.types";

const initialState: IProductsState = {
    data: {},
    async: { status: AsyncStatus.idle },
};

export default createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncThunkCases(builder, readProductsDataAsync);
    },
});
