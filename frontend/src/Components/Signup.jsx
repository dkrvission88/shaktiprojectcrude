import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""

    })
    const handlecheckbox=(gender)=>{
        setUser({...user,gender})
    }

    const submithandler =async(e) => {
        e.preventDefault()
        // console.log(user);
       try{

        const res=await axios.post(`http://localhost:8000/api/v1/user/register`,user,{
            headers:{
                "Content-Type":"application/json"},
                withCredentials:true
        })

        // console.log(res);
        if(res.data.success){
            navigate("/login")
            toast.success(res.data.message)
        }
        
    }
    catch(error){
     console.log(error);
    }
    setUser({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""

    })
}







return (
    <div className='min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
            <h1 className='text-3xl font-bold text-center text-gray-300'>Signup</h1>
            <form action='' onSubmit={submithandler}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input value={user.fullname} onChange={(e) => { setUser({ ...user, fullname: e.target.value }) }}
                        className='w-full input input-bordered h-10'
                        type='text'
                        placeholder='Full Name'></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>User Name</span>
                    </label>
                    <input value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                        className='w-full input input-bordered h-10'
                        type='text'
                        placeholder='User Name'></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                        className='w-full input input-bordered h-10'
                        type='password'
                        placeholder='Password'></input>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Conform Password</span>
                    </label>
                    <input value={user.confirmPassword} onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }}
                        className='w-full input input-bordered h-10'
                        type='password'
                        placeholder='Conform Password'></input>
                </div>
                <div className='flex items-center my-4'>
                    {/* <div className='flex items-center'>
                        <p>Male</p>
                        <input type="checkbox" checked={user.gender==='male'} onChange={()=>handlecheckbox('male')} defaultChecked className="checkbox checkbox-accent mx-2" />
                    </div>
                    <div className='flex items-center'>
                        <p>Female</p>
                        <input type="checkbox" checked={user.gender==='female'} onChange={()=>handlecheckbox('female')} defaultChecked className="checkbox checkbox-accent mx-2" />
                    </div> */}
                </div>
                <p className='text-center my-2'> Already have an account? <Link to="/login"> Login</Link></p>
                <div >
                    <button type='submit' className='btn btn-block  btn-sm mt-2 border border-slate-700'>Signup</button>
                </div>
            </form>
        </div>
    </div>




)
}

export default Signup










