import './css/registeration.scss'
import {Button} from '@mui/material'
import { Link } from "react-router-dom";
import RegisterationFooter from '../../Components/RegisterationFooter';
import AuthService from '../../Services/AuthService';
import RegisterationHeader from '../../Components/RegisterationHeader';
import OtpInput from 'react-otp-input';
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useNavigate} from 'react-router-dom'
import * as actionCreators from '../../State/ActionsCreators/RegisterationAction'



function Otp() {

   const authService = new AuthService() 
   const [otp, setOtp] = useState("")
   const [otpError,setOtpError] = useState(null)
   const {signup:{email},otp:{otpStatus}} = useSelector(state => state.registerationState)
   const navigate = useNavigate()
   const {verifyOtp} = bindActionCreators(actionCreators,useDispatch())

   useEffect(() => {
       if(!email){
           navigate('/signup',{replace:true})
       }
       return () => {
          
       }
   }, [])

   useEffect(()=>{
       console.log(otpStatus)
       if(otpStatus){
            if(otpStatus.isSuccess){
               navigate('/home',{replace:true})
            }else{
               setOtpError('Invalid otp')
            }
       }
   },[otpStatus])

   const validate = async ()=>{
       var hasError = false
       if(otp.length != 4){
            hasError=true
            setOtpError('Invalid otp')
       }else{
            try{
                parseInt(otp)
                setOtpError(null)
            }catch(e){
                hasError=true
                setOtpError('Invalid otp')
            }
       }
       if(hasError){
           return
       }
       verifyOtp(email,parseInt(otp))

   }


   return(
        <div className="registeration-container">
          <RegisterationHeader/>
            <div></div>
            <div className="otp-container">
                <h1>Verification</h1>
                <h4>Enter the 4 digit code we sent to your email</h4>
                <OtpInput
                    inputStyle={{height:50,width:50,marginTop:40,marginBottom:20,marginRight:15}}
                    value={otp}
                    errorStyle={{
                        borderColor:'red'
                    }}
                    hasErrored = {otpError!=null}
                    onChange={(value)=>{setOtp(value)}}
                    numInputs={4}
                />
                <Button
                     onClick={() => {
                        validate()
                      }}
                    id="confirm-button" 
                    variant="contained">
                        Confirm
                </Button>
                <h3 id="underline">or</h3>
                <div className="signup-link">
                    <h4>Haven't receive code?  <Link className="link" to={{pathname: "/signup",}} > Resend it</Link> </h4>
                </div>
            </div>
            <RegisterationFooter/>
        </div>
   )
    
}


export default Otp;