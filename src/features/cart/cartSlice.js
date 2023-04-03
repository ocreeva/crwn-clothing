import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./cartSlice.reducers";

const initialState = {
    items: {},
};

export default createSlice({
    name: "cart",
    initialState,
    reducers,
});
