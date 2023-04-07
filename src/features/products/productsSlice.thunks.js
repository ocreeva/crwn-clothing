import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncStatus } from "../async";
import { readProductsData } from "../../services/storage";

export const readProductsDataAsync = createAsyncThunk(
    "products/readProductsDataAsync",
    async (_, { getState, requestId }) => {
        const { products } = getState();
        if (products.async.requestId !== requestId) return;
        return await readProductsData();
    });

const extraReducers = (builder) => { builder
    .addCase(readProductsDataAsync.pending, (state, { meta: { requestId } }) => {
        if (state.async.status !== AsyncStatus.idle) return;
        state.async.status = AsyncStatus.executing;
        state.async.requestId = requestId;
    })
    .addCase(readProductsDataAsync.fulfilled, (state, { payload, meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        state.async.status = AsyncStatus.succeeded;
        state.data = payload;
    })
    .addCase(readProductsDataAsync.rejected, (state, { error, meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        state.async.status = AsyncStatus.failed;
        state.async.error = error;
    })
};

export default extraReducers;
