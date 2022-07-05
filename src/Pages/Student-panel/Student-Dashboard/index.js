import React from 'react'

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