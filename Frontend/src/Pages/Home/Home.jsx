import './css/home.scss'
import { useEffect } from "react"
import { useNavigate } from "react-router"
import AuthService from "../../Services/AuthService"
import mrCooper from '../../Assets/mr_cooper.png'
import {TextField} from '@mui/material'

import * as registerationActionCreater from '../../State/ActionsCreators/RegisterationAction'
import InitiativePage from './InitiativePage'
import ProfilePage from './ProfilePage'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import Loader from '../../Components/Loader'


function Home() {

    const authService = new AuthService()
    const navigate = useNavigate()

    const {getUser} = bindActionCreators(registerationActionCreater,useDispatch())
    const {user} = useSelector(state => state.registerationState) 

    const [isLoaded, setIsLoaded] = useState(false)


 

    const isSessionAlive = async()=>{
        if(! await authService.isSessionAlive()){
            navigate('/login')
        }else{
            getUser()
        }
    }

    useEffect(()=>{
        isSessionAlive()
    },[])

    useEffect(()=>{
        if(user!=null){
            setTimeout(()=>{
                setIsLoaded(true)

            },1000)
        }
    },[user])

    if(!isLoaded){
        return <Loader/>
    }



    return (
        <div className="home-container">
            <header>
                <div className="container">
                <div className="left-section">
                   <img src={mrCooper} className="logo" />

                </div>
                <div className="right-section">
                    <TextField
                        size='small'  placeholder="search..." />
            
                </div>
                </div>
                
            </header>

            <div className="page-holder">
                <InitiativePage/>
                <ProfilePage/>

            </div>

            


        </div>
    )
}


export default Home