import axios from 'axios';
import {DECLARE_RESULT} from '../../../Apis/apis'
import React, { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify'
import './viewResult.css'
import {useSelector} from 'react-redux'

const ViewResult = () => {
    const examDetails = useSelector((state) => state.examCreateReducer)
    console.log(examDetails);
    console.log(examDetails.exam.examID,'id')
    const Result=[{
        name:'javascript',
        total_marks:20,
        marks_obtained:10,
        grade:'c',
        status:'pass',

    }]
    const DeclareResult=(examId)=>{
        const token=JSON.parse(localStorage.getItem('data')).token;
        axios.post(DECLARE_RESULT,{examID : examId},{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res);
            toast.success("Result Declared!")
            
        })
        .catch((err)=>{
            console.log(err);
            if(err.response.data.message==='RESULT_ALREADY_DECLARED'){
              toast.error("Result already Declared");
            }
           
        })
    }
  return (
    <div className='result'>
    <ToastContainer/>
        <h2>Result</h2>
        <table className="table all-containers my-3">
  <thead>
    <tr className='table-primary '>
      <th scope="col">Subject</th>
      <th scope="col">Total Marks</th>
      <th scope="col">Marks Obtained</th>
      <th scope="col">Grade</th>
      <th scope="col">Status</th>
      <th scope="col">Approve</th>
    </tr>
  </thead>
      {
        Result.map((item,i)=>{
          return(
            <tbody>
               <tr className='content-box'>
               <td>{item.name}</td>
               <td>{item.total_marks}</td>
               <td>{item.marks_obtained}</td>
               <td>{item.grade}</td>
               <td>{item.status}</td>
               <td><button className='declareButton' onClick={()=>DeclareResult(examDetails.exam.examID)}>Declare</button> </td>   
               </tr>
           </tbody>
               
           )
        })
      }
      </table>
    </div>
  )
}

export default ViewResult
