import jwt from "jsonwebtoken";

const isAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.token;

        if(!token){
            return res.status(401).json({message:"Unauthorized user isAuthe!!!"});
        }
        const decoded=await jwt.verify(token,process.env.SECRET_KEY);
        console.log(decoded);
        
        if(!decoded){
            return res.status(401).json({message:"token is not valid !!!"});
        }
         req.id=decoded.userId
        console.log(token);
        next()
        
    }catch(error){
        console.error(error)
    }
}

export default isAuthenticated
        

