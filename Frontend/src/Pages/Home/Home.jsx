import './css/home.scss'
import { useEffect } from "react"
import { useNavigate } from "react-router"
import AuthService from "../../Services/AuthService"
import mrCooper from '../../Assets/mr_cooper.png'
import {TextField} from '@mui/material'
import { AiOutlineHome } from "react-icons/ai";
import {BiCategory} from "react-icons/bi"
import {BsCalendarEvent} from 'react-icons/bs'
import {GrNotification} from 'react-icons/gr'

import avatar from '../../Assets/avatar.jpg'

import InitiativePage from './InitiativePage'

function Home() {

    const authService = new AuthService()
    const navigate = useNavigate()

 

    const isSessionAlive = async()=>{
        if(! await authService.isSessionAlive()){
            navigate('/login')
        }
    }

    useEffect(()=>{
        isSessionAlive()
    },[])


    return (
        <div className="home-container">
            <header>
                <div className="container">
                <div className="left-section">
                   <img src={mrCooper} className="logo" />

                </div>
                <div className="right-section">
                    <TextField
                        size='small' placeholder="search..." />
                    
                    <div className="icon-sections">
                        <div className="icon-holder" style={{opacity:1}} >
                          < AiOutlineHome size={25}  />
                          <div className="section-selector"></div>
                          {/* <h5>Home</h5> */}
                        </div>

                        <div className="icon-holder" >
                          < BiCategory size={25}  />
                          {/* <h5>Contribution</h5> */}
                        </div>

                        <div className="icon-holder" >
                          < BsCalendarEvent size={25}  />
                          {/* <h5>Activities</h5> */}
                        </div>

                        <div className="icon-holder" >
                          < GrNotification size={25}  />
                          {/* <h5>Notifications</h5> */}
                        </div>
                        
                        <div className="profile-holder">
                            <img src={avatar}/>
                        </div>
                        
                        
                    </div>
                </div>
                </div>
                
            </header>

            <div className="page-holder">

                <InitiativePage/>

            </div>

            


        </div>
    )
}


export default Home