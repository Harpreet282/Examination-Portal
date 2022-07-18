import React from 'react'
import './StudentSignup.css';

const StudentSignup = () => {
  return (
    <section className='Student-Signup'>
      <div className='container all-containers my-5'>
        <div className='row'>
          <h1>Please Enter Student's Details to make their Accounts</h1>
        <div className='col-md-12 all-content'>
        <div className='content'>
        <form className='px-5'>
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" placeholder="First Name" name='firstName'/>
            </div>
            <div className='col-md-6'>
            <input type="text" placeholder="Last Name" name='lastName'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" placeholder="Email" name='email'/>
            </div>
            <div className='col-md-6'>
            <input type="text" placeholder="Mobile Number" name='mobileNumber'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" placeholder="Father Name" name='fatherName'/>
            </div>
            <div className='col-md-6'>
            <input type="text" placeholder="Mother Name" name='MotherName'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <input type="date" placeholder="Date Of Birth" name='dob'/>
            </div>
            <div className='col-md-6'>
            <select name="courses" className="form-control selectPlaceholder">
              <option className=''  value="" disabled selected>Courses</option>
              <option>Html</option>
              <option>css</option>
            </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" placeholder="City" name='city'/>
            </div>
            <div className='col-md-6'>
            <input type="text" placeholder="Address" name='address'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
            <select name="courses" className="form-control">
              <option  value="" disabled selected>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            </div>
            <div className='col-md-6'>
            <input type="password" placeholder="Create Password" name='password'/>
            </div>
          </div>
          <div>
            <button className='btn'>Sign up</button>
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default StudentSignup
