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
import ExaminerDashbord from '../Pages/Examiner-Panel/Dashboard/ExaminerDashbord'
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines"
import GiveExam from '../Pages/Student-panel/studentView/Exams/GiveExam';
import KeyModal from '../Modals/KeyModal';
import FullScreenModal from '../Modals/FullScreenModal';
 


const Index = () => {
  return (
    <>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/keymodal" element={<KeyModal />} />
    <Route path="/fullScreenModal" element={<FullScreenModal/>} />

   
    <Route element={<ProtectedRoutes/>}>
       <Route path="/profile" element={<Profile />} />
      <Route path="/adminDashboard/*" element={<AdminDashboard />} />
      <Route path="/studentDashboard/*" element={<StudentDashboard />} />
      <Route path="/adminDashboard/*" element={<AdminDashboard />} />
      <Route path="/examinerDashboard/*" element={<ExaminerDashbord />} />

      <Route path="/examguidelines" element={<ExamGuildelines />} />
      <Route path='/giveexam' element={<GiveExam />} />
      <Route path="*" element={<Home/>} />
    </Route>
     </Routes> 
    </> 
  )
}

export default Index