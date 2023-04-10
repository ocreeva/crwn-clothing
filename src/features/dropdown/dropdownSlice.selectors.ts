import type { RootState } from "App/store";

export const selectCartDropdownIsOpen: (state: RootState) => boolean =
    ({ dropdown: { cartDropdownIsOpen } }) => cartDropdownIsOpen;
