import React from 'react';
import './Profile.css';
import * as myConstants from '../../Constants';
import AdminProfile from '../Admin-panel/Profile';
import StudentProfile from '../Student-panel/Profile';
import About from '../About'

function Profile() {

  return (
    <section className="profile-page margin-from-top">
      {
        JSON.parse(localStorage.getItem('data')).userType===myConstants.ADMIN?
        <AdminProfile/>:
        JSON.parse(localStorage.getItem('data')).userType===myConstants.STUDENT?
        <StudentProfile/>:
        <About/>
      }
     
    </section>
  );
}

export default Profile;
