import { createSlice } from "@reduxjs/toolkit";

import asyncStatus from "../../constants/asyncStatus";
import extraReducers from "./productsSlice.thunks";

const initialState = {
    data: {},
    async: {
        status: asyncStatus.idle,
        error: null,
        requestId: null,
    },
};

export default createSlice({
    name: "products",
    initialState,
    extraReducers,
});
