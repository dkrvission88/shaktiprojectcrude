import mongoose from "mongoose";

const usermodel=new mongoose.Schema({
    fullname:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
    },
    role: { type: String, enum: ["Student", "Teacher", "Institute"]}



})

export const User=mongoose.model("User",usermodel)