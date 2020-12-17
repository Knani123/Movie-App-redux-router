import movieReducer from "./moveReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ movieReducer });

export default rootReducer;
