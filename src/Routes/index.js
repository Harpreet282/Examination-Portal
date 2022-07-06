import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import StudentDashboard from '../Pages/Student-panel/Student-Dashboard'
import AdminDashboard from '../Pages/Admin-panel/Admin-Dashboard';
import {ProtectedRoutes,ProtectedRoutes2} from './Protected-Routes';
import Profile from '../Pages/Profile-page/Profile'
import Modal from '../Pages/Student-panel/Timer/Modal'
import ExaminerDashbord from '../Pages/Examiner-Panel/Dashboard/ExaminerDashbord'



const Index = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/modal" element={<Modal />} />
   
    <Route element={<ProtectedRoutes/>}>
       <Route path="/profile" element={<Profile />} />
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    <Route path="/studentDashboard/*" element={<StudentDashboard />} />
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    <Route path="/examinerDashboard/*" element={<ExaminerDashbord />} />
    <Route path="*" element={<Home/>} />
    </Route>
     </Routes> 
    </> 
  )
}

export default Index