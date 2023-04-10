import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUserAuth, IUserData, IUserState } from "./userSlice.types";

interface ISetUserPayload {
    auth: IUserAuth | undefined;
    data: IUserData | undefined;
}

export const setUser: (state: IUserState, action: PayloadAction<ISetUserPayload>) => void =
    (state, { payload: { auth, data } }) => {
        state.auth = auth;
        state.data = data;
    };
