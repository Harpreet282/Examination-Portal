import React, { useEffect,useState} from 'react'
import axios from 'axios';
import './ExamDetails.css'
import {EXAMINER_DETAILS} from '../../../Apis/apis'
const ExamDetails = () => {
  const [examDetail,setExamDetail]=useState([]);
  // const [questions,setQuestions]=useState([]);
    useEffect(()=>{
      const token=JSON.parse(localStorage.getItem('data')).token;
        axios.get(EXAMINER_DETAILS,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data);
            setExamDetail(res.data.data.exams);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='viewExam'>
      <div>
        <h1>Exam Details</h1>
      </div>
     <div>
      {
        examDetail.map((item)=>{
          return(
            <>
            <div className='row'>
            <div className='col-md-5'>
              <p className='StartTime'>Timing:{item.startTime}--{item.endTime}</p>
            </div>
            <div className='col-md-3'>
            <p className='courseName'>course:{item.course}</p>
            </div>
            <div className='col-md-4'>
            <p className='duration'>Duration:{item.duration}</p>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                  <p className='subjectName'>Subject:{item.subject}</p>
                </div>
            </div>
          {item.questions.map((x)=>
          <>
          <div className='row'>
            <div className='col-md-10'>
              <h4>{x.question}</h4>
            </div>
            <div className='col-md-'>
               <h5>{x.marks}</h5>
            </div>
          </div>
           
          
            <p>a) {x.options[0]}</p>
            <p>b) {x.options[1]}</p>
            <p>c) {x.options[2]}</p>
            <p>d) {x.options[3]}</p>
          </>
          )}
            </>
          )
      })
      }
      
     </div>
    </div>
  )
}

export default ExamDetails
