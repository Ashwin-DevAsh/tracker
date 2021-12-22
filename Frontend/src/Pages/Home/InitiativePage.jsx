import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initiativeActionCreater from '../../State/ActionsCreators/InitiativeActionCreator'
import Initiative from '../../Components/Initiative'
import {useEffect} from 'react'
import AuthService from "../../Services/AuthService"
import { useNavigate } from "react-router"


function InitiativePage() {
    const authService = new AuthService()

    const {getAllInitiative} = bindActionCreators(initiativeActionCreater,useDispatch())
    const {initiatives} = useSelector(state => state.initiativeState) 
    const navigate = useNavigate()


    

    useEffect(() => {
        getAllInitiative()


        return () => {
         
        }
    }, [])

    return <div className="initiative-page">
           {
               initiatives.map((value,index)=><Initiative 
                  userName = {value["user_name"]}
                  name={value["initiative_name"]}
                  description={value["initiative_description"]}
                  />)    
           } 
           <div style={{height:100}} ></div>
    </div>
}

export default InitiativePage