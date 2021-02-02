import { type } from "os";
import { E_ERROR } from "./enum";

type Todo={
        name:string;
        complete:boolean;
    }
type ClickToDoToggle=(selected:Todo)=>void;
type AddToDoData=(newToDo:string)=>void;

// REACT
interface ITarget {
    target: {
      value: React.SetStateAction<string>;
    };
    preventDefault(): void;
  }

//errors
type IMsg={
    msg:string | any;
    errors:any
    
}

//AUTH
interface IUser{
    name?:string;
    email:string;
    password:string;
}

interface IError{
    id:E_ERROR;
    msg:IMsg,
    
    
    
}

interface IAuthReduxProps{
    auth:{isAuthenticated:boolean};
    error:IError
}
interface IAuthForm{
    isAuthenticated?:boolean;
    error:IError;
    clearErrors():void
}


interface IRegisterModal extends IAuthForm{
    registerUser(user:Iuser):void
}
interface ILoginModal extends IAuthForm {
    loginUser(user: IUser): void;
}
interface ILogoutProps {
    logoutUser(): void;
}

type IConfigHeaders={
    headers:{
        [index:string]:string
    }
}

type IAction = {
    type: string;
    payload?: any;
}

type IAuthFunction={
    name?:string;
    email:string;
    password:string
}
