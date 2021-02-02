import * as actionTypes from '../actions/actionTypes'
import{IMsg} from '../types/types'

//return errors

export const returnErrors = (msg:any,status:number,id:any=null)=>{
    return{
        type:actionTypes.GET_ERRORS,
        payload:{msg,status,id}
    }
}

//clear errors

export const clearErrors=()=>{
    return{
        type:actionTypes.CLEAR_ERRORS
    }
}
