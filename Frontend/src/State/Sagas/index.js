import {takeLatest} from "redux-saga/effects"
import { CREATE_INITIATIVE, GET_ALL_INITIATIVE } from "../Reducers/InitiativeReducer/types"
import { GET_USER, SIGNIN, SIGNUP, VERIFY_OTP } from "../Reducers/RegisterationReducer/types"
import { getAllInitiatives,createInitiatives } from "./Handlers/InitiativeHander"
import { handleLogin, handleSignup,handelVerifyOtp, handelGetUser } from "./Handlers/RegisterationHandler"

export function* watcherSaga(){
    yield takeLatest(
        SIGNIN,handleLogin
    )

    yield takeLatest(
        SIGNUP,handleSignup
    )

    yield takeLatest(
        VERIFY_OTP,handelVerifyOtp
    )

    yield takeLatest(
        GET_ALL_INITIATIVE,getAllInitiatives
    )

    yield takeLatest(
        GET_USER,handelGetUser
    )

    yield takeLatest(
        CREATE_INITIATIVE,createInitiatives
    )
}