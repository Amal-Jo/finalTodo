import React, { ChangeEvent, FormEvent, useState } from 'react';
import{getAllTodos,createTodo} from '../APIHelper'
import {AddToDoData} from '../types/types'
import {  Button, Grid, Paper, Typography,Toolbar,AppBar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../Styles/mainPageStyles'
import { connect } from 'react-redux';
import {logoutUser} from '../actions/authActions'

interface AddTodoFormProps{
    addTodo:AddToDoData
}
const AddTodoForm:React.FC<AddTodoFormProps>=({addTodo})=>{
    
    const classes= useStyles()

    const[newTodo,setNewTodo]=useState("")

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(event.target.value)

        
    }
   
    const handleSubmit=(event:FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo("")
        
    }
    
    return(
        <React.Fragment>
             <div className={classes.header}>
         <AppBar position="static">
             <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                         Enter Your Wish
                   </Typography>
                 
                 <Link to='/logout' color="inherit">
                 <Button variant="contained"  color="primary" >LogOut</Button>
                 </Link>  
             </Toolbar>
          </AppBar>
     </div>
     <hr/>
        <form >
            <div className="input">
                <input type="text" placeholder="Enter your wish here" value={newTodo} onChange={handleChange}/>

            </div>
            
            <div  className="buttonform">
                <button className="button " type="submit" onClick={handleSubmit}>Add Todo</button>
            </div>
            
        </form>
        
     </React.Fragment>
    )

}
export default AddTodoForm;