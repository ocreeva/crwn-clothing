import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./userSlice.reducers";

import type { IUserState } from "./userSlice.types";

const initialState: IUserState = {};

export default createSlice({
    name: "user",
    initialState,
    reducers,
});
