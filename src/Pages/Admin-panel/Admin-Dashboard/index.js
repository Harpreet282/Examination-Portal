import React from "react";
import "./dashboard.css";
import AdminPageSideBar from "../Admin-Page-Side-Bar";
import Index from "../../../Routes/Admin-routes";

const AdminDashboard = () => {
  return (
    <section className="dashboard-page margin-from-top">
      <div className="">
        <div className="row m-0">
          <div className="col-md-2 left-content">
            <AdminPageSideBar />
          </div>
          <div className="col-md-10">
            <Index />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
