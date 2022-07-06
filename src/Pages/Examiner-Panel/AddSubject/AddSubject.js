import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ADD_SUBECT } from '../../../Apis/apis';
import './AddSubject.css'
const AddSubject = () => {
    const [CourseName,setCourseName]=useState('');
    const location=useLocation();

    const chaneHandler = e =>{
      setCourseName(e.target.value);
    }
  
    const submitHandler =(event)=>{
        event.preventDefault();
        console.log(CourseName);
        const token=JSON.parse(localStorage.getItem('data')).token;

        const subject={
          name:CourseName,
          courseID:location.state.courseId
        }
       
        axios.post( ADD_SUBECT ,{subjects:[subject]},{headers:{Authorization:`Bearer ${token}`}})
       .then((res)=>{
        const data=res.data;
        console.log(data);
    })

    .catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div>
      <section className='Add-Subject'>
      <div className='container all-containers  my-5'>
      <div className='all-content'>
      <h1>Add Subject</h1>
      <form onSubmit={submitHandler}>
        <div className='row'>
        <div className='col-md-12'>
          <input type="text" onChange={chaneHandler}  placeholder="Name" name='name'/>
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

export default AddSubject
