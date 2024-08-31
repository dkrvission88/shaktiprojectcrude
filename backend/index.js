import express from "express"
const app=express()
import dbconnect from "./config/dataconnection.js"
import dotenv from "dotenv"
dotenv.config({})
import userRouter from "./routes/usreroute.js"
import messageRoute from './routes/messageRoute.js'
import allMessageRoute from "./routes/allMessageRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"




// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:"http://localhost:3000",
    credentials:true,
}
app.use(cors(corsOption))
    



// routes
app.use("/api/v1/user",userRouter)
app.use("/api/v1/message",messageRoute)
app.use("/api/v1/messageall",allMessageRoute)
// http://localhost:8000/api/v1/user/register



const port=process.env.PORT || 8080
app.listen(port,()=>{
    dbconnect()
    console.log(`server is running on port ${port}`)

})
