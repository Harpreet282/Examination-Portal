import './createCourse.css'
import React,{useState} from 'react'
import { CREATE_COURSE_API } from '../../../Apis/apis';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateCourse = () => {
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
    const chaneHandler = e =>{
      setdata({...data,[e.target.name]:e.target.value})
    }
      const submitHandler =(event)=>{
          event.preventDefault();
          const token=JSON.parse(localStorage.getItem('data')).token;
          axios.post(CREATE_COURSE_API,data,{headers:{Authorization:`Bearer ${token}`}})
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
  
  return (
    <div>
      <section className='Student-Courses'>
      <ToastContainer/>
      <div className='container absolute-center '>
      <div className='all-content'>
      <h2>Create Course</h2>
      <form onSubmit={submitHandler}>
        <div className='row'>
        <div className='col'>
          <input type="text" onChange={chaneHandler}  placeholder="Name" name='name'/>
        </div>
        </div>
        <div className='row'>
            <div className='col'>
          <input type="text"  onChange={chaneHandler}  placeholder="Description" name='description'/>
            </div> 
            </div>
         
         
         <div className='row'>
            <button className='btn'>Submit</button>
         </div>
         </form> 
       
        
        </div>
        </div>
        </section>
     
    </div>
    
  )
}

export default CreateCourse
