
import React, { useEffect, useState }  from 'react';
import AddTodoForm from './AddTodoForm';
import { createTodo,getAllTodos } from './APIHelper';
import TodoList from './TodoList';


const initialTodos:Todo[]=[
  // {name:"walk the dog",complete:true},
  // {name:"watch football",complete:false}
]

const App:React.FC=()=> {

  const[todos,setTodos]=useState(initialTodos);
  const[tryTodo,setTryTodo]=useState([])

  useEffect(()=>{
    const fetchTodos=async()=>{
      const todos = await  getAllTodos()
      setTodos(todos)
    }
    fetchTodos()
  },[])
  
  //toggle function
  const toggleTodo:ClickToDoToggle=(selectedTodo) => {
    const newTodos=todos.map(todo => {
      if(todo === selectedTodo){
        return{
          ...todo,
          complete:!todo.complete
        }
      }
      //if condition is not met
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodoData:AddToDoData=(newToDo)=>{ 
    createTodo(newToDo)
    newToDo.trim()!=="" && setTodos([...todos,{name:newToDo,complete:false}])
  
   
  }
  
  return (
    <div className="body">
      <h1 className="header">My Todo List</h1>
      <div className="list">
        <TodoList todos={todos} clickToToggle={toggleTodo}/>
      </div>
      
        <AddTodoForm addTodo={addTodoData}/>
    </div>
   
  );
}

export default App;

