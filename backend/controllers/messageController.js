import { Conversession } from "../models/conversessionmodel.js";
import { Messages } from "../models/messagemodel.js";
export const  sendMessage=async(req,res)=>{
    try{
        const senderId=req.id
        const receriverId=req.params.id;
        const {message}=req.body
       let gotconversation=await Conversession.findOne({
        participants:{$all :[senderId,receriverId]},
       }) ;
       if(!gotconversation){
        gotconversation=await Conversession.create({
            participants:[senderId,receriverId]
        })
       };
       const newMessage=await Messages.create({
        senderId,
        receriverId,
        message
       });
       if(newMessage){
        gotconversation.messages.push(newMessage._id)
       }
       await gotconversation.save()

       return res.status(201).json({
        message:"message sent successfully",
       })
    

    //    socket Io


    }catch(error){
        console.error(error)
    }
}

export const getmessage=async(req,res)=>{
    try{
        const senderId=req.id
        const receriverId=req.params.id;
        const coversassion=await Conversession.findOne({
            participants:{$all :[senderId,receriverId]},
        })
        .populate("messages")
        // console.log(coversassion.messages);
        
        return res.status(200).json(coversassion?.messages)

    }
    catch(error){
        console.error(error)
    }
}