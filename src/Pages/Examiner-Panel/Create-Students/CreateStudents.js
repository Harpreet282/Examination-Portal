import React, { useState } from 'react';
import './createStudents.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { CREATE_STUDENT } from '../../../Apis/apis';

function CreateStudents() {
  const [data, setdata] = useState([]);
  const location = useLocation();
  console.log(location.state.courseId);
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    const { token } = JSON.parse(localStorage.getItem('data'));
    const Data = {
      ...data,
      courseID: location.state.courseId,
    };
    axios.post(CREATE_STUDENT, Data, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const { data } = res;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <section className="Student-Signup">
        <div className="container  my-5">
          <div className="row">
            <h2>Please Enter Student's Details to make their Accounts</h2>
            <div className="col-md-12 all-content">
              <div className="content">
                <form onSubmit={handleSubmit} className="px-5">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="First Name" name="firstName" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="Last Name" name="lastName" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="Email" name="email" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="Mobile Number" name="mobileNumber" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="Father Name" name="fatherName" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="Mother Name" name="motherName" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="date" onChange={changeHandler} placeholder="Date Of Birth" name="dob" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" onChange={changeHandler} placeholder="State" name="state" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input onChange={changeHandler} type="text" placeholder="City" name="city" />
                    </div>
                    <div className="col-md-6">
                      <input onChange={changeHandler} type="text" placeholder="Address" name="address" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <select onChange={changeHandler} name="gender" className="form-control">
                        <option name="gender" value="" disabled selected>Gender</option>
                        <option name="gender" value="MALE">Male</option>
                        <option name="gender" value="FEMALE">Female</option>
                        <option name="gender" value="OTHER">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input onChange={changeHandler} type="password" placeholder="Create Password" name="password" />
                    </div>
                  </div>
                  <div>
                    <button className="btn">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateStudents;
