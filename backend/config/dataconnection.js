import mongoose from "mongoose";

const dbconnect=async()=>{
    await mongoose.connect(process.env.DATABASE).then(()=>{
        console.log("Connected to MongoDB!!")
    })
    .catch(()=>{console.log("database is not connected !!");
    })
}

export default dbconnect
