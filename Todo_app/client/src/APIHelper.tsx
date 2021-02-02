import axios from 'axios'
const API_URL = "http://localhost:5000"

//axios stores the response of our requests in a field called data,
export const createTodo=async(task:string)=>{
    if(task){
        let {data:newTodo}= await axios.post(API_URL+'/add',{task})
    return newTodo
    }
    

}
export const getAllTodos=async ()=>{
    let {data:todos}=await axios.get(API_URL)
    return todos

}



