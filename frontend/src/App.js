import React from 'react'
// import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import Signup from './Components/Signup'
import Login from './Components/Login'
// import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register'
import Crude from './Components/Pages/Crude'
import Homes from './Components/Pages/Homes'
import Update from './Components/Pages/Update';
import MessageSection from './Components/AllMessages/MessageSection';

// const router=createBrowserRouter([{
//   path: '/', 
//   element: <Homes/>
// },{
//   path: '/register',
//   element: <Signup />
// },{
//   path: '/login',
//   element: <Login/>
  
// },{
//   path: '/regi',
//   element: <Register/>
  
// },
// {
//   path: '/crude',
//   element: <Crude/>
  
{/* <div className='p-4 h-screen flex items-center justify-center '>
 <RouterProvider router={router}></RouterProvider>
</div> */}
// }
// ])
export const App = () => {
  return (
   <>
   <Router>
      <div className="App">
        <Homes />
        <Routes>
          {/* <Route path="/" element={<message />} /> */}
          <Route path="/about" element={<Crude/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/messagesection" element={<MessageSection/>} />


        </Routes>
      </div>
    </Router>

  </>
  )
}
