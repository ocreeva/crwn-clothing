import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./registrationSlice.reducers";

const initialState = {
    userProperties: {},
};

export default createSlice({
    name: "registration",
    initialState,
    reducers,
});
