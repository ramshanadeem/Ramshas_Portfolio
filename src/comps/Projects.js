/* import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import ImageCard from "../components/card"
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx'
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const projects= [
  {image :'https://miro.medium.com/max/2732/1*VTKsiByHMcWDIxpFawp4fg.png',title:"", text:""},
   {image : 'https://webdesy.com/webdesy-wp/wp-content/uploads/2015/01/shoe-store-four.jpg',title:"", text:""},
   {image :'https://zeroone.ws/wp-content/uploads/2015/03/proweb-home.jpg',title:"", text:""},
   {image :'https://img.quizlet.com/tSRa4-700.jpg',title:"" ,text:""}

 
]


export default function FullWidthGrid() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <div className={classes.root} style={{ backgroundImage: 'linear-gradient(120deg,rgba(0, 0, 0, 0.877), white)' }}>

            <h4 style={{ textAlign: 'center' }}>My Projects<br></br>
                   ______
            </h4>
            <Box mx={2}>
            <Grid container spacing={3} style={{ paddingTop: '10%' }}>
                {
                    projects.map((item,index)=>{
                        return(
                            <Grid item xs={6} sm={3}>
                                <ImageCard image={item} h1={item}/>
                     
    
                                
                            </Grid>
                        )
                    })
                }
               
            </Grid>
            </Box>
        </div>
    );
}

 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
 import '../App.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard() {
  const classes = useStyles();
  const projects= [
    {image :'https://miro.medium.com/max/2732/1*VTKsiByHMcWDIxpFawp4fg.png',title:"TODOLIST", text:"https://github.com/ramshanadeem/Todo-In-React"},
    {image :'https://img.quizlet.com/tSRa4-700.jpg',title:"QUIZLET" ,text:" https://github.com/ramshanadeem/quiz-app   https://ramshanadeem.github.io/quiz-app/ "},
     {image :'https://zeroone.ws/wp-content/uploads/2015/03/proweb-home.jpg',title:"PROWEB", text:" https://ramshanadeem.github.io/pro-webdesign-/"},
     {image :'https://i0.wp.com/www.techowns.com/wp-content/uploads/2020/02/Best-Calculator-App-for-iPad.jpg?fit=1900%2C1267&ssl=1',title:"CALCULATOR", text:" https://ramshanadeem.github.io/calculator-assignment/"},
     

];
const renderCard=(card,index)=>{
    

  return (
 <>
    <Box mx={1} style={{width:"23%"}}>
    <Card className={classes.root}> 
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.text}
            
          </Typography>
          {/* <Link>
          <Button >{card.link}</Button>
          </Link> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
      
    </Card>
    </Box>
    </>
  );
  }
return <div>
  <div style={{backgroundImage: `url("https://i.pinimg.com/originals/f7/06/02/f706023c8c180e1ad13297ff704f065b.jpg")`, height:'100%', paddingTop:"15%"}}>
    <div style={{textAlign:'center',color:'white',fontSize:'30px'}}>
     <b> PROJECTS<br></br>______</b>
     
    </div>
    
  </div>
   <Grid container style={{ paddingTop: '2%' }}>
    {projects.map(renderCard)}
    </Grid>
    </div>
 

}
  