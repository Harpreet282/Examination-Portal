import React from 'react'
import SideBar from '../Side-Bar/SideBar'
import './examinerDashboard.css'
import Index from '../../../Routes/Examiner-Routes'

const ExaminerDashbord = () => {
  return (
    <div>
      <section className='examiner-dashboard-page'>
      <div className="container all-containers my-5">
     <div className="row">
      <div className="col-md-3 left-content">
      <SideBar/>
      </div>
      <div className="col-md-9">
        <Index/>
      </div>
     </div>
    </div>
    </section>
    </div>
  )
}

export default ExaminerDashbord
