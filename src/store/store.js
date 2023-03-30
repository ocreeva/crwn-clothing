import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const composeMethod = (
    process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware,
].filter(Boolean);
const enhancers = composeMethod(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, enhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
