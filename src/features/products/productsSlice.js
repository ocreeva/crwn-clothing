import { createSlice } from "@reduxjs/toolkit";

import { AsyncStatus } from "../async";
import extraReducers from "./productsSlice.thunks";

const initialState = {
    data: {},
    async: {
        status: AsyncStatus.idle,
        error: null,
        requestId: null,
    },
};

export default createSlice({
    name: "products",
    initialState,
    extraReducers,
});
