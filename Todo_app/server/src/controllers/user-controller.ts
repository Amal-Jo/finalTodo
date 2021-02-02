import{Request,Response} from 'express'
import bcrypt from 'bcrypt'
import {body, validationResult} from 'express-validator'
import userModel from '../models/user'
import {IUser} from '../types/todo'
import * as jwt from 'jsonwebtoken'



export const getUsers= async(req:Request,res:Response)=>{
    
    try {
        //we are not displaying password
        //so either use it lik -password or email,name
        const users:IUser[] = await userModel.findById({},'-password')
        if(!users){
            res.status(400).json({msg:'user does not exist'})
        }
        res.status(200).json({users})
        
    } catch (error) {
        throw error
        
    }


}

export const signUp= async(req:Request,res:Response)=>{

    const {name,email,password} = req.body
    let existingUser
    try {
        const errors:any= validationResult(req)
        existingUser = await userModel.findOne({email:email})
        
        if(!errors.isEmpty()){
            return res.status(401).json({errors:errors.array()})
        }

        
    } catch (error) {
        throw error 
        
    }
    if(existingUser){
        return res.status(401).json({msg:"There is already a user with this email"})
        //console.log("User exists already, please login instead")
    }
    //hashing password
    let hashedPassword
    try {
        hashedPassword = await bcrypt.hash(password,10)
        
    } catch (error) {
        throw error
        
    }

    const createduser = new userModel({
        name,
        email,
        password:hashedPassword,
        todos:[]
        
    })
    try {
        await createduser.save()
        
    } catch (error) {
        console.log("sign up failed")
        
    }
    //json web token 
    
    let token
    try {
        token = jwt.sign(
            {userId:createduser.id,email:createduser.email},
            'SECRET_KEY',
            {expiresIn:'1h'}
            
        )
        
    } catch (error) {
        res.status(401).json({msg:"sign up failed,please try again later"}) 
    }

    res.status(200).json({token,
                            user:{id:createduser.id,
                                  name:createduser.name,
                                  email:createduser.email
                        }})
    
}

export const login= async(req:Request,res:Response)=>{
    const {email,password} =req.body
    
    let existingUser

    try {
        existingUser = await userModel.findOne({email:email})
        const errors:any= validationResult(req)
        
    } catch (error) {
        res.status(401).json({msg:"log in failed"})
        
    }
    if(!existingUser){
        res.status(401).json({msg:"Invalid credentials, could not log you in"})

    }
    let isValidPassword = false

    try {
        isValidPassword = await bcrypt.compare(password,existingUser.password)
        
    } catch (error) {
        res.status(401).json({msg:'Could not log you in, please check your credentials and try again.'})
    }
    if(!isValidPassword){
        res.status(401).json({msg:'invalid login, please check your credentials and try again.'})
  
    }
    //json web token 
   
    let token
    try {
        token = jwt.sign(
            {userId:existingUser.id,email:existingUser.email},
            'SECRET_KEY',
            {expiresIn:'1h'}
            
        )
        
    } catch (error) {
        res.status(401).json({msg:"sign up failed,please try again later"}) 
    }
    res.json({token,
        user:{
        id:existingUser.id,
        name:existingUser.name,
        email:existingUser.email,

    }
        
        
    })
    
}
