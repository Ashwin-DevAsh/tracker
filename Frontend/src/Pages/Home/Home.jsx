import { useEffect } from "react"
import { useNavigate } from "react-router"
import AuthService from "../../Services/AuthService"

function Home(params) {

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
        <h1>Home</h1>
    )
}


export default Home