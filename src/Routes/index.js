import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About-Page/About';
import Home from '../Pages/Home-Page/Home';
import Login from '../Pages/Login-Page/Login';
import Profile from '../Pages/Profile-Page/Profile';
import SignUp from '../Pages/Signup-Page/SignUp';

const Index = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default Index