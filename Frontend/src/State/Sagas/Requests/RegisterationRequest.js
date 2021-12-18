import axios from 'axios'
import { ApiConfig } from '../../../Config/ApiConfig'

const baseUrl = ApiConfig.Url

export function login(email,password){
    const endPoint = `${baseUrl}/login`
    return axios.post(
        endPoint,
        {
            email,
            password
        },
    )
}

export function getOtp(email,password,name,phoneNumber){
    const endPoint = `${baseUrl}/getOtp`
    return axios.post(
        endPoint,
        {
            email,
            password,
            name,
            phoneNumber
        },
    )
}

export function verifyOtp(email,otp){
    const endPoint = `${baseUrl}/signup`
    return axios.post(
        endPoint,
        {
            email,
            otp
        },
    )
}