import React from 'react'
import './dashboard.css'
import Index from '../../../Routes/Admin-routes'
import Requests from '../Requests/Requests'

const AdminDashboard = () => {
  return (
    <section className='dashboard-page'>
      <div className="container all-containers my-5">
     <div className="row">
      <div className="col-md-3 left-content">
      <Requests/>
      </div>
      <div className="col-md-9">
        <Index/>
      </div>
     </div>
    </div>
    </section>
  )
}

export default AdminDashboard