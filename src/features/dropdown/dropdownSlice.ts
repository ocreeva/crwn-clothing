import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./dropdownSlice.reducers";

import type { IDropdownState } from "./dropdownSlice.types";

const initialState: IDropdownState = {
    cartDropdownIsOpen: false,
};

export default createSlice({
    name: "dropdown",
    initialState,
    reducers,
});
