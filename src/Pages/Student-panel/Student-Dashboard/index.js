import React from 'react';
import StudentPageSideBar from '../StudentPageSideBar';
import Index from '../../../Routes/Student-routes/index';
import './studentDashboard.css';

function StudentDashboard() {
  return (
    <section className="student-dashboard-page margin-from-top">
      <div className="">
        <div className="row m-0">
          <div className="col-md-2 left-content">
            <StudentPageSideBar />
          </div>
          <div className="col-md-10 right-content">
            <Index />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentDashboard;
