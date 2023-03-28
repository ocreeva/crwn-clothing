import * as userType from "./user.type";

const initialState = {
    auth: null,
    data: null,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userType.set:
            return payload;

        default:
            return state;
    }
};

export default userReducer;
