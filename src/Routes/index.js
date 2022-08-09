import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from '../Pages/About';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import { ProtectedRoutes, ProtectedRoutes2 } from "./Protected-Routes";
import Error from "../Pages/Error";
import Header from "../components/Header/Header";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard/index";
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines";
import FullScreenModal from '../Modals/FullScreenModal'
import Exams from "../Pages/Student-panel/studentView/Exams/Exams";

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
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/examguidelines" element={<ExamGuildelines />} />
          <Route path='/fullScreenModal' element={<FullScreenModal />} />
          <Route path="/giveexam" element={<Exams />} />
        </Route>


        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Index;