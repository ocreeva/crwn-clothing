import { addAuthStateChangedCallback, createOrReadUserData } from "../../utility/firebase/firebase.utility";

import store from "..";
import { userAction } from "../actions";
import { registrationSelector } from "../selectors";

export const authStateChangedEffect = () => addAuthStateChangedCallback(async auth => {
    const additionalProperties = registrationSelector.getAdditionalProperties(store.getState());
    const data = auth ? await createOrReadUserData(auth, additionalProperties) : null;
    store.dispatch(userAction.set({ auth, data }));
});
