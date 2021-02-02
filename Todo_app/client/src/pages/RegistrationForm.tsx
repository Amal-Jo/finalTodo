import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { useCallback,useEffect ,useState} from 'react'
import { Alert,AlertTitle} from '@material-ui/lab'
import useStyles from '../Styles/LoginFormStyles'
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {connect} from 'react-redux'
import{registerUser} from '../actions/authActions'
import{clearErrors} from '../actions/errorActions'
import{ IAuthReduxProps, IRegisterModal, ITarget } from '../types/types'

const RegistrationForm = ({
    isAuthenticated,
    error,
    registerUser,
    clearErrors
}:IRegisterModal)=>{
    

    const[userName,setUserName]=useState('')
    const[userEmail,setUserEmail]=useState('')
    const[userPassword,setUserPassword]=useState('')
    const [msg, setMsg] = useState(null)

    const handleToggle = useCallback(() => {
        // Clear errors
        clearErrors();
        
      }, [clearErrors]);

    const handleNameChange =(event:ITarget) =>{
        setUserName(event.target.value)  
    }

    const handleEmailChange =(event:ITarget) =>{
        setUserEmail(event.target.value)   
        
    }

    const handlePasswordChange =(event:ITarget) =>{
        setUserPassword(event.target.value)
          
    }
    

    const handleSubmit=(event:any)=>{
        event.preventDefault()
        
       //signup(userName,userEmail,userPassword)
        //Create user object
        const user = {
            name:userName,
            email:userEmail,
            password:userPassword
        }
        //attempt to login
        registerUser(user)   
        console.log(user) 
        console.log(msg)

    }

    
    useEffect(()=>{
        //check for register error
        if (error.id === 'REGISTER_FAIL'){
            setMsg(error.msg.msg)
           
        }else{
            setMsg(null)
        }
        // If authenticated, clear errors
    
        if(isAuthenticated){
            handleToggle()
        }
    
    },[error,handleToggle,isAuthenticated])
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
                            Registration
                        </Typography>

                        {msg ? <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                    {msg}
                                </Alert> : null}

                        <form   className={classes.form} onSubmit={handleSubmit}>
                           <TextField 
                            label="name"
                            margin="normal"
                            fullWidth
                            required
                            variant="outlined"
                            type="text"
                            name="name"
                            value={userName}
                            onChange={handleNameChange}

                           />
                            <TextField 
                            label="Email Address"
                            margin="normal"
                            fullWidth
                            required
                            variant="outlined"
                            type="email"
                            name="email"
                            value={userEmail}
                            onChange={handleEmailChange}
                            />
                          
                            <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            required
                            name="password"
                            type="password"
                            margin="normal"
                            value={userPassword}
                            onChange={handlePasswordChange}
                            />
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            >
                                Sign Up
                            </Button>
        
                        </form>
                       
                    </div>

            </Grid>
        </Grid>

    )
}

const mapStateToProps =(state:IAuthReduxProps)=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error

})
export default connect(mapStateToProps,{registerUser,clearErrors}) (RegistrationForm)