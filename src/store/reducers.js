import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";
import registrationReducer from "./registration/registration.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    registration: registrationReducer,
    user: userReducer,
});

export default rootReducer;
