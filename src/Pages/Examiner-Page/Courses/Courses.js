import React from 'react'
import './Courses.css'

const Courses = () => {
  return (
    
         <section className='Student-Courses'>
      <div className='container all-containers my-5'>
      <div className='all-content'>
        <div className='row'>
        <div className='col-md'>
       
        <h3>Name: BCA</h3>
        <h5>Description:Bachelor Of Computer Application</h5>
         </div>   
        </div>
        <div className='row'>
        <div className='col-md my-2'>
        <button className='btn'>Add Student</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn '>Show All student</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn'>Subject Add</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn'>Subject Show</button>
        </div>
       
        </div>
        </div>
        </div>
        </section>
  )
}

export default Courses
