import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { ADMIN_PROFILE, STUDENT_PROFILE, EXAMINER_PROFILE } from '../../Apis/apis';

import Loader from '../../Loader';
import * as myConstants from '../../Constants';
import { loaderValueFalse, loaderValueTrue } from '../../redux/actions';

function Profile() {
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem('data'));
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    dispatch(loaderValueTrue());

    axios.get(
      data.userType === myConstants.ADMIN ? ADMIN_PROFILE : data.userType === myConstants.STUDENT ? STUDENT_PROFILE : data.userType === myConstants.EXAMINER ? EXAMINER_PROFILE : ADMIN_PROFILE,
      {
        headers: { Authorization: `Bearer ${data.token}` },
      },
    ).then((res) => {
      // console.log(res)
      dispatch(loaderValueFalse());
      //  console.log(res.data.data.adminDetails);

      let profileDetails;
      if (data.userType === myConstants.ADMIN) {
        profileDetails = res.data.data.adminDetails;
      } else if (data.userType === myConstants.EXAMINER) {
        profileDetails = res.data.data.examinerDetails;
      } else {
        profileDetails = res.data.data.student;
      }

      setProfileData(profileDetails);
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
                    <div className="container all-containers my-5">
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
                  )
            }

    </section>
  );
}

export default Profile;
