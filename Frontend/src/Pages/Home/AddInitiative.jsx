import { TextField,TextareaAutosize, Button, Snackbar,Alert } from "@mui/material";
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from "redux";
import Avatar from '../../Assets/avatar.jpg'
import {AiOutlineClose} from 'react-icons/ai'
import {useState,useEffect} from 'react'
import Loader from "../../Components/Loader";
import * as initiativeActionCreater from '../../State/ActionsCreators/InitiativeActionCreator'

 function AddInitiative({close}){

    const {user} = useSelector(state => state.registerationState) 
    const {createInitiativeResponse} = useSelector(state => state.initiativeState) 

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const [titleError, setTitleError] = useState(null)
    const [descriptionError, setDescriptionError] = useState(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showError, setShowError] = useState(false)


    const {createInitiative,setCreateInitiativeStatus,getAllInitiative} = bindActionCreators(initiativeActionCreater,useDispatch())

    useEffect(() => {
        
        if(createInitiativeResponse!=null){
            if(createInitiativeResponse.isSuccess){
                getAllInitiative()
                setCreateInitiativeStatus(null)
                setTitle("")
                setDescription("")
                setShowSuccessMessage(true)
            }
        }

        return () => {
        }
    }, [createInitiativeResponse])

    const validate = ()=>{

        var hasError = false

        if(title.length<3){
            setTitleError("Invalid Title")
            hasError = true
        }else{
            setTitleError(null)
        }

        if(description.length<3){
            setDescriptionError("Invalid Description")
            hasError = true

        }else{
            setDescriptionError(null)
        }

        if(!hasError){
            createInitiative(title,description)
        }
        
    }


    return(
        <div  className="add-initiative">

            <div className="add-initiative-form">

             <div className="heading" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'start',marginBottom:60,}} >
               <AiOutlineClose onClick={close} style={{cursor:'pointer'}} size={40} />
               <h1 style={{marginTop:50}}  >Create Initiative</h1>


            </div>   
                
            <div className="profile-widget" style={{marginBottom:50}}>
                <img style={{height:70,borderRadius:40}} src={Avatar} />

                <div className="info">
                <h4>{user.name}</h4>
                <h5>{user.email}</h5>
                </div>
            
            </div >
            <div className="form-container">
                 <TextField 
                     value={title}
                     style={{marginBottom:30}} 
                     error={titleError!=null}
                     helperText={titleError}
                     onChange={(e)=>setTitle(e.target.value)}
                     fullWidth
                     label="Title" 
                 />
                 <TextField 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    fullWidth 
                    error={descriptionError!=null}
                    helperText={descriptionError}
                    label="Description" 
                    multiline
                    minRows={10} />

            </div>

            <div className="add-initiative-foorter">
                <Button onClick={validate} variant="contained">Create</Button>
            </div>
                 
                
            </div>

            <Snackbar open={showSuccessMessage} autoHideDuration={3000} onClose={()=>setShowSuccessMessage(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Added Successfully!
                </Alert>
            </Snackbar>

            <Snackbar open={showError} autoHideDuration={3000} onClose={()=>setShowError(false)}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Error!
                </Alert>
            </Snackbar>
            
        </div>
    )
}

export default AddInitiative