import {call,put} from 'redux-saga/effects'
import {getOtp, login, verifyOtp, getUser} from '../Requests/RegisterationRequest'
import {setOtpStatus, setSigninStatus, setSignupStatus, setUser} from '../../ActionsCreators/RegisterationAction'

export function* handleLogin(action){
      try{
          console.log(action)
          const response = yield call(()=>login(action.payload.email,action.payload.password))
          const {data} = response
          console.log(data)
          if(data.isSuccess){
             localStorage.setItem('token',data.result.token)
          }
          yield put(setSigninStatus(data))
      }catch(e){
          console.log('error',e)
      }
}


export function* handleSignup(action){
    try{
        console.log(action)
        const response = yield call(()=>getOtp(
            action.payload.email,
            action.payload.password,
            action.payload.name,
            action.payload.phoneNumber
        ))
        console.log(response)
        const {data} = response
        yield put(setSignupStatus(data))
    }catch(e){
        console.log('error',e)
    }
}

export function* handelVerifyOtp(action){
    try{
        console.log(action)
        const response = yield call(()=>verifyOtp(
            action.payload.email,
            action.payload.otp
        ))
        console.log(response)
        const {data} = response
        if(data.isSuccess){
            localStorage.setItem('token',data.result.token)
        }
        yield put(setOtpStatus(data))
    }catch(e){
        console.log('error',e)
    }
}

export function* handelGetUser(action){
    console.log("getting user")
    try{
        const response = yield call(getUser)
        console.log("user response = ", response)
        const {data} = response
        yield put(setUser(data))
    }catch(e){
        console.log('get user error',e)
    }
}