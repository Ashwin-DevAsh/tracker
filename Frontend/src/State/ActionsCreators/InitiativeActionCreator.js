import { GET_ALL_INITIATIVE, SET_ALL_INITIATIVE } from "../Reducers/InitiativeReducer/types"

export const setAllInitiative = (initiatives)=>{
    return (dispatch)=>{
        dispatch({
            type:SET_ALL_INITIATIVE,
            payload:initiatives
        })
    }
}

export const getAllInitiative = ()=>{
    return (dispatch)=>{
        dispatch({
            type:GET_ALL_INITIATIVE,
        })
    }
}