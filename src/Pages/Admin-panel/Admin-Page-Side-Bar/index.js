import React from "react";
import "./requestsSideBar.css";
import { NavLink } from "react-router-dom";

const AdminPageSideBar = () => {
  return (
    <section className="admin-sidebar-page">
      <div>
        <div>
          <div className="side-bar">
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link" to="/adminDashboard/">
                  New Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/adminDashboard/approvedRequests"
                >
                  Approved Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/adminDashboard/declinedRequests"
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
};

export default AdminPageSideBar;
