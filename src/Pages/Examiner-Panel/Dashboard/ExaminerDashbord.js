import React from 'react'
import SideBar from '../Side-Bar/SideBar'
import './examinerDashboard.css'
import Index from '../../../Routes/Examiner-Routes'

const ExaminerDashbord = () => {
  return (
    <div>
      <section className='examiner-dashboard-page'>
      
     <div className="row main-content">
      <div className="col-md-3 left-content">
      <SideBar/>
      </div>
      <div className="col-md-9 right-content">
        <Index/>
      </div>
     </div>

    </section>
    </div>
  )
}

export default ExaminerDashbord