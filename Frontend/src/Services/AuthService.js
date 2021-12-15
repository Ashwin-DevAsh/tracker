import { ApiConfig } from '../Config/ApiConfig'

const axios = require('axios').default

class AuthService{

    headers = {
        'Content-Type': 'application/json'
    };
    url = ApiConfig.Url

    login = async(email,password)=>{
        const endpoint = `${this.url}/login`
        const result = await axios.post(
            endpoint,{
                email,password
            },
            this.headers
        )
        console.log(result.data)
        if(result.data.isSuccess){
            localStorage.setItem('token',result.data.token)
        }
        return result.data

    }

    getOtp = async (name,email,phoneNumber,password)=>{
        const endpoint = `${this.url}/getOtp`
        const result = await axios.post(
            endpoint,
            {
                name,email,password,phoneNumber,password
            },
            this.headers
        )
        console.log(result.data)
        return result.data
    }


    verifyOtp = async (email,otp)=>{
        const endpoint = `${this.url}/signup`
        const result = await axios.post(
            endpoint,
            {
                email,otp
            },
            this.headers
        )
        console.log(result.data)
        if(result.data.isSuccess){
            localStorage.setItem('token',result.data.token)
        }
        return result.data
    }

    isSessionAlive = async () => {
        const token = localStorage.getItem('token')
        if(!token){
            return false
        }

        const endpoint = `${this.url}/isSessionAlive`
        const result = await axios.post(
            endpoint,
            {
                token
            },
            this.headers
        )
        console.log(result)
        return (result.data.isSuccess && result.data.isSessionAlive)
    }

}

export default AuthService