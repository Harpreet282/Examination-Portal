import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './profile.css';
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../../Assets/images';
import { ADMIN_PROFILE } from '../../../Apis/apis';
import Loader from '../../../Loader';
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';

function AdminProfile() {
  
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem('data'));
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    dispatch(loaderValueTrue());

    axios.get(
     ADMIN_PROFILE,{
        headers: { Authorization: `Bearer ${data.token}` },
      },
    ).then((res) => {
      // console.log('res',res)
      dispatch(loaderValueFalse());
       console.log(res.data.data.adminDetails);
      setProfileData(res.data.data.adminDetails);
    }).catch((err) => {
      dispatch(loaderValueFalse());
      console.log(err);
    });
  }, []);

  return (
    <section className="profile-page margin-from-top">
      {
                loadingState ? <Loader />
                  : (
                    <>
                    <div className="container ">
                      <div className="row absolute-center profile-details">
                        <div className="col-md-6 col-sm-12 left-container">
<div className="image-container">
  <img src={Images.adminProfile} alt="admin" />
</div>
                        </div>
                        <div className="col-md-6 col-sm-12 right-container">
  <div className="">
    <div className="row">
      <div className="col-md-5">  <h5>Name:</h5></div>
      <div className="col-md-7"><h5>{profileData.firstName+" " +profileData.lastName}</h5></div>
    </div>
    <div className="row">
      <div className="col-md-5">  <h5>Role:</h5></div>
      <div className="col-md-7"><h5>{profileData.userType}</h5></div>
    </div>
    <div className="row">
      <div className="col-md-5">  <h5>Email:</h5></div>
      <div className="col-md-7"><h5>{profileData.email}</h5></div>
    </div>
    <div className="row">
      <div className="col-md-5">  <h5>Mobile-Number:</h5></div>
      <div className="col-md-7"><h5>{profileData.mobileNumber}</h5></div>
    </div>
    
  </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='admin-profile'>
      <div className='container mx-0'>
        <div className=''>
          <div className='left-content'>
              <div className='admin-image'>
                <img src={Images.adminProfile} alt='admin' />
              </div>
              <div className='admin-content'>
                <input
                  type='text'
                  placeholder='First Name'
                />
                <br/>
                <input
                  type='text'
                  placeholder='Last Name'
                />
                <br/>
                <input
                  type='text'
                  placeholder='E-mail'
                /><br/>
                <input
                  type='text'
                  placeholder='Phone Number'
                /><br/>
                <input
                  type='text'
                  placeholder='Enter your Password'
                /><br/>
                <input
                  type='text'
                  placeholder='Change your Password'
                /><br/>
              </div>
          </div>
        </div>
      </div>
    </div> */}
                    </>

                  )
            }

    </section>
  );
}

export default AdminProfile;
