import './css/registeration.scss'
import {TextField,Button} from '@mui/material'
import { Link } from "react-router-dom";
import {useState} from 'react'
import { validateEmail } from '../../Utils/validationUtils';
import AuthService from '../../Services/AuthService';
import RegisterationFooter from '../../Components/RegisterationFooter';
import RegisterationHeader from '../../Components/RegisterationHeader';
import { useSelector,useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionsCreators from '../../State/ActionsCreators/RegisterationAction'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import Loader from '../../Components/Loader'




function Login() {
   const {email,password,signinStatus} = useSelector(state => state.registerationState.signin) 
   const {updateSigninEmail,updateSigninPassword,signin} = bindActionCreators(actionsCreators,useDispatch())
   const authService = new AuthService() 
   const [emailError, setEmailError] = useState(null)
   const [passwordError, setPasswordError] = useState(null)
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(true)


    const isSessionAlive = async()=>{
        if(await authService.isSessionAlive()){
            navigate('/')
        }
    }

    const init = async ()=>{
        console.log('calling init')
        setTimeout(()=>{
            isSessionAlive()
            setTimeout(()=>{
              setIsLoading(false)
            },500)
        },1000)
    }

    useEffect(()=>{
        init()
    },[])

    useEffect(()=>{
        monitorSigninStatus()
    },[signinStatus])


   const monitorSigninStatus = ()=>{
        if(signinStatus){
            if(signinStatus.isSuccess){
                navigate('/',{replace:true})
            }
            else if(signinStatus.errorMessage=="invalid_password"){
                setPasswordError("Invalid password")
            }else if(signinStatus.errorMessage=="user_not_found"){
                setEmailError("Invalid email")
            }
        }
   } 



   const login = async()=>{
      const isValidEmail = validateEmail(email)
      var hasError = false
      if(!isValidEmail){
          setEmailError("Invalid email")
          hasError = true
      }else{
          setEmailError(null)
      }
      if(!password || password.length<8){
          setPasswordError("Invalid password")
          hasError = true
      }else{
          setPasswordError(null)
      }

      if(hasError){
          return
      }
      signin(email,password)
   }



   if(isLoading){
       return <Loader/>
   }
    
   return(
        <div className="registeration-container">

            <RegisterationHeader/>

            <div></div>
            <div className="login-container">
                <h1>Sign in</h1>
                <h4>Stay updated on your professional world</h4>
                <TextField 
                     onChange={(e)=>{
                         updateSigninEmail(e.target.value)
                     }}
                     value={email}
                     className="email"
                     id="outlined-basic" 
                     label="Email" 
                     helperText={emailError}
                     error= {emailError!=null}
                     variant="outlined" />
                <TextField 
                    onChange={(e)=>{
                         updateSigninPassword(e.target.value)
                     }}
                     value = {password}
                    className="password"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    helperText={passwordError}
                    error= {passwordError!=null}
                    variant="outlined" />

                <h3 id="forgot-password">
                  Forgot Pasword?
                </h3>
                <Button
                     onClick={() => {
                        login()
                      }}
                    id="login-button" 
                    variant="contained">
                        Sign in
                </Button>

                <h3 id="underline">or</h3>

                <div className="signup-link">
                    <h4>Don't have an account?  <Link className="link" to={{pathname: "/signup",}} >  Sign up</Link> </h4>
                </div>

            </div>
            <RegisterationFooter/>
        </div>
   )
    
}


export default Login;