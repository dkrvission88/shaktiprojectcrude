import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Extract the user ID from the URL

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    role: 'Student', // Default role
  });

  // Fetch user data by ID when the component mounts
  useEffect(() => {
    // const fetchUserData = async (id) => {
    //   try {
    //     const res = await axios.get(`http://localhost:8000/api/v1/user/singledata/${id}`);
    //     console.log(res);
        
    //     if (res.data.success) {
    //       setFormData({
    //         fullname: res.data.users.fullname,
    //         email: res.data.users.email,
    //         phone: res.data.users.phone,
    //         role: res.data.users.role,
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data', error);
    //   }
    // };

    // fetchUserData();
     axios.get(`http://localhost:8000/api/v1/user/singledata/${id}`).then((result)=>{console.log(result.data)
      setFormData(result.data)

     }
     ).catch((error)=>console.log(error)
     )


  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submithandler =  (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/v1/user/update/${id}`, formData)
    .then((result)=>{
      console.log(result.data)
      toast.success(result.data.message);
      navigate('/about');

    }).catch((error)=>console.log(error)
    )


    // try {
    //   const res = await axios.patch(`http://localhost:8000/api/v1/user/update/${id}`, formData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     withCredentials: true,
    //   });

    //   if (res.data.success) {
    //     toast.success(res.data.message);
    //     navigate('/login');
    //   } else {
    //     toast.error(res.data.message);
    //   }
    // } catch (error) {
    //   console.error('Error updating user', error);
    //   toast.error('Error updating user');
    // }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen mt-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Update User</h2>
          <form onSubmit={submithandler}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
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
                className="w-full px-3 text-white py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
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
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Institute">Institute</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <p className="text-center my-2">Already have an account? <Link to="/login">Login</Link></p>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
