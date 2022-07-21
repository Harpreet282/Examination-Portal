import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './profile.css';
import { useSelector, useDispatch } from 'react-redux';
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
      //  console.log(res.data.data.adminDetails);
      setProfileData(res.data.data.adminDetails);
    }).catch((err) => {
      dispatch(loaderValueFalse());
      console.log(err);
    });
  }, []);

  //     const str = profileData.userType.toLowerCase();
  //   const newStr = str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <section className="profile-page">
      {
                loadingState ? <Loader />
                  : (
                    <div className=''>
                        <div className="container all-containers absolute-center">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="content">
                            <div className="profile-user-icon mt-1 mb-5">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&usqp=CAU"
                                alt="user-icon"
                              />
                            </div>
                            <div className="row profile-content">
                              <div className="col-md-6 col-sm-12">
                                <div className="left-content">
                                  <p>
                                    Name:
                                    <span>{profileData.firstName}</span>
                                  </p>
                                  <p>
                                    Role:
                                    <span>{profileData.userType}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <div className="right-content">
                                  <p>
                                    Email:
                                    <span>{profileData.email}</span>
                                  </p>
                                  <p>
                                    Phone-Number:
                                    <span>{profileData.mobileNumber}</span>
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  )
            }

    </section>
  );
}

export default AdminProfile;
