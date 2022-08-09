import './createCourse.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CREATE_COURSE_API } from '../../../Apis/apis';

function CreateCourse() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const chaneHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('data'));
    axios.post(CREATE_COURSE_API, data, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const { data } = res;
        console.log(data);
        navigate('/examinerDashboard/CreateSubject', { state: { courseId: res.data.data.course._id } });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>

      <section className="Student-Courses">
        <div className="container all-containers  my-5">
          <div className="all-content">
            <h1>Create Course</h1>
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" onChange={chaneHandler} placeholder="Name" name="name" />
                </div>
                <div className="col-md-6">
                  <input type="text" onChange={chaneHandler} placeholder="Description" name="description" />
                </div>

              </div>

              <div className="row">
                <button className="btn">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateCourse;
