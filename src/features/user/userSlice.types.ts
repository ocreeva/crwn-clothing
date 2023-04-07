export interface IRegistrationProperties {
    displayName?: string;
}

export interface IUser {
    id: string;
    createdAt: Date;
    displayName: string | null;
    email: string | null;
}
