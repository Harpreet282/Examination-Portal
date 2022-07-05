import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About-Page/About';
import Home from '../Pages/Home-Page/Home';
import Login from '../Pages/Login-Page/Login';
import SignUp from '../Pages/Signup-Page/SignUp';
import AdminDashboard from '../Pages/Admin-panel/Dashboard/Dashboard'
import ExaminerDashbord from '../Pages/Examiner-Panel/Dashboard/ExaminerDashbord';
const Index = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    <Route path="/examinerDashboard/*" element={<ExaminerDashbord />} />
     </Routes> 
    </> 
  )
}

export default Index