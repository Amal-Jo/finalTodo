import React, {  useState ,useEffect,useCallback} from 'react'
import{connect}from 'react-redux'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Alert,AlertTitle} from '@material-ui/lab'
import useStyles from '../Styles/LoginFormStyles'
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { ILoginModal, ITarget,IAuthReduxProps } from '../types/types';
import {loginUser} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'
import {useHistory} from 'react-router-dom'


const LoginPage =({isAuthenticated,error,loginUser,clearErrors}:ILoginModal)=>{
  let history = useHistory();
    
    const [userEmail,setUserEmail]=useState('')
    const [password,setPassword]=useState('')
    const [msg, setMsg] = useState(null);

    const handleToggle = useCallback(() => {
        // Clear errors
        clearErrors();
        
      }, [clearErrors]);

      useEffect(() => {
        // Check for register error
        if (error.id === 'LOGIN_FAIL') {
          setMsg(error.msg.msg);
        } else {
          setMsg(null);
          
        }
    
        // If authenticated, close modal
        
          if (isAuthenticated) {
            handleToggle();
            //history.push('/todo')
          }
        
      }, [isAuthenticated,history]);
    
    const handleUserNameChange=(event:ITarget)=>{
        setUserEmail(event.target.value)
        
    }
    const handlePasswordChange =(event:ITarget)=>{
        setPassword(event.target.value)
       
    }
    const handleLogin=(event:any)=>{
        event.preventDefault();
        const user={
            email:userEmail,
            password:password
          }
          //attempt to login
          loginUser(user)
          console.log(user)
          if(isAuthenticated){
            history.push('/todo')
           }                    
       
    }
   
  
    const classes = useStyles()

    return(
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
               <Grid  item xs={12} sm={8} md={5} component={Paper} elevation={10} square > 
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component ="h1" variant="h5">
                            Sign in
                        </Typography>

                        {msg ? <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                    {msg}
                                </Alert> : null}

                        <form className={classes.form} onSubmit={handleLogin}>
                            <TextField 
                            label="Email Address"
                            margin="normal"
                            fullWidth
                            required
                            variant="outlined"
                            type="email"
                            name="email"
                            value={userEmail}
                            onChange={handleUserNameChange}/>
                          
                            <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            required
                            type="password"
                            name="password"
                            
                            margin="normal"
                            value={password}
                            onChange={handlePasswordChange}
                            
                            />
                            
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            >
                                 Sign in
                            </Button>
             
        
                        </form>

                    </div>

            </Grid>
        </Grid>

    )
   
}
const mapStateToProps = (state: IAuthReduxProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });
  
export default connect(mapStateToProps, { loginUser, clearErrors })(LoginPage);
