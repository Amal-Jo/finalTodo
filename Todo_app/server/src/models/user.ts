import {Schema,model} from 'mongoose'
import * as mongoose from 'mongoose'
import { IUser } from '../types/todo';
import uniqueValidator = require("mongoose-unique-validator");
//import * as uniqueValidator from 'mongoose-unique-validator'

const userSchema:Schema = new Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minlength:6
        },
        name:{
            type:String,
            required:true
        },
        todos: [{ type: mongoose.Schema.Types.ObjectId,  ref: 'Todo' }]
    }
);

userSchema.plugin(uniqueValidator)

export default model<IUser>('User',userSchema)

