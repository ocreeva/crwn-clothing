import { createSlice } from "@reduxjs/toolkit";

import { AsyncStatus } from "../async";
import extraReducers from "./categoriesSlice.thunks";

const initialState = {
    data: {},
    async: {
        status: AsyncStatus.idle,
        error: null,
        requestId: null,
    },
};

export default createSlice({
    name: "categories",
    initialState,
    extraReducers,
});
