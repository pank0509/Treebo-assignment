import AllReducers from "../reducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

let middleware = [thunk, logger];

const store = createStore(AllReducers, applyMiddleware(...middleware));
export default store;