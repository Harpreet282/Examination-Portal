import React, { useEffect, useState } from 'react';
import './viewCourse.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VIEW_COURSES } from '../../../Apis/apis';

function ViewCourses() {
  const [request, setDeclineRequest] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('data'));
    axios.get(VIEW_COURSES, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data.data.examinerCourses);
        setDeclineRequest(res.data.data.examinerCourses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div>
        <section className="examinerDashboard">
          <div className="container  my-5">
            <div className="row all-content">
              {
            request.map((item) => (
              <div className="card text-center mx-3 my-2 course-card">

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button onClick={() => navigate('/examinerDashboard/AddStudent', { state: { courseId: item._id } })} className="btn AddStudent">Add Student </button>
                  <button onClick={() => navigate('/examinerDashboard/viewStudents', { state: { courseId: item._id } })} className="btn showAllStudent"> All students</button>
                  <button onClick={() => navigate('/examinerDashboard/AddSubject', { state: { courseId: item._id } })} className="btn SubjectAdd">Subject Add</button>
                  <button onClick={() => navigate('/examinerDashboard/viewAllSubject', { state: { courseId: item._id } })} className="btn subjectShow">Subject Show</button>
                </div>

              </div>
            ))
        }

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ViewCourses;
