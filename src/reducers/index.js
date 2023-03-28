import { combineReducers } from "redux";

import registrationReducer from "./registration.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    registrationState: registrationReducer,
    userState: userReducer,
});

export default rootReducer;
