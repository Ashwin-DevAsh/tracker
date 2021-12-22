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