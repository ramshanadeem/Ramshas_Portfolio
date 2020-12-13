import React, { useState } from 'react'
import Typical from 'react-typical'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import SpringModal from './SpringModal';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '150px',
        marginTop: '30px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));
export default function Home() {
    const classes = useStyles();
    
    return (
        <div style={ {backgroundImage: `url("https://s3.us-east-2.amazonaws.com/ots-media/images/solutions/meeting-binders.jpeg")`}}>
            <div style={{textAlign:'center',
        backgroundRepeat: 'no-repeat',width:'100% !important',height:'1000px',color:'white'}} >
          <div style={{marginBottom:'10%',fontWeight:'200px'}}><b>.</b></div>
         <b> Ramsha Nadeem</b>
         <br></br>
          <br></br>
      <Typical
        steps={[  'React Developer!...', 1000, 'web Designer!...',1000, 'MaterialUi expert!...',1000 ,'FrontEnd Developer!...',1000,'UX Developer!...',1000]}
        loop={Infinity}
        wrapper="b"
      
      />
      <div style={{marginTop:'2%'}}><SpringModal/></div>
  
      </div>   
         
         




        </div>
    )
}