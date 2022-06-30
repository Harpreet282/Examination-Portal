import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About-Page/About';
import Home from '../Pages/Home-Page/Home';
import Login from '../Pages/Login-Page/Login';
import SignUp from '../Pages/Signup-Page/SignUp';
import Student from '../Pages/Student-Page/Buttons/Student';


const Index = () => {
  return (
    <>

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />

    <Route path='/' element={<Student />} />
    <Route path='/result' element={<Student />} />
    <Route path='/viewexams' element={<Student />} />
    <Route path='/transaction' element={<Student />} />
    
    </Routes>
    </>
  )
}

export default Index