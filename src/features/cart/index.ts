import cartSlice from "./cartSlice";

export const { addItemToCart, clearItemFromCart, removeItemFromCart } = cartSlice.actions;
export * from "./cartSlice.selectors";

export default cartSlice.reducer;
