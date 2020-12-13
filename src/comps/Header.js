import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Projects from './Projects'
import { WithMaterialUI } from './Contact'
// import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';


import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
/* import Footer from './Footer'; */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));


export default function Header() {
    const [open, set] = useState(true)

    const classes = useStyles();


    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            My Portfolio
            </Typography>




                        <Button color="inherit"><Link className="link" to='/' >Home</Link></Button>
                        <Button color="inherit"><Link to='/Projects' className="link">Projects</Link></Button>


                        <Button color="inherit"> <Link className="link" to='/Contact'> Contact Me</Link></Button>

                        <Button color="inherit">Login</Button>

                    </Toolbar>



                </AppBar>


                <Switch>
                    <Route path="/Projects">
                        <Projects />
                    </Route>
                    <Route path="/Contact">
                        <WithMaterialUI />

                    </Route>
                    <Route exact path="/">
                        <Home open={open} onClick={() => set((state) => !state)}>

                            <div>

                                <span>Ramsha</span>
                                <span>Nadeem</span>
                            </div>

                        </Home>
                    </Route>

                </Switch>

            </div>


        </Router>




    );
}


