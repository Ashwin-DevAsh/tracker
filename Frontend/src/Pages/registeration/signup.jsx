import './registeration.scss'
import mrCooper from '../../Assets/mr_cooper.png'
import {TextField,Button} from '@mui/material'
import { Link } from "react-router-dom";


function Signup() {
    return (
        <div className="registeration-container">

            <div className="header">
                 <img src={mrCooper} className="logo" />
            </div>

            <div></div>
            <div className="signup-container">
                <h1>Sign up</h1>
                <h4>Join cooper initiative now! its free</h4>
                <TextField className="name" id="outlined-basic" label="Name" variant="outlined" />
                <TextField className="email" id="outlined-basic" label="Email" variant="outlined" />
                <TextField className="phone-number" id="outlined-basic" label="Phone number" variant="outlined" />
                <TextField 
                    className="password"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined" />


                <Button id="signup-button" variant="contained">Sign in</Button>

                <h3 id="underline">or</h3>

                <div className="signin-link">
                    <h4>Have an account? <Link className="link" to={{pathname: "/login",}} >  Sign in</Link></h4>
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

export default Signup