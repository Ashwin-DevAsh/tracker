import { CREATE_INITIATIVE, GET_ALL_INITIATIVE, SET_ALL_INITIATIVE, SET_CREATE_INITIATIVE_STATUS } from "../Reducers/InitiativeReducer/types"

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

export const createInitiative = (name,description)=>{
    return (dispatch)=>{
        dispatch({
            type:CREATE_INITIATIVE,
            payload:{
                name,description
            }
        })
    }
}


export const setCreateInitiativeStatus = (response)=>{
    return (dispatch)=>{
        dispatch({
            type:SET_CREATE_INITIATIVE_STATUS,
            payload:response
        })
    }
}