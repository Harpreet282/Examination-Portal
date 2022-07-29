import React from 'react'
import './sideBar.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import { EXAMINER_PROFILE } from '../../../Apis/apis';

const SideBar = () => {
  return (
    <>
    <section className='examiner-sidebar-page'>
        <div className="side-bar">
        <ul>
        {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/" >
               Create Students
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/course" >
                  <button type="button" className="btn btn-lg btn-block" data-backdrop="false" data-toggle="modal" data-target="#exampleModal">Courses</button> 
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/" >
                  View Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/viewAllStudents" >
                    View Students
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/examinerDashboard/viewAllSubject" >
                  View Subject
                  </NavLink>
                </li> */}

        </ul>
    </div>
        </section>
        </>
  )
}

export default SideBar