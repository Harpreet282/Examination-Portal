import React, { useEffect, useState } from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import Images from "../../../Assets/images";
import Loader from "../../../Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import  {AdminProfileAxios}  from "../../../Services/Admin";

function AdminProfile() {
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data")).token;

    dispatch(loaderValueTrue());
   AdminProfileAxios(token)
    .then((res) => {
        // console.log('res',res)
        dispatch(loaderValueFalse());
        //  console.log(res.data.data.adminDetails);
        setProfileData(res.data.data.adminDetails);
      })
      .catch((err) => {
        dispatch(loaderValueFalse());
        console.log(err);
      });
  }, []);

  return (
    <div className="admin-profile-page">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          <div className="container absolute-center">
            <section className="profile-details">
              <h3 className="mt-4">Profile-Details</h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 left-container">
                <div className="image-container">
                  <img src={Images.adminProfile} alt="admin" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 right-container">
                <div className="">
                  <div className="row">
                    <div className="col-md-5">
                      {" "}
                      <h5>Name:</h5>
                    </div>
                    <div className="col-md-7">
                      <h5>
                        {profileData.firstName + " " + profileData.lastName}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      {" "}
                      <h5>Role:</h5>
                    </div>
                    <div className="col-md-7">
                      <h5>{profileData.userType}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      {" "}
                      <h5>Email:</h5>
                    </div>
                    <div className="col-md-7">
                      <h5>{profileData.email}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      {" "}
                      <h5>Mobile-Number:</h5>
                    </div>
                    <div className="col-md-7">
                      <h5>{profileData.mobileNumber}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            </section>
            {/* <section className="change-profile">
              <h3>Change Profile</h3>
            </section> */}
          </div>
        </>
      )}
    </div>
  );
}

export default AdminProfile;
