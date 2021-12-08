import './registeration.scss'
import mrCooper from '../../Assets/mr_cooper.png'
import {TextField,Button} from '@mui/material'
import { Link } from "react-router-dom";

function Login() {
    
   return(
        <div className="registeration-container">

            <div className="header">
                 <img src={mrCooper} className="logo" />
            </div>

            <div></div>
            <div className="login-container">
                <h1>Sign in</h1>
                <h4>Stay updated on your professional world</h4>
                <TextField className="email" id="outlined-basic" label="Email" variant="outlined" />
                <TextField 
                    className="password"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined" />

                <h3 id="forgot-password">
                  Forgot Pasword?
                </h3>
                <Button id="login-button" variant="contained">Sign in</Button>

                <h3 id="underline">or</h3>

                <div className="signup-link">
                    <h4>Don't have an account?  <Link className="link" to={{pathname: "/signup",}} >  Sign up</Link> </h4>
                </div>

            </div>

            <div className="footer">
                <ul>
                    <li>User Agreement</li>
                    <li>Privacy Policy</li>
                    <li>Community Guidelines</li>
                    <li>Cookie Policy</li>
                    <li>Copyright Policy</li>
                    <li>Send Feedback</li>
                </ul>

                <h5>© 2021 Mr Cooper Groups</h5>

             



            </div>

        
        </div>
   )
    
}


export default Login;