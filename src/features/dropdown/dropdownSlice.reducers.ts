import type { IDropdownState } from "./dropdownSlice.types";

export const toggleCartDropdown: (state: IDropdownState) => void =
    (state) => { state.cartDropdownIsOpen = !state.cartDropdownIsOpen; };
