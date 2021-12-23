import {call,put} from 'redux-saga/effects'
import { setAllInitiative, setCreateInitiativeStatus } from '../../ActionsCreators/InitiativeActionCreator'
import { getAllInitiative,createInitiative } from '../Requests/InitiativeRequests'

export function* getAllInitiatives(){
    try{
        console.log("called get all initiatives")
        const response = yield call(getAllInitiative)
        const {data} = response
        if(data.isSuccess){
           yield put(setAllInitiative(data.initiatives))
        }
        console.log("initiative = ",data)

    }catch(e){
        console.log("error = ",e)
    }

}

export function* createInitiatives(action){
    try{
        const response = yield call(()=> createInitiative(
                action.payload.name,
                action.payload.description
            )
        )
        console.log(response)
        const {data} = response
        if(data.isSuccess){
           yield put(setCreateInitiativeStatus(data))
        }
        console.log("add initiative = ",data)

    }catch(e){
        console.log("error = ",e)
    }

}