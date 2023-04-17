import userSlice from "./userSlice";

export const { setRegistrationProperties, setUser } = userSlice.actions;
export * from "./userSlice.effects";
export * from "./userSlice.selectors";
export * from "./userSlice.types";

export default userSlice.reducer;
