import { AnyAction, Dispatch, Middleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import reducer from "./reducer";

const additionalMiddleware = [
    process.env.NODE_ENV !== "production" && logger,
].filter(Boolean) as Middleware<any, any, Dispatch<AnyAction>>[];

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddleware),
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
