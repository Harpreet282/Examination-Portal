import React,{useState} from 'react'
import './createStudents.css';
import axios from 'axios';
import { CREATE_STUDENT } from '../../../Apis/apis';
import { useLocation } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useFormik} from "formik";
import * as Yup from "yup";

const CreateStudents = () => {
  const [data,setdata]=useState([]);
  const navigate=useNavigate();
  const location = useLocation();
  
  const initialValues = {
    firstName: "",
    lastName: "",
    email:"",
    mobileNumber:"",
    fatherName:"",
    motherName:"",
    dob:"",
    state:"",
    city:"",
    address:"",
    gender:"",
    password:""
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("**Required!"),
    firstName: Yup.string().required("**Required!"),
    lastName: Yup.string().required("**Required!"),
    mobileNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("please Enter the Mobile Number"),
    fatherName: Yup.string().required("**Please Enter the Father Name!"),
    motherName: Yup.string().required("**Please Enter the Mother Name!"),
    dob: Yup.string().required("**Please fill the Date of Birth!"),
    state: Yup.string().required("**Please Enter the State!"),
    city: Yup.string().required("**Please Enter the City!"),
    address:Yup.string().required("**Please Enter the Address"),
    gender:Yup.string().required("**required"),
    password: Yup.string()
      .min(6, "Password must be equal to or more than 6 characters!")
      .max(12, "Too Long!")
      .required("**Required!"),
  });

  const onSubmit = (values,{resetForm}) => {
    // event.preventDefault()
    console.log(values);

    const token=JSON.parse(localStorage.getItem('data')).token;
    axios.post(CREATE_STUDENT,{courseID:location.state.courseId,...values},{headers:{Authorization:`Bearer ${token}`}})
   .then((res)=>{
    const data=res.data;
    console.log(data);
    toast.success("Successfully Registered");
    resetForm({values:""})
})
.catch((error)=>{
  console.log(error);
  if(error.response.data.message==='EMAIL_ALREADY_TAKEN')
  toast.error("Email already taken")

  
})
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
       <section className='Student-Signup p-1 '>
       <ToastContainer/>
       <div  align="right">
    <button type="button"  className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/dashboard/course")}>Create Course</button> 
    </div>
      <div className='container'>
        <div className='my-5'>
          <h2>Please Enter Student's Details to make their Accounts</h2>
        <div className=' all-content'>
        <div className='content'>
        <form onSubmit={formik.handleSubmit} >
          <div className='row firstrow'>
          <div className='col-md-3'>
            <label className='label'>FirstName:</label>
          </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("firstName")} placeholder="First Name"/>
              {formik.touched.firstName && formik.errors.firstName ? (
                          <p className="text-danger error">
                            {formik.errors.firstName}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>LastName:</label>
            </div>
            <div className='col-md-9'>
            <input type="text" {...formik.getFieldProps("lastName")}  placeholder="Last Name" />
            {formik.touched.lastName && formik.errors.lastName ? (
                          <p className="text-danger error">
                            {formik.errors.lastName}
                          </p>
                        ) : null}
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3'>
              <label className='label'>Email:</label>
            </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("email")}  placeholder="Email"/>
              {formik.touched.email && formik.errors.email ? (
                          <p className="text-danger error">
                            {formik.errors.email}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>Mobile Number: </label>
            </div>
            <div className='col-md-9'>
            <input type="text"  {...formik.getFieldProps("mobileNumber")}  placeholder="Mobile Number"/>
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                          <p className="text-danger error">
                            {formik.errors.mobileNumber}
                          </p>
                        ) : null}
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3'>
              <label className='label'>Father Name: </label>
            </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("fatherName")}  placeholder="Father Name"/>
              {formik.touched.fatherName && formik.errors.fatherName ? (
                          <p className="text-danger error">
                            {formik.errors.fatherName}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>Mother Name: </label>
            </div>
            <div className='col-md-9'>
            <input type="text"  {...formik.getFieldProps("motherName")} placeholder="Mother Name" />
            {formik.touched.motherName && formik.errors.motherName ? (
                          <p className="text-danger error">
                            {formik.errors.motherName}
                          </p>
                        ) : null}
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3'>
              <label className='label'>Date Of Birth: </label>
            </div>
            <div className='col-md-9'>
              <input type="date" {...formik.getFieldProps("dob")} placeholder="Date Of Birth"/>
              {formik.touched.dob && formik.errors.dob ? (
                          <p className="text-danger error">
                            {formik.errors.dob}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>State: </label>
            </div>
            <div className='col-md-9'>
            <input type="text" {...formik.getFieldProps("state")} placeholder="State" />
            {formik.touched.state && formik.errors.state ? (
                          <p className="text-danger error">
                            {formik.errors.state}
                          </p>
                        ) : null}
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3'>
              <label className='label'>City: </label>
            </div>
            <div className='col-md-9'>
              <input type="text" {...formik.getFieldProps("city")}  placeholder="City"/>
              {formik.touched.city && formik.errors.city ? (
                          <p className="text-danger error">
                            {formik.errors.city}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>Address: </label>
            </div>
            <div className='col-md-9'>
            <input  type="text" {...formik.getFieldProps("address")} placeholder="Address" />
            {formik.touched.address && formik.errors.address ? (
                          <p className="text-danger error">
                            {formik.errors.address}
                          </p>
                        ) : null}
            </div>
          </div>
          <div className='row'>
          <div className='col-md-3'>
              <label className='label'>Gender: </label>
            </div>
            <div className='col-md-9'>
            <select {...formik.getFieldProps("gender")}  className="form-control">
              <option name='gender' value="" disabled selected>Gender</option>
              <option name='gender' value="MALE">Male</option>
              <option name='gender' value="FEMALE">Female</option>
              <option name='gender' value="OTHER">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? (
                          <p className="text-danger error">
                            {formik.errors.gender}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
              <label className='label'>Password: </label>
            </div>
            <div className='col-md-9'>
            <input {...formik.getFieldProps("password")}  type="password" placeholder="Create Password" />
            {formik.touched.password && formik.errors.password ? (
                          <p className="text-danger error">
                            {formik.errors.password}
                          </p>
                        ) : null}
            </div>
            </div>
          
          <div>
            <button className='btn'>Submit</button>
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default CreateStudents