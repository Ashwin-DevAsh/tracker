import {call,put} from 'redux-saga/effects'
import { setAllInitiative } from '../../ActionsCreators/InitiativeActionCreator'
import { getAllInitiative } from '../Requests/InitiativeRequests'

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