import { createContext, useEffect, useReducer } from "react";

import { addAuthStateChangedCallback, createOrReadUserData } from "../utility/firebase/firebase.utility";

export const UserContext = createContext({
    userAuth: null,
    userData: null,
    setAdditionalProperties: () => null,
});

const UserAction = Object.freeze({
    SetAdditionalProperties: Symbol("SetAdditionalProperties"),
    SetUser: Symbol("SetUser"),
});

const userReducerInitial = {
    additionalProperties: null,
    userAuth: null,
    userData: null,
};

const userReducer = (state, { type, payload }) => {
    switch (type) {
        case UserAction.SetAdditionalProperties:
            return { ...state, additionalProperties: payload };

        case UserAction.SetUser:
            return { ...state, userAuth: payload.userAuth, userData: payload.userData };

        default:
            throw new Error(`Unhandled type (${type}) in UserReducer.`);
    }
};

const handleAuthStateChange = async (userAuth, additionalProperties, userReducerDispatch) => {
    const userData = userAuth ? await createOrReadUserData(userAuth, additionalProperties) : null;
    userReducerDispatch({ type: UserAction.SetUser, payload: { userAuth, userData }});
}

export const UserProvider = ({ children }) => {
    const [ { additionalProperties, userAuth, userData }, userDispatch ] = useReducer(userReducer, userReducerInitial);
    const setAdditionalProperties = (value) => userDispatch({ type: UserAction.SetAdditionalProperties, payload: value });

    useEffect(
        () => addAuthStateChangedCallback(async (user) => handleAuthStateChange(user, additionalProperties, userDispatch)),
        [ additionalProperties ]);

    return <UserContext.Provider value={{ userAuth, userData, setAdditionalProperties }}>{ children }</UserContext.Provider>;
};

export default UserContext;
