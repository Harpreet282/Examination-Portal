import React from 'react'
import SideBar from '../Side-Bar/SideBar'
import './examinerDashboard.css'
import Index from '../../../Routes/Examiner-Routes'

const ExaminerDashbord = () => {
  return (
    <>
      <section className='examiner-dashboard-page margin-from-top'>
      
     <div className="row main-content">
      <div className="col-md-2 left-content">
      <SideBar/>
      </div>
      <div className="col-md-10 right-content">
        <Index/>
      </div>
     </div>

    </section>
    </>
  )
}

export default ExaminerDashbord