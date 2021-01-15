import React, { ChangeEvent, FormEvent, useState } from 'react';
import{getAllTodos,createTodo} from './APIHelper'

interface AddTodoFormProps{
    addTodo:AddToDoData
}
const AddTodoForm:React.FC<AddTodoFormProps>=({addTodo})=>{

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
        <form >
            <div className="input">
                <input type="text" placeholder="Enter your wish here" value={newTodo} onChange={handleChange}/>

            </div>
            
            <div  className="buttonform">
                <button className="button " type="submit" onClick={handleSubmit}>Add Todo</button>
            </div>
            
        </form>
    )

}
export default AddTodoForm;