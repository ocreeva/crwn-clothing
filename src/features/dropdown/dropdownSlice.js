import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./dropdownSlice.reducers";

const initialState = {
    cartDropdownIsOpen: false,
};

export default createSlice({
    name: "dropdown",
    initialState,
    reducers,
});
