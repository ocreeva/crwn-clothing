import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";
import registrationReducer from "./registration/registration.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['products', 'registration', 'user']
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
