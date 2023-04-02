import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeMethod = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const middleware = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
].filter(Boolean);
const enhancers = composeMethod(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, enhancers);

export const persistor = persistStore(store);

export default store;
