import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./userSlice.reducers";

const initialState = {
    auth: null,
    data: null,
};

export default createSlice({
    name: "user",
    initialState,
    reducers,
});
