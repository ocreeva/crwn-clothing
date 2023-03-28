import * as userType from "../constants/user.type";

const initialState = {
    userAuth: null,
    userData: null,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userType.update:
            return { ...state, ...payload };

        default:
            return state;
    }
};

export default userReducer;
