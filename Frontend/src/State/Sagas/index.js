import {takeLatest} from "redux-saga/effects"
import { SIGNIN, SIGNUP, VERIFY_OTP } from "../Reducers/RegisterationReducer/types"
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
}