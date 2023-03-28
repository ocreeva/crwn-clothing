import { addAuthStateChangedCallback, createOrReadUserData } from "./firebase/firebase.utility";

import store from "../store";
import { userAction } from "../actions";
import { registrationSelector } from "../selectors";

export const authStateChangedEffect = () => addAuthStateChangedCallback(async userAuth => {
    const additionalProperties = registrationSelector.getAdditionalProperties(store.getState());
    const userData = userAuth ? await createOrReadUserData(userAuth, additionalProperties) : null;
    store.dispatch(userAction.update({ userAuth, userData }));
});
