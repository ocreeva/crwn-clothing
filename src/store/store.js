import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";

const middleware = [ logger ];
const enhancers = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, enhancers);

export default store;
