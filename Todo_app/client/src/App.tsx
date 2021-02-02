import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import LoginPage from './pages/LoginPage'
import RegistrationForm from './pages/RegistrationForm'
import Todohome from "./pages/TodoHome";
import store from "./Store/store";
import main from './pages/main'
import { useEffect } from "react";
import {loadUser}  from "./actions/authActions";
import LogOutpage from "./pages/Logout";





const App:React.FC=()=> {

  useEffect(()=>{
    store.dispatch(loadUser())
  },[])

  return(
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
              <Route exact path = "/" component={main}/>
              <Route exact path = "/login" component={LoginPage}/>
              
               <Route exact path = "/signup" component={RegistrationForm}/>
                   
               <Route exact path = "/todo" component={Todohome}/>
               <Route exact path = "/logout" component={LogOutpage}/>
                  
          
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  )

}
export default App;