import './css/registeration.scss'
import {TextField,Button} from '@mui/material'
import { Link } from "react-router-dom";
import RegisterationFooter from '../../Components/RegisterationFooter';
import RegisterationHeader from '../../Components/RegisterationHeader';
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { validateEmail } from '../../Utils/validationUtils';
import AuthService from '../../Services/AuthService';
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../State/ActionsCreators/RegisterationAction'
import {useEffect} from 'react'
import Loader from '../../Components/Loader'



function Signup() {

    const authService = new AuthService()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)


    const isSessionAlive = async()=>{
        if(await authService.isSessionAlive()){
            navigate('/')
        }
    }

    const init = async ()=>{
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

    const {name,email,phoneNumber,password} = useSelector(state => state.registerationState.signup)

    const {
        updateSignupEmail,
        updateSignupPassword,
        updateSignupName,
        updateSignupPhoneNumber
    } = bindActionCreators(actionCreators,useDispatch())
 


    const [nameError, setNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [phoneNumberError,setPhoneNumberError] = useState(null)
    const [passwordError,setPasswordError] = useState(null)

    const signup = async()=>{
        var hasError = false
        if(name.length<3){
            setNameError("Invalid name")
            hasError = true
        }else{
            setNameError(null)
        }

        if(!validateEmail(email)){
            setEmailError('Invalid email')
            hasError = true
        }else{
            setEmailError(null)
        }


        if(phoneNumber.length!=10 ){
            setPhoneNumberError('Invalid phone number')
            hasError = true
        }else{
            try{
                parseInt(phoneNumber)
                setPhoneNumberError(null)
            }catch(e){
                hasError = true
                setPhoneNumberError('Invalid phone number')
            }
        }

        if(password.length<8){
            hasError = true
            setPasswordError("Invalid password")
        }else{
            setPasswordError(null)
        }

        if(hasError){
            return
        }

        const result = await authService.getOtp(name,email,phoneNumber,password)

        if(result.isSuccess){
            navigate('/otpverification')
        }else if(result.errorMessage == 'email_already_exist'){
              setEmailError("Already Exist")   
        }else if(result.errorMessage == "phonenumber_already_exist"){
              setPhoneNumberError("Already Exist")   
        }
    }


    if(isLoading){
        return <Loader/>
    }
     



    return (
        <div className="registeration-container">

            <RegisterationHeader/>

            <div></div>
            <div className="signup-container">
                <h1>Sign up</h1>
                <h4>Join cooper initiative now! its free</h4>
                <TextField
                     value={name}
                     onChange={(e)=>{
                        updateSignupName(e.target.value)
                     }}
                     error={nameError!=null}
                     helperText={nameError}
                     className="name"
                     id="outlined-basic"
                     label="Name" 
                     variant="outlined" />
                <TextField 
                     value = {email}
                     onChange={(e)=>{
                        updateSignupEmail(e.target.value)
                    }}
                     error={emailError!=null}
                     helperText={emailError}
                     className="email" 
                     id="outlined-basic" 
                     label="Email" 
                     variant="outlined" />
                <TextField 
                     value = {phoneNumber}
                     onChange={(e)=>{
                        updateSignupPhoneNumber(e.target.value)
                    }}
                     error={phoneNumberError!=null}
                     helperText={phoneNumberError}
                     className="phone-number" 
                     id="outlined-basic" 
                     label="Phone number" 
                     variant="outlined" />
                <TextField 
                    value = {password}
                    onChange={(e)=>{
                        updateSignupPassword(e.target.value)
                    }}
                    error={passwordError!=null}
                    helperText={passwordError}
                    className="password"
                    id="outlined-basic"
                    label="Password"
                    // type="password"
                    variant="outlined" />
                <Button onClick={signup} id="signup-button" variant="contained">Sign up</Button>
                <h3 id="underline">or</h3>
                <div className="signin-link">
                    <h4>Have an account? <Link className="link" to={{pathname: "/login",}} >  Sign in</Link></h4>
                </div>
            </div>
            <RegisterationFooter/>
        </div>
    )
}

export default Signup