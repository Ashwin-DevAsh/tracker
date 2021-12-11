// sign in action
export const updateSigninEmail = (email)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSigninEmail',
            payload:email
        })
    }
}

export const updateSigninPassword = (password)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSigninPassword',
            payload:password
        })
    }
}


// sign up action
export const updateSignupName = (name)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSignupName',
            payload:name
        })
    }
}

export const updateSignupPhoneNumber = (phoneNumber)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSignupPhoneNumber',
            payload:phoneNumber
        })
    }
}


export const updateSignupEmail = (email)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSignupEmail',
            payload:email
        })
    }
}

export const updateSignupPassword = (password)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateSignupPassword',
            payload:password
        })
    }
}
