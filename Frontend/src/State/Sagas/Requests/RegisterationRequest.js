import axios from 'axios'
import { ApiConfig } from '../../../Config/ApiConfig'

const baseUrl = ApiConfig.Url

const headers = {
    'Content-Type': 'application/json'
}

export function login(email,password){
    const endPoint = `${baseUrl}/login`
    return axios.post(
        endPoint,
        {
            email,
            password
        },
        headers
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
        headers
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
        headers
    )
}