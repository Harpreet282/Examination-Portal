import React, { useEffect, useState } from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import Images from "../../../Assets/images";
import Loader from "../../../Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import  {AdminProfileAxios,UpdateAdminProfileAxios}  from "../../../Services/Admin";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function AdminProfile() {
  const initialValues = {
    firstName:'',
    lastName:'',
    mobileNumber:'',
    password: '',
  };
  
  const [profileData, setProfileData] = useState({});
  const [adminProfileUpdated, setAdminProfileUpdated] = useState(true);
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    setAdminProfileUpdated(false)
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
  }, [adminProfileUpdated]);

  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number is not valid'),
    password: Yup.string()
      .min(6, 'Password must be equal to or more than 6 characters!')
      .max(20, 'Too Long!'),
  });



  const onSubmit = (values,onSubmitProps) => {
    // console.log('Submit Values',values)
    const token = JSON.parse(localStorage.getItem("data")).token;
    dispatch(loaderValueTrue());
    for (const key in values) {
      if (!values[key]) {
        delete values[key];
      }
    }
    // console.log(values,"val")
    UpdateAdminProfileAxios(values,token)
   
    .then((res) => {
setAdminProfileUpdated(true);
        dispatch(loaderValueFalse());
        console.log(res);
        toast.success('Profile Updated Successfully!');
        onSubmitProps.resetForm();
      })
      .catch((err) => {
        dispatch(loaderValueFalse());
        toast.error('Error!');
        console.log(err);
   
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="admin-profile-page">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          <div className="container">
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

            <section className="change-profile my-4">

            <div className="button-div">
             want to update profile?
              <button type="button" className=" mx-2 btn" data-toggle="modal" data-target="#exampleModal">
Click here!!
</button>
            </div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Change profile by entering details : </h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
              <div className="form-group row">
    <label htmlFor="firstName" className="col-sm-4 col-form-label">First-Name : </label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="firstName" placeholder="Enter new first Name" {...formik.getFieldProps('firstName')} autoComplete="off"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="lastName" className="col-sm-4 col-form-label">Last-Name : </label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="lastName" placeholder="Enter new last Name" {...formik.getFieldProps('lastName')} autoComplete="off"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="mobileNumber" className="col-sm-4 col-form-label">Mobile-Number : </label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="mobileNumber" placeholder="Enter new mobile-number" {...formik.getFieldProps('mobileNumber')} autoComplete="off"/>
    </div>
      { formik.touched.mobileNumber && formik.errors.mobileNumber ? <p className="text-danger error">{formik.errors.mobileNumber}</p> : null}

  </div>
              <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password : </label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="inputPassword" {...formik.getFieldProps('password')} placeholder="Enter new password"/>
      { formik.touched.password && formik.errors.password ? <p className="text-danger error">{formik.errors.password}</p> : null}
    </div>
  </div>
  {/* <div className="button-div">
  <button type="submit" className="btn">Submit</button>
  </div> */}
  <div className="modal-footer">
        <button type="button" className="btn" data-dismiss="modal">Close</button>
        <button type="button" onClick={formik.handleSubmit} data-dismiss="modal" className="btn" >Submit</button>
      </div>
              </form>
      </div>
      
    </div>
  </div>
</div>          
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminProfile;
