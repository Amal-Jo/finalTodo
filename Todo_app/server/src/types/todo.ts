import { Document } from "mongoose"

//to interact with MongoDB
export interface ITodo extends Document {
  name: string
  completed: boolean
}

export interface IUser extends Document {
  email:string
  password:string
  name:string
  }
