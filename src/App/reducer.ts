import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "features/cart";
import categoriesReducer from "features/categories";
import dropdownReducer from "features/dropdown";
import productsReducer from "features/products";
import userReducer from "features/user";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [ "cart" ],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        cart: cartReducer,
        categories: categoriesReducer,
        dropdown: dropdownReducer,
        products: productsReducer,
        user: userReducer,
    }));

export default rootReducer;
