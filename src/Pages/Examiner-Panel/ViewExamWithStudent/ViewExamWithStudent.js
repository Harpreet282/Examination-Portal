import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux'
import { VIEW_EXAM } from '../../../Apis/apis';
import './viewExamWithStudent.css';
import { useNavigate } from 'react-router-dom';

const ViewExamWithStudent = () => {
    const[examList,setExamList]=useState([]);
    const navigate=useNavigate();
    const examDetails = useSelector((state) => state.examCreateReducer)
    // useEffect(()=>{
    //     const token=JSON.parse(localStorage.getItem('data')).token;
    //     axios.get(VIEW_EXAM,{headers:{Authorization:`Bearer ${token}`}})
    //     .then((res)=>{
    //         console.log(res.data.data.exams,'RES');
    //         setExamList(res.data.data.exams)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[])
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
 var examDate=examDetails.exam.examDate.slice(0,-14).split("-").reverse().join("-")
  return (
    <div className='viewExamWithStudent'>
      <h2>ExamDetails</h2>
                
                <div className='allContent'>
                {/* <p>Course:{item.course}</p> */}
                <div className='row '>
                <div align="center" className="col-md-12">
                <img  src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </div>
                </div>
                <div className='content'>
                    <div className='row '>
                        <div className='col-md-6'>
                            <p>Date:{examDetails.exam.examDate.slice(0,-14).split("-").reverse().join("-")}</p>
                        </div>
                        <div className='col-md-6'>
                            <p>Subject:{examDetails.exam.subject}</p>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-6'>
                            <p>StartTime:{examDetails.exam.startTime}</p>
                        </div>
                        <div className='col-md-6'>
                        <p>EndTime:{examDetails.exam.endTime}</p>
                        </div>
                    </div>
               
                <div className='row '>
                        <div className='col-md-6'>
                            <p>Duration:{examDetails.exam.duration}</p>
                        </div>
                        <div className='col-md-6'>
                            <p>Total Marks:{examDetails.exam.totalMarks}</p>
                        </div>
                    </div>
                </div>
                </div>
    <table className="table all-containers">
        <thead >
        <tr className='table-primary' >
        <th scope='col'>#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile No.</th>
        <th scope="col">Status</th>
    </tr>
  </thead>
             <tbody>   
            {examDetails.exam.students.map((value,index)=>
            <>
            <tr className='content-box'>
                <td>{index+1}</td>
                <td>{value.studentName}</td>
                <td>{value.email}</td>
                <td>{value.mobileNumber}</td>
                <td>{value.status}</td>
                </tr>
            </>
            )}             
            </tbody>    
    </table> 
    <div className=' row buttonContainer'>
   {console.log(examDate,'reduxDate')}
    {console.log(today,'todaydate')}
    {examDate<today?
    <div className='col-md-6'>
                <button onClick={()=>navigate("/examinerDashboard/Result")} className='showResult'>Result</button>
     </div>
     :null}
    <div className='col-md-6'>
                <button onClick={()=>navigate("/examinerDashboard/viewQuestions",{state:{questions:examDetails.exam}})}  className='viewQuestions'>View Questions</button>
    </div>
                </div>
            </div>        
  )
}

export default ViewExamWithStudent
