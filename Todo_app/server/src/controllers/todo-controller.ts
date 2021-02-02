import{Request,Response} from 'express'
import {ITodo} from '../types/todo'
import TodoModel from '../models/todo'



const getTodos=async(req:Request,res:Response)=>{
    try {
        const todos:ITodo[] = await TodoModel.find()
        res.status(200).json({todos})
    } catch (error) {
        throw error
    }
}

const addTodo=async(req:Request,res:Response)=>{
    try {
        //receives the body object that contains data entered by the user.
        const body=req.body
        console.log(body)
        
        const todo:ITodo=new TodoModel({
           name: body.task,
           completed:false
           
       })
     
        //save the Todo in the DB 
      
        const newTodo:ITodo=await todo.save()
             //return a response that contains the todo created and the updated todos array.
        const allTodos:ITodo[]=await TodoModel.find()

        res.status(201).json({todo:newTodo,todos:allTodos})
       

    } catch (error) {
        throw (error)
    }

}

const updateTodo=async(req:Request,res:Response)=>{
    try {
        
        //To update a todo, we need to extract the id and the body from the req object
        const{ params:{id},body} = req

        //then pass them to findByIdAndUpdate(). 
        //This utility will find the Todo on the database and update it

        const updateTodo:ITodo=await TodoModel.findByIdAndUpdate(
            {_id:id},
            body
        )
        //we can now return the updated data to the user.
        const allTodos:ITodo[]=await TodoModel.find()
        res.status(200).json({
    
            todo:updateTodo,
            todos:allTodos
        })
        
    } catch (error) {
        throw error
    }

}


export { getTodos, addTodo, updateTodo }