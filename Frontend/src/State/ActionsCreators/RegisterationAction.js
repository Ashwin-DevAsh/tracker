import { 
    CLEAR_SIGNUP_STATUS,
    SET_OTP_STATUS,
    SET_SIGNIN_STATUS, 
    SET_SIGNUP_STATUS, 
    SIGNIN, SIGNUP, UPDATE_SIGNIN_EMAIL,
    UPDATE_SIGNIN_PASSWORD, 
    UPDATE_SIGNUP_EMAIL,
    UPDATE_SIGNUP_NAME,
    UPDATE_SIGNUP_PASSWORD, 
    UPDATE_SIGNUP_PHONENUMBER, 
    VERIFY_OTP,
    SET_USER,
    GET_USER
} from "../Reducers/RegisterationReducer/types"

// sign in action
export const updateSigninEmail = (email)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNIN_EMAIL,
            payload:email
        })
    }
}

export const updateSigninPassword = (password)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNIN_PASSWORD,
            payload:password
        })
    }
}

export const setSigninStatus = (response)=>{
    return (dispatch)=>{
        dispatch({
            type:SET_SIGNIN_STATUS,
            payload:response
        })
    }
}

export const signin = (email,password)=>{
    return (dispatch)=>{
        dispatch({
            type:SIGNIN,
            payload:{email,password}
        })
    }
}



// sign up action
export const updateSignupName = (name)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNUP_NAME,
            payload:name
        })
    }
}

export const updateSignupPhoneNumber = (phoneNumber)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNUP_PHONENUMBER,
            payload:phoneNumber
        })
    }
}


export const updateSignupEmail = (email)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNUP_EMAIL,
            payload:email
        })
    }
}

export const updateSignupPassword = (password)=>{
    return (dispatch)=>{
        dispatch({
            type:UPDATE_SIGNUP_PASSWORD,
            payload:password
        })
    }
}

export const setSignupStatus = (response)=>{
    return (dispatch)=>{
        dispatch({
            type:SET_SIGNUP_STATUS,
            payload:response
        })
    }
}

export const clearSignupStatus = ()=>{
    return (dispatch)=>{
        dispatch({
            type:CLEAR_SIGNUP_STATUS
        })
    }
}


export const signup = (name,phoneNumber,email,password)=>{
    return (dispatch)=>{
        dispatch({
            type:SIGNUP,
            payload:{name,phoneNumber,email,password}
        })
    }
}

export const verifyOtp = (email,otp)=>{
    console.log('verifig otp')
    return (dispatch)=>{
        dispatch({
            type:VERIFY_OTP,
            payload:{email,otp}
        })
    }
}

export const setOtpStatus = (response)=>{
    console.log('setting otp status')
    return (dispatch)=>{
        dispatch({
            type:SET_OTP_STATUS,
            payload:response
        })
    }
}


export const setUser = (response)=>{
    console.log("setting user",response)
    return (dispatch)=>{
        dispatch({
            type:SET_USER,
            payload:response
        })
    }
}

export const getUser = ()=>{
    console.log("get user")
    return (dispatch)=>{
        dispatch({
            type:GET_USER,
        })
    }
}
