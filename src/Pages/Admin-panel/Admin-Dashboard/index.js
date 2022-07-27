import React from 'react';
import './dashboard.css';
import AdminPageSideBar from '../Admin-Page-Side-Bar';
import Index from '../../../Routes/Admin-routes';

function AdminDashboard() {
  return (
    <section className="admin-dashboard-page margin-from-top">
      <div className="">
        <div className="row m-0">
          <div className="col-md-2 col-sm-4 left-content">
            <AdminPageSideBar />
          </div>
          <div className="col-md-10 col-sm-8 right-content">
            <Index />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
