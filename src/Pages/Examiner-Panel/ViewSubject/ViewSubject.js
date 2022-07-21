import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { VIEW_SUBECTS } from '../../../Apis/apis';
import './ViewSubject.css';

function ViewSubject() {
  const location = useLocation();
  const [Subjects, setSubjects] = useState([]);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('data'));
    axios.get(VIEW_SUBECTS + location.state.courseId, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data.data.subjects, 'subjects');
        setSubjects(res.data.data.subjects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.state.courseId]);
  return (
    <div className='viewSubject'>
      <h1>Subject List</h1>
      <table className="table my-4">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Remove</th>
            <th scope="col">Create Exam</th>
          </tr>
        </thead>
        {
        Subjects.map((item, i) => (
          <tbody key={item.subjectID}>
            <tr>
              <td>{item.name}</td>
              <td><button className="btn">Remove</button></td>
              <td><button className="btn">Create Exam</button></td>
            </tr>
          </tbody>

        ))
      }
      </table>
    </div>
  );
}

export default ViewSubject;
