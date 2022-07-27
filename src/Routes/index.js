import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import StudentDashboard from '../Pages/Student-panel/Student-Dashboard';
import AdminDashboard from '../Pages/Admin-panel/Admin-Dashboard';
import {
  ProtectedRoutes, ProtectedRoutes2, AdminProtectedRoutes, ExaminerProtectedRoutes, StudentProtectedRoutes,
} from './Protected-Routes';
import Modal from '../Pages/Student-panel/Timer/Modal';
import ExaminerDashbord from '../Pages/Examiner-Panel/Dashboard/ExaminerDashbord';
import Error from '../Pages/Error';
import Header from '../components/Header/Header';
import Profile from '../Pages/Profile';

function Index() {
  return (
    <>
      <Header />

      <Routes>
      <Route element={<ProtectedRoutes2 />}>
        <Route path="/" element={<Home />} />
    
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/modal" element={<Modal />} />

        </Route>

        <Route element={<ProtectedRoutes />}>

        <Route path="/profile" element={<Profile />} />     
          <Route path="/modal" element={<Modal />} />

          <Route element={<AdminProtectedRoutes />}>
            <Route path="/adminDashboard/*" element={<AdminDashboard />} />
          </Route>

          <Route element={<ExaminerProtectedRoutes />}>
            <Route path="/examinerDashboard/*" element={<ExaminerDashbord />} />
          </Route>

          <Route element={<StudentProtectedRoutes />}>
            <Route path="/studentDashboard/*" element={<StudentDashboard />} />
          </Route>

        </Route>

        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default Index;
