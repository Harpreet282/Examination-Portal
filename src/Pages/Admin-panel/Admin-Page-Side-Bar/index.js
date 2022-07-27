import React from 'react';
import './requestsSideBar.css';
import { NavLink } from 'react-router-dom';

function AdminPageSideBar() {
  return (
    <section className="admin-sidebar-page">
      <div>
        <div>
          <div className="side-bar">
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  New Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/dashboard/approvedRequests"
                >
                  Approved Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/dashboard/declinedRequests"
                >
                  Declined Requests
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPageSideBar;
