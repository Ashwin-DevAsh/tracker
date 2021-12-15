const initialState = { 
    signin:{
        email:"",
        password:"",
        signStatus:null
    },
    signup:{
        name:"",
        email:"",
        password:"",
        phoneNumber:"",
        signupStatus:null
    }
 }


function RegisterationReducer(state = initialState, action) {
  switch (action.type) {

    // signin states
    case 'updateSigninEmail':
      return {
           ...state, 
           signin:{
               ...state.signin,
               email:action.payload
           }
        }

    case 'updateSigninPassword':
            return {
                 ...state,
                 signin:{
                     ...state.signin,
                     password:action.payload
                 }
              }

    // signup states
    case 'updateSignupEmail':
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    email:action.payload
                }
            }
    
    case 'updateSignupPassword':
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    password:action.payload
                }
            }
    case 'updateSignupName':
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    name:action.payload
                }
            }
    case 'updateSignupPhoneNumber':
        return {
                ...state, 
                signup:{
                    ...state.signup,
                    phoneNumber:action.payload
                }
            }
    default:
      return state
  }
}

export default RegisterationReducer