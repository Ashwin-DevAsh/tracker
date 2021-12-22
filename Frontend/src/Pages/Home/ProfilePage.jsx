import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initiativeActionCreater from '../../State/ActionsCreators/InitiativeActionCreator'
import Initiative from '../../Components/Initiative'
import {useEffect} from 'react'
import Avatar from '../../Assets/avatar.jpg'
import { Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'


function ProfilePage() {

    const {user} = useSelector(state => state.registerationState) 


    useEffect(() => {
        return () => {
         
        }
    }, [])

    return <div className="profile-page">

        <div className="profile-container">
            <div className="profile-widget">
                <img style={{height:70,borderRadius:40}} src={Avatar} />

                <div className="info">
                <h4>{user.name}</h4>
                <h5>{user.email}</h5>
                </div>
            
            </div>

            <div className="profile-page-options">
                <div className="options" style={{opacity:1}}>
                  <h4  >Home</h4>         
                </div>
                 <Divider light></Divider>

                <div className="options">
                  <h4>My Initiatives</h4>         
                </div>
                 <Divider light></Divider>

                <div className="options">
                  <h4>Contributions</h4>         
                </div>
                 <Divider light></Divider>

                <div className="options">
                  <h4>Activities</h4>         
                </div>
                 <Divider light></Divider>

                <div className="options">
                  <h4>Notifications</h4>         
                </div>
            
            </div>

            <div className="new-initiative" >
                  <h4>Start Initiative</h4>
           </div>
           
        </div>


           
    </div>
}

export default ProfilePage