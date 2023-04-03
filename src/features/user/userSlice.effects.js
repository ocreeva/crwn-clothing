import { addAuthStateChangedCallback } from "../../services/auth";
import { createOrReadUserData } from "../../services/storage";
import { setUser } from ".";

export const authStateChangedEffect = (dispatch, additionalRegistrationProperties) =>
    addAuthStateChangedCallback(async auth => {
        let data = null;
        if (auth) {
            data = await createOrReadUserData(auth, additionalRegistrationProperties);
            // avoid non-serializable properties; can restore in some form when usage is needed
            delete data["createdAt"];

            const { uid } = auth;
            auth = { uid };
        }
        dispatch(setUser({ auth, data }));
    });
