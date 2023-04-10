export interface IRegistrationProperties {
    displayName?: string;
}

export interface IUserAuth {
    uid: string;
}

export interface IUserData {
    id: string;
    createdAtISO: string;
    displayName: string | null;
    email: string | null;
}

export interface IUserState {
    auth?: IUserAuth;
    data?: IUserData;
}
