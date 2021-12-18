import {takeLatest} from "redux-saga/effects"
import { GET_ALL_INITIATIVE } from "../Reducers/InitiativeReducer/types"
import { SIGNIN, SIGNUP, VERIFY_OTP } from "../Reducers/RegisterationReducer/types"
import { getAllInitiatives } from "./Handlers/InitiativeHander"
import { handleLogin, handleSignup,handelVerifyOtp } from "./Handlers/RegisterationHandler"

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
}