import './createCourse.css'
import React,{useState} from 'react'
import { CREATE_COURSE_API } from '../../../Apis/apis';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik} from "formik";
import * as Yup from "yup";

const CreateCourse = () => {
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
    const initialValues = {
      name:"",
      description: "",
    };
    const validationSchema = Yup.object({
      name: Yup.string().required("**Required!"),
      description:Yup.string().required("**Required!"),
  
    });

    const onSubmit = (values) => {
      console.log(values)
          const token=JSON.parse(localStorage.getItem('data')).token;
          axios.post(CREATE_COURSE_API,values,{headers:{Authorization:`Bearer ${token}`}})
         .then((res)=>{
          toast.success("Course Created!");
          const data=res.data;
          console.log(data);
         
          navigate('/examinerDashboard/CreateSubject',{ state: { courseId :res.data.data.course._id }});
      })
  
      .catch((error)=>{
          console.log(error);
          if(error.response.data.message==='COURSE_ALREADY_EXIST'){
            toast.error("Course already exist");
          }
        else if(error.response.data.message==="\"value\" must be of type object"){
          toast.error('please fill the course');
        }
        else{
          toast.error("Error!");
          }
      })
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
  
  return (
    <section className='Student-Courses'>
      <ToastContainer/>
    <div className="modal" id="exampleModal" tabIndex="-1" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title">Create Course</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col'>
          <input type="text"  {...formik.getFieldProps("name")}  placeholder="Name" />
          {formik.touched.name && formik.errors.name ? (
                          <p className="text-danger error">
                            {formik.errors.name}
                          </p>
                        ) : null}
        </div>
        </div>
        <div className='row'>
            <div className='col'>
          <input type="text"  {...formik.getFieldProps("description")}    placeholder="Description" />
          {formik.touched.description && formik.errors.description ? (
                          <p className="text-danger error">
                            {formik.errors.description}
                          </p>
                        ) : null}
            </div> 
            </div>
            <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit"  className="btn btn-primary">Submit</button>
      </div>
         </form>  
      </div>
     
    </div>
  </div>
</div>
    </section>
    
  )
}

export default CreateCourse
