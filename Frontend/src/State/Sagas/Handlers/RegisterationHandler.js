import {call,put} from 'redux-saga/effects'
import {getOtp, login, verifyOtp} from '../Requests/RegisterationRequest'
import {setOtpStatus, setSigninStatus, setSignupStatus} from '../../ActionsCreators/RegisterationAction'

export function* handleLogin(action){
      try{
          console.log(action)
          const response = yield call(()=>login(action.payload.email,action.payload.password))
          const {data} = response
          console.log(data)
          if(data.token){
              localStorage.setItem('token',data.token)
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
        if(data.token){
            localStorage.setItem('token',data.token)
        }
        yield put(setOtpStatus(data))
    }catch(e){
        console.log('error',e)
    }
}