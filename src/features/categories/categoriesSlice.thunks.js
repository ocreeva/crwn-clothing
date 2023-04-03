import { createAsyncThunk } from "@reduxjs/toolkit";

import asyncStatus from "../../constants/asyncStatus";
import { readCategoriesData } from "../../services/storage";

export const readCategoriesDataAsync = createAsyncThunk(
    "categories/readCategoriesDataAsync",
    async (_, { getState, requestId }) => {
        const { categories } = getState();
        if (categories.async.requestId !== requestId) return;
        return await readCategoriesData();
    });

const extraReducers = (builder) => { builder
    .addCase(readCategoriesDataAsync.pending, (state, { meta: { requestId } }) => {
        if (state.async.status !== asyncStatus.idle) return;
        state.async.status = asyncStatus.executing;
        state.async.requestId = requestId;
    })
    .addCase(readCategoriesDataAsync.fulfilled, (state, { payload, meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        state.async.status = asyncStatus.succeeded;
        state.data = payload;
    })
    .addCase(readCategoriesDataAsync.rejected, (state, { error, meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        state.async.status = asyncStatus.failed;
        state.async.error = error;
    })
};

export default extraReducers;
