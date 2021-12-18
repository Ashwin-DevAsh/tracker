const { SET_ALL_INITIATIVE } = require("./types");

const initialState = {
    initiatives : []
}

function InitiativeReducer(state = initialState,action){
    switch(action.type){
        case SET_ALL_INITIATIVE:{
            return {
                ...state, 
                initiatives:action.payload
             }
        }
        default:
            return state
    }
}

export default InitiativeReducer