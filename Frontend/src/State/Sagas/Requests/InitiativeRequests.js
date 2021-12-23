import axios from 'axios'
import { ApiConfig } from '../../../Config/ApiConfig'

const baseUrl = ApiConfig.Url


export function getAllInitiative(){
    const endPoint = `${baseUrl}/getAllInitiative`
    return axios.get(
        endPoint,
        {headers:{
            token : localStorage.getItem('token')
          }
       }
    )
}

export function createInitiative(name,description){
    const endPoint = `${baseUrl}/createInitiative`
    console.log(name,description)
    return axios.post(
        endPoint,
        {
            name,
            description,
            images:[]
        },
        {
            headers:{
                token : localStorage.getItem('token')
        }
       }
    )
}