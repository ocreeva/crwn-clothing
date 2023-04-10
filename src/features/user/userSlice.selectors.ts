import type { RootState } from "App/store";
import type { IUserAuth, IUserData } from "./userSlice.types";

export const selectUserAuth: (state: RootState) => IUserAuth | undefined =
    ({ user: { auth } }) => auth;

export const selectUserData: (state: RootState) => IUserData | undefined =
    ({ user: { data } }) => data;

export const selectUserIsSignedIn: (state: RootState) => boolean =
    ({ user: { auth } }) => Boolean(auth);
