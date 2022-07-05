import React from 'react'
import './requests.css'
import { NavLink } from 'react-router-dom'

const Requests = () => {
  return (
    <section className='requests-page '>
   
<div>
    <div >
    <div className="side-bar">
    <ul>
    <li className="nav-item">
              <NavLink className="nav-link" to="/adminDashboard/" >
            New Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminDashboard/approvedRequests" >
              Approved Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminDashboard/declinedRequests" >
              Declined Requests
              </NavLink>
            </li>
    </ul>
</div>
   
</div>
    </div>
    </section>
  )
}

export default Requests