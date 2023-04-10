import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./cartSlice.reducers";

import type { ICartState } from "./cartSlice.types";

const initialState: ICartState = {
    items: {},
};

export default createSlice({
    name: "cart",
    initialState,
    reducers,
});
