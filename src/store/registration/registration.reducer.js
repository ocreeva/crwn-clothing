import * as registrationType from "./registration.type";

const initialState = {
    displayName: null,
};

const registrationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case registrationType.update:
            return { ...state, ...payload };

        default:
            return state;
    }
};

export default registrationReducer;
