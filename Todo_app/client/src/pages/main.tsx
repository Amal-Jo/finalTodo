import React from 'react'
import { Link } from 'react-router-dom'
import {  Button, Grid, Paper, Typography,Toolbar,AppBar} from '@material-ui/core'



import useStyles from '../Styles/mainPageStyles'
import LogOutpage from './Logout'
const Main :React.FC=()=>{
    const classes= useStyles()

    return(
       <React.Fragment>
            <div className={classes.header}>
                <AppBar position="static">
                    <Toolbar>
                         <Typography variant="h6" className={classes.title}>
                                Welcome
                          </Typography>
                        <Link to='/signup' color="inherit">
                        <Button variant="contained"  color="primary">Sign up</Button>
                        </Link>
                        <Link to='/login' color="inherit">
                        <Button variant="contained"  color="primary">Login</Button>
                        </Link>
                        <LogOutpage/>
                        
                    </Toolbar>
                 </AppBar>
            </div>

       < Grid container component="main" className={classes.root}>
            <Grid item xs={12}  className={classes.image} />
        </Grid>
        </React.Fragment>
    )

}
export default Main;