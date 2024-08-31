import mongoose from "mongoose";


const messagemodel=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,

    },
    receriverId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,

    },
    message:{
        type:String,
        required:true,
    }
},{timestamps:true})


export const Messages=mongoose.model("Message",messagemodel)