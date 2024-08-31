import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { setAuthUser } from '../REDUX/usreSlice'
const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        eamil: "",
        password: "",
    })
    const submithandler = async(e) => {
        e.preventDefault()
        try{

            const res=await axios.post(`http://localhost:8000/api/v1/user/login`,user,{
                headers:{
                    "Content-Type": "application/json",
                },
                withCredentials:true
            })
                

            console.log(res.data);
            dispatch(setAuthUser(res.data))

            if(res.data.success){
                navigate("/messagesection")
                toast.success(res.data.message)
            }

        }
        catch(error){
            toast.error(error.response.data.message)
           
        }
    }
    return (
        <div className='min-w-96 mx-auto p-4 h-screen flex items-center justify-center w-1'>
            <div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
                <h1 className='text-3xl font-bold text-center text-gray-300'>Login</h1>
                <form onSubmit={submithandler} action=''>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Name</span>
                        </label>
                        <input value={user.username} onChange={(e)=>setUser({...user,email:e.target.value})}
                            className='w-full input input-bordered h-10 text-white'
                            type='text'
                            placeholder='User Name'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                            className='w-full input input-bordered h-10 text-white'
                            type='password'
                            placeholder='Password'></input>
                    </div>
                    <p className='text-center my-2'> Don't have an account? <Link to="/register"> Signup</Link></p>
                    <div >
                        <button className='btn btn-block  btn-sm mt-2 border-slate-700' type='submit'> Login</button>
                       
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Login






        















