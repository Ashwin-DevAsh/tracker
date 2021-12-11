import { combineReducers } from "redux";
import RegisterationReducer from "./RegisterationReducer";

const reducers = combineReducers({
    registerationState : RegisterationReducer
})

export default reducers