import {
    CLEAR_SIGNUP_STATUS,
    SET_OTP_STATUS, 
    SET_SIGNIN_STATUS, 
    SET_SIGNUP_STATUS, 
    SET_USER, 
    UPDATE_SIGNIN_EMAIL, 
    UPDATE_SIGNIN_PASSWORD, 
    UPDATE_SIGNUP_EMAIL, 
    UPDATE_SIGNUP_NAME,
    UPDATE_SIGNUP_PASSWORD, 
    UPDATE_SIGNUP_PHONENUMBER
} from './types'

const initialState = { 
    signin:{
        email:"",
        password:"",
        signinStatus:null
    },
    signup:{
        name:"",
        email:"",
        password:"",
        phoneNumber:"",
        signupStatus:null
    },
    otp:{
        otpStatus:null
    },
    user:null
 }


function RegisterationReducer(state = initialState, action) {
  switch (action.type) {

    // signin states
    case UPDATE_SIGNIN_EMAIL:
      return {
           ...state, 
           signin:{
               ...state.signin,
               email:action.payload
           }
        }

    case UPDATE_SIGNIN_PASSWORD:
            return {
                 ...state,
                 signin:{
                     ...state.signin,
                     password:action.payload
                 }
              }
    case SET_SIGNIN_STATUS:
        return {
                ...state,
                signin:{
                    ...state.signin,
                    signinStatus:action.payload
                },
                user:action.payload.result
            }

    // signup states
    case UPDATE_SIGNUP_EMAIL:
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    email:action.payload
                }
            }
    
    case UPDATE_SIGNUP_PASSWORD:
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    password:action.payload
                }
            }
    case UPDATE_SIGNUP_NAME:
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    name:action.payload
                }
            }
    case UPDATE_SIGNUP_PHONENUMBER:
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    phoneNumber:action.payload
                }
            }
    case SET_SIGNUP_STATUS:
        return {
                ...state,
                signup:{
                    ...state.signup,
                    signupStatus:action.payload
                },

            }
    case CLEAR_SIGNUP_STATUS:
        return {
                ...state,
                signup:{
                    ...state.signup,
                    signupStatus:null
                }
            }
    case SET_OTP_STATUS:
        return {
                ...state,
                otp:{
                    ...state.otp,
                    otpStatus:action.payload
                },
                user:action.payload.result
            }
    case SET_USER:
        return {
                ...state,
                user:action.payload.user
            }
    default:
      return state
  }
}

export default RegisterationReducer