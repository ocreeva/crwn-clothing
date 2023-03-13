import { createContext, useEffect, useState } from "react";

import { addAuthStateChangedCallback, createOrReadUserData } from "../utility/firebase/firebase.utility";

export const UserContext = createContext({
    userAuth: null,
    userData: null,
    setAdditionalProperties: () => null,
});

export const UserProvider = ({ children }) => {
    const [ userAuth, setUserAuth ] = useState(null);
    const [ userData, setUserData ] = useState(null);
    const [ additionalProperties, setAdditionalProperties ] = useState({});

    useEffect(() => {
        return addAuthStateChangedCallback(async (user) => {
            setUserAuth(user);
            if (user) {
                setUserData(await createOrReadUserData(user, additionalProperties));
            }
        });
    }, [ additionalProperties ]);

    return <UserContext.Provider value={{ userAuth, userData, setAdditionalProperties }}>{ children }</UserContext.Provider>;
};

export default UserContext;
