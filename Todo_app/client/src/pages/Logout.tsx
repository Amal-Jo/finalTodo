import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import{logoutUser} from '../actions/authActions'
import { ILogoutProps } from '../types/types';

const LogoutPage=({logoutUser}:ILogoutProps)=>{
    return(
    <Button variant="contained"  color="primary" onClick={logoutUser}>
        LogOut
    </Button>
    )

}
export default connect(null,{logoutUser})(LogoutPage)