import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ADD_SUBECT } from '../../../Apis/apis';

const CreateSubject = () => {
    const [SubjectName,setSubjectName]=useState({
        name_1:'',
        name_2:'',
        name_3:'',
        name_4:'',
        name_5:''
    });
    const location=useLocation();
    const chaneHandler = e =>{
        setSubjectName(oldData =>{ return({...oldData,[e.target.name]:e.target.value})})
      }
  
    const submitHandler =(event)=>{
        event.preventDefault();
        const token=JSON.parse(localStorage.getItem('data')).token;
        const subjects = [];
        for(let key in SubjectName){
            subjects.push({
                name:SubjectName[key],
                courseID:location.state.courseId
            })
        }
        console.log(subjects);
        axios.post( ADD_SUBECT ,{subjects:subjects},{headers:{Authorization:`Bearer ${token}`}})
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
      <h1> Subjects</h1>
      <form onSubmit={submitHandler}>
        <div className='row'>
        <div className='col-md-6'>
          <input type="text" onChange={chaneHandler}  placeholder=" Subject" name='name_1'/>
        </div>
      
        <div className='col-md-6'>
          <input type="text" onChange={chaneHandler}  placeholder="Subject" name='name_2'/>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-6'>
          <input type="text" onChange={chaneHandler}  placeholder="Subject" name='name_3'/>
        </div>
        <div className='col-md-6'>
          <input type="text" onChange={chaneHandler}  placeholder="Subject" name='name_4'/>
        </div>
        </div>
        <div className='row'>
        <div className='col-md-12'>
          <input type="text" onChange={chaneHandler}  placeholder="Subject" name='name_5'/>
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

export default CreateSubject
