import mongoose from "mongoose";

const conversessionmodel=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    }]
},{timestamps:true})

export const Conversession=mongoose.model("converstion",conversessionmodel)