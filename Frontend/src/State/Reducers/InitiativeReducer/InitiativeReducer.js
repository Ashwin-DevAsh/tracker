const { SET_ALL_INITIATIVE,
    SET_CREATE_INITIATIVE_STATUS
 } = require("./types");

const initialState = {
    initiatives : [],
    createInitiativeResponse:null
}

function InitiativeReducer(state = initialState,action){
    switch(action.type){
        case SET_ALL_INITIATIVE:{
            return {
                ...state, 
                initiatives:action.payload
             }
        }
        case SET_CREATE_INITIATIVE_STATUS:{
            console.log("set action",action)
            return {
                ...state, 
                createInitiativeResponse:action.payload
             }
        }
        default:
            return state
    }
}

export default InitiativeReducer