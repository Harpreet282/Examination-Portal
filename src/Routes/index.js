import React from 'react'
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import StudentDashboard from '../Pages/Student-panel/Student-Dashboard'
import AdminDashboard from '../Pages/Admin-panel/Admin-Dashboard';
import {ProtectedRoutes,ProtectedRoutes2} from './Protected-Routes';
import Profile from '../Pages/Profile-page/Profile'
import Modal from '../Pages/Student-panel/Timer/Modal'

const Index = () => {
  return (
    <>
<Routes>
    {/* <Route element={<ProtectedRoutes2/>}> */}
  {/* <Route element={<ProtectedRoutes2/>}> */}

  
=======
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
>>>>>>> 9bc6dec142c5ed6189272c91af0a8aded061927d
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
    <Route path="/modal" element={<Modal />} />
    {/* </Route> */}
    {/* </Route> */}
   
    <Route element={<ProtectedRoutes/>}>
       <Route path="/profile" element={<Profile />} />
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    <Route path="/studentDashboard/*" element={<StudentDashboard />} />
    </Route>
    <Route path="*" element={<Home/>} />
</Routes>
    </>
=======
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    <Route path="/examinerDashboard/*" element={<ExaminerDashbord />} />
     </Routes> 
    </> 
>>>>>>> 9bc6dec142c5ed6189272c91af0a8aded061927d
  )
}

export default Index