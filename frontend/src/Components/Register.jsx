import React, { useState } from 'react';

import axios from 'axios'

import { Link, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        role: 'Student', // Default option
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const submithandler =async(e) => {
        e.preventDefault()
        // console.log(user);
       try{

        const res=await axios.post(`http://localhost:8000/api/v1/user/register`,formData,{
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
    setFormData({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        role: 'Student', // Default option

    })
}




    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add logic for form submission, like sending the data to the backend
      };
  return (
   <>

<div className="flex justify-center items-center h-screen mt-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={submithandler}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border  text-white  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border  text-white  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2  text-white  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2   text-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Institute">Institute</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
          <p className='text-center my-2'> Already have an account? <Link to="/login"> Login</Link></p>
            <button
            //   type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>

  





   
   </>
  )
}

export default Register