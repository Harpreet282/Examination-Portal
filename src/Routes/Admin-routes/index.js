import React from 'react'
import { Routes, Route } from "react-router-dom";
import ApprovedRequests from '../../Pages/Admin-panel/Approved-Requests/ApprovedRequests';
import NewRequests from '../../Pages/Admin-panel/New-Requests/NewRequests';
import DeclinedRequests from '../../Pages/Admin-panel/Declined-Requests/DeclinedRequests';
// import { useLocation } from 'react-router-dom';  

const Index = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<NewRequests />} />
    <Route path="/newRequests" element={<NewRequests />} />
    <Route path="/approvedRequests" element={<ApprovedRequests />} />
    <Route path="/declinedRequests" element={<DeclinedRequests />} />
    </Routes>
    </>
  )
}

export default Index