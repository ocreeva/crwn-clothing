import dropdownSlice from "./dropdownSlice";

export const { toggleCartDropdown } = dropdownSlice.actions;
export * from "./dropdownSlice.selectors";

export default dropdownSlice.reducer;
