import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../Pages/About-Page/About';
import Home from '../Pages/Home-Page/Home';
import Login from '../Pages/Login-Page/Login';
// import Profile from '../Pages/Profile-page/Profile';
import SignUp from '../Pages/Signup-Page/SignUp';
<<<<<<< HEAD
=======
import AdminDashboard from '../Pages/Admin-panel/Dashboard/Dashboard';
// import NewRequests from '../Pages/Admin-panel/New-Requests/NewRequests';
// import ApprovedRequests from '../Pages/Admin-panel/Approved-Requests/ApprovedRequests';
// import DeclinedRequests from '../Pages/Admin-panel/Declined-Requests/DeclinedRequests';
>>>>>>> 79b68a115711de00be177cdbefcd005ff578ed16

const Index = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route path="/profile" element={<Profile />} /> */}
    <Route path="/adminDashboard/*" element={<AdminDashboard />} />
    {/* <Route path="/newRequests" element={<NewRequests />} />
    <Route path="/approvedRequests" element={<ApprovedRequests />} />
    <Route path="/declinedRequests" element={<DeclinedRequests />} /> */}
    </Routes>
    </>
  )
}

export default Index