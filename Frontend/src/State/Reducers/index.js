import { combineReducers } from "redux";
import RegisterationReducer from "./RegisterationReducer/RegisterationReducer";
import InitiativeReducer from "./InitiativeReducer/InitiativeReducer";

const reducers = combineReducers({
    registerationState : RegisterationReducer,
    initiativeState : InitiativeReducer
})

export default reducers