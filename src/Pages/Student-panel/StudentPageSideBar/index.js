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
                <NavLink className="nav-link" to="/dashboard/">
                  Exam
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/dashboard/results"
                >
                  Results
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/dashboard/transaction"
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
