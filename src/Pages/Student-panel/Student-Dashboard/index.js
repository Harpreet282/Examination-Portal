import React from 'react'
import StudentPageSideBar from '../StudentPageSideBar'
import Index from '../../../Routes/Student-routes/index'
import './studentDashboard.css'

const StudentDashboard = () => {
  return (
    <section className="student-dashboard-page">
    <div className="container all-containers my-5">
      <div className="row">
        <div className="col-md-3 left-content">
          <StudentPageSideBar />
        </div>
        <div className="col-md-9">
          <Index />
        </div>
      </div>
    </div>
  </section>
  )
}

export default StudentDashboard