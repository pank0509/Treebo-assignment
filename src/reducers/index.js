import {combineReducers} from "redux";
import HotelsReducer from "./HotelsReducer";

const reducersObj = {
    hotel: HotelsReducer,
}

const AllReducers = combineReducers(reducersObj);
export default AllReducers;