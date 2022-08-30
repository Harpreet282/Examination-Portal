
import React from 'react';
import './Profile.css';
import * as myConstants from '../../Constants';
import AdminProfile from '../Admin-panel/Profile';
import StudentProfile from '../Student-panel/Profile';
import ExaminerProfile from '../Examiner-Panel/ExaminerProfile/ExaminerProfile'

function Profile() {
  return (
    <section className="profile-page margin-from-top">
     
      {
        JSON.parse(localStorage.getItem('data')).userType===myConstants.ADMIN?
        <AdminProfile/>:
        JSON.parse(localStorage.getItem('data')).userType===myConstants.STUDENT?
        <StudentProfile/>:
        <ExaminerProfile/>
      }
    </section>
  );
  
}

export default Profile;
