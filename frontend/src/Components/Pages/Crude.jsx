import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Crude = () => {
  const [datat, setDatat] = useState([]);
  const { id } = useParams();

  // Fetch all user data
  const getdat = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/user/show');
      setDatat(res.data.users)
      console.log(res);
      
      ; // Set the fetched data to the state
    } catch (error) {
      console.error("Data Fetching Problem", error);
    }
  };

  useEffect(() => {
    console.log(datat)
    getdat(); // Call fetch data on component load
  }, []);

  // Delete a user
  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/user/del/${id}`);
      // Filter out the deleted user from the current state
      setDatat(datat.filter(item => item._id !== id));
      console.log("Data is Deleted Successfully!!");
    } catch (error) {
      console.error("Data deleting Problem", error);
    }
  };

  return (
    <div className="fluid-container mmm">
      <table className="table table-success">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {datat.map(item => (
            <tr key={item._id}>
              <td>{item.fullname}</td>
              <td className="table-dark">{item.phone}</td>
              <td>{item.email}</td>
              <td className="table-dark">{item.role}</td>
              <td>
                <Link to={`/update/${item._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
                <button className="btn btn-danger ms-1" onClick={() => handledelete(item._id)}>
                  Delete
                </button>
                <Link to="/register">
                  <button className="btn btn-success ms-1">Add</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crude;
