import userSlice from "./userSlice";

export const { setUser } = userSlice.actions;
export * from "./userSlice.effects";
export * from "./userSlice.selectors";

export default userSlice.reducer;
