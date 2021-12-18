import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initiativeActionCreater from '../../State/ActionsCreators/InitiativeActionCreator'
import Initiative from '../../Components/Initiative'
import {useEffect} from 'react'

function InitiativePage() {
    const {getAllInitiative} = bindActionCreators(initiativeActionCreater,useDispatch())
    const {initiatives} = useSelector(state => state.initiativeState) 

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
    </div>
}

export default InitiativePage