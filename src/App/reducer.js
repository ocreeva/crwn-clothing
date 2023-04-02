import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "../store/cart/cart.reducer";
import productsReducer from "../store/products/products.reducer";
import registrationReducer from "../store/registration/registration.reducer";
import userReducer from "../store/user/user.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [ "cart" ],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        cart: cartReducer,
        products: productsReducer,
        registration: registrationReducer,
        user: userReducer,
    }));

export default rootReducer;
