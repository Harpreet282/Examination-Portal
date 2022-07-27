import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import About from '../Pages/About';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import {
  ProtectedRoutes, ProtectedRoutes2
} from './Protected-Routes';
import Modal from '../Pages/Student-panel/Timer/Modal';
import Error from '../Pages/Error';
import Header from '../components/Header/Header';
import Profile from '../Pages/Profile';
import Dashboard from '../Pages/Dashboard/index'
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
        {/* <Route path="/" element={<Profile />} /> */}
        <Route path="/" element={<Profile />} />     
          <Route path="/modal" element={<Modal />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard/*" element={<Dashboard />} />        
</Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default Index;
