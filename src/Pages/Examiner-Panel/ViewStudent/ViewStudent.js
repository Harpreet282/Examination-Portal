import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewStudent.css';
import { useLocation } from 'react-router-dom';
import { VIEW_STUDENT } from '../../../Apis/apis';

function ViewStudent() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('data'));
    axios.get(VIEW_STUDENT + location.state.courseId, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res);
        setData(res.data.data.students);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <table className="table my-4">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      {
        data.map((item) => (

          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>

            </tr>
          </tbody>

        ))
    }
    </table>
  );
}

export default ViewStudent;
