import {CircularProgress} from '@mui/material'

const Loader = ()=>{
   return <div
      style={{
          background:'ffffff',
          position:'absolute',
          top:0,
          bottom:0,
          left:0,
          right:0,
          zIndex:100,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      }}
   >
       <CircularProgress />
   </div>
}

export default Loader