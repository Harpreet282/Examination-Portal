import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADD_SUBECT } from '../../../Apis/apis';
import { ToastContainer, toast } from 'react-toastify';
import './AddSubject.css'
import { useFormik} from "formik";
import { Navigate } from 'react-router-dom';
import * as Yup from "yup";

const AddSubject = () => {
    const [CourseName,setCourseName]=useState('');
    const location=useLocation();
    const navigate=useNavigate();
    const initialValues = {
      name:"",
    };
    const validationSchema = Yup.object({
      name: Yup.string().required("**Required!"),
    });

    // const chaneHandler = e =>{
    //   setCourseName(e.target.value);
    // }
  
    const onSubmit =(values)=>{
        console.log(values);
        const token=JSON.parse(localStorage.getItem('data')).token;

        const subject={
          name:values.name,
          courseID:location.state.courseId
        }
       console.log(subject);
        axios.post( ADD_SUBECT ,{subjects:[subject]},{headers:{Authorization:`Bearer ${token}`}})
       .then((res)=>{
        toast.success(" Additional Subject is Registered")
        const data=res.data;
        console.log(data);
        navigate("/examinerDashboard/viewAllSubject",{ state: {courseId :location.state.courseId }});
    })

    .catch((error)=>{
        console.log(error);
        if(error.response.data.message==='Subject Name Is Not Valid'){
          toast.error("please fill the subject");
        }
        else if(error.response.data.message==='SUBJECT_ALREADY_EXIST'){
          toast.error("Subject Already Added")
        }
    })
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
    <ToastContainer/>
      <section className='Add-Subject'>
      <div className='container absolute-center'>
      <div className='all-content'>
    
     <div className="modal" id="exampleModal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h4 className="modal-title">Add Subject</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col md'>
          <label className='label'> Subject </label>
        </div>
        <div className='col md'>
          <input type="text"  {...formik.getFieldProps("name")}  placeholder="Name" />
          {formik.touched.name && formik.errors.name ? (
                          <p className="text-danger error">
                            {formik.errors.name}
                          </p>
                        ) : null}
        </div>
        </div>
            <div className="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit"  className="btn btn-primary">Submit</button>
      </div>
          </form>  
       </div>
     
    </div>
  </div>
</div>   
      {/* <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col-md-12'>
          <input type="text"  {...formik.getFieldProps("name")} placeholder="Name" name='name'/>
          {formik.touched.name && formik.errors.name ? (
                          <p className="text-danger error">
                            {formik.errors.name}
                          </p>
                        ) : null}
        </div>
     
         </div>  
         
         <div className='row'>
            <button className='btn'>Submit</button>
         </div>
         </form>  */}
       
        
        </div>
        </div>
        </section>
    </div>
  )
}

export default AddSubject
