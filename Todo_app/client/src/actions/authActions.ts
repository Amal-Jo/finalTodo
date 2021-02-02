import {returnErrors} from './errorActions'
import * as actionTypes from './actionTypes'
import axios from 'axios'
import { IAuthFunction, IConfigHeaders } from '../types/types'
import {useHistory} from 'react-router-dom'

//check token and load user
//its an asynchronous function
const API_URL = "http://localhost:5000"


export const loadUser=()=>(dispatch:Function,getState:Function)=>{
    
    //user loading
    dispatch({type:actionTypes.USER_LOADING})

    const headers:any ={
        'Authorization':'Bearer '+tokenConfig(getState)
    }

    axios.get(API_URL+'/users',headers)
         .then(res=>
            dispatch({
                type:actionTypes.USER_LOADED,
                payload:res.data
                
            })
            )
            .catch(err=>{
                dispatch(returnErrors(err.response.data,err.response.status))
                dispatch({
                    type:actionTypes.AUTH_ERROR
                })
            })
            
}

//Register user
export const registerUser = ({name,email,password}:IAuthFunction)=>(dispatch:Function)=>{
    // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //request body
  const body = JSON.stringify({name,email,password})

  axios.post(API_URL+'/signup',body,config)
  .then(res=>dispatch({
      type:actionTypes.REGISTER_SUCCESS,
      payload:res.data
  }))
  .catch(err=>{
      dispatch(
          returnErrors(err.response.data,err.response.status,'REGISTER_FAIL')
      )
      dispatch({
          type:actionTypes.REGISTER_FAIL
      })
  })

}

//login user
export const loginUser=({email,password}:IAuthFunction)=>(dispatch:Function)=>{
    
    // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //request body
  const body = JSON.stringify({email,password})

  axios.post(API_URL+'/login',body,config)
  .then(res=>dispatch({
      type:actionTypes.LOGIN_SUCCESS,
      payload:res.data,

  }))
  .catch(err=>{
      dispatch(
          returnErrors(err.response.data,err.response.status,'LOGIN_FAIL')
      )
      dispatch({
          type:actionTypes.LOGIN_FAIL
      })
  })

}

// Logout User
export const logoutUser = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS
    };
  };


//setup config/headers and token

export const tokenConfig = (getState:Function)=>{
    //get token from localstorage
    //it will take token from authReducer
    const token = getState().auth.token

    //headers

    const config:IConfigHeaders={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //if we have token,then add it to headers
    if(token){
        config.headers['authorization']=token
    
    }
    return config

}