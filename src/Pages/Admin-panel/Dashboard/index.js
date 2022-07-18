import React from 'react';
import './dashboard.css';
import Requests from '../Admin-Page-Side-Bar/Requests';
import Index from '../../../Routes/Admin-routes';

function AdminDashboard() {
  return (
    <section className="dashboard-page">
      <div className="container all-containers my-5">
        <div className="row">
          <div className="col-md-3 left-content">
            <Requests />
          </div>
          <div className="col-md-9">
            <Index />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
