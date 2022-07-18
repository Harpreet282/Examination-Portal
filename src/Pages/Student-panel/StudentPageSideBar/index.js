import React from 'react';
import './studentSideBar.css';
import { NavLink } from 'react-router-dom';

function StudentSideBar() {
  return (
    <section className="student-sidebar-page">
      <div>
        <div>
          <div className="side-bar">
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studentDashboard/">
                  Exam
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/studentDashboard/results"
                >
                  Results
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/studentDashboard/transaction"
                >
                  Transaction History
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentSideBar;
