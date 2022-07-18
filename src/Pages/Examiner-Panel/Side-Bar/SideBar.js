import React from 'react'
import './sideBar.css'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <section className='examiner-sidebar-page'>
   
    <div>
        <div >
        <div className="side-bar">
        <ul>
        {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/" >
               Create Students
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard" >
                  Create Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/viewCourse" >
                  View Courses
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/examDetails" >
                  Exam Details
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/viewAllSubject" >
                  View Subject
                  </NavLink>
                </li> */}

        </ul>
    </div>
       
    </div>
        </div>
        </section>
  )
}

export default SideBar