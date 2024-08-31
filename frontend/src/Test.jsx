import React, { useEffect, useState } from 'react'
// import axios from 'axios'

export const Test = () => {

    const [userdata,setUserdata]=useState([])

    let empdata=[{name:"bhumika",country:"India"},
        {name:"richa",country:"Nepal"},
        {name:"vinay",country:"US"},
        {name:"vaibhav",country:"India"},
        {name:"priya",country:"UK"},
        {name:"vijay",country:"US"}


    ]


    
           let datafromApi=empdata.reduce((acc,curval)=>{
    
            if(acc.country==="india"){
                return acc.name}
            // }else if(acc.country="nepal"){
            //     return acc.name
            // }
    
           },empdata[0])
           console.log(`country name ${datafromApi.country} name is ${datafromApi.name}`);
    const apidata=async()=>{
    //    const res=await axios.get('https://localhost:34553/getUsersData')
    //    setUserdata(res.data)

       


    }
    useEffect(()=>{
        apidata()
        
    },[])





  return (
   <>

   <h1>kjrfklw</h1>


   
   
   </>



  )
}
