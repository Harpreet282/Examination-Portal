import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// import Profile from '../Pages/Profile-page/Profile';
import SignUp from '../Pages/Signup';
import AdminDashboard from '../Pages/Admin-panel/Admin-Dashboard';
import {ProtectedRoutes,ProtectedRoutes2} from './Protected-Routes';

const Index = () => {
  return (
    <>
<Routes>
  <Route element={<ProtectedRoutes2/>}>

  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </Route>
   
    <Route element={<ProtectedRoutes/>}>
       {/* <Route path="/profile" element={<Profile />} /> */}
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    </Route>
    <Route path="*" element={<Home/>} />
    </Routes>
    </>
  )
}

export default Index