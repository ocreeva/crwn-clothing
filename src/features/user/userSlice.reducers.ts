import type { PayloadAction } from "@reduxjs/toolkit";
import type { IRegistrationProperties, IUserAuth, IUserData, IUserState } from "./userSlice.types";

interface ISetUserPayload {
    auth: IUserAuth | undefined;
    data: IUserData | undefined;
}

export const setRegistrationProperties: (state: IUserState, action: PayloadAction<IRegistrationProperties>) => void =
    (state, { payload }) => { state.registrationProperties = payload; };

export const setUser: (state: IUserState, action: PayloadAction<ISetUserPayload>) => void =
    (state, { payload: { auth, data } }) => {
        state.auth = auth;
        state.data = data;
    };
