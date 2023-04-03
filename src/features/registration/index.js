import registrationSlice from "./registrationSlice";

export const { setUserRegistrationProperties } = registrationSlice.actions;
export * from "./registrationSlice.selectors";

export default registrationSlice.reducer;
