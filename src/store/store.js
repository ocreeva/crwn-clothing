import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import reducer from "./reducers";

const additionalMiddleware = [
    process.env.NODE_ENV !== "production" && logger,
].filter(Boolean);

export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(additionalMiddleware),
    reducer,
});
