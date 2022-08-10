import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './viewExam.css';
import { VIEW_EXAM } from '../../../Apis/apis';
import { useNavigate } from 'react-router-dom';
import {ExamDetailsWithStudent} from '../../../redux/actions/index';
import { useDispatch } from 'react-redux';

const ViewExam = () => {
    const[examList,setExamList]=useState([])
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const SendExamDetails=(x)=>{
        dispatch(ExamDetailsWithStudent(x))
        navigate("/dashboard/viewExamWithStudent");
    }
    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem('data')).token;
        axios.get(VIEW_EXAM,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.exams);
            setExamList(res.data.data.exams)
            console.log(examList);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <>
    <div className='viewExam'>
     <h2>Exams</h2>
            {examList.map((item)=>
                <>
                <div className='allContent'>
                <div className='row content'>
                <div align="center" className="col-md-3">
                <img  src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </div>
                {/* </div> */}
                {/* <div className='row'> */}
                <div className='col-md-2 '>
                    <p>Course:{item.course}</p>
                </div>
                <div className='col-md-3'>
                    <p>Subject:{item.subject}</p>
                </div>
                    <div className='col-md-2'>
                        <p>StartTime:{item.startTime}</p>
                    </div>
                    <div className='col-md-2'>
                         <p>EndTime:{item.endTime}</p>
                    </div>
                    <div className='col-md-2'>
                         <p>Date:{item.examDate.slice(0,-14).split("-").reverse().join("-")}</p>
                    </div>
                </div>
                <div className='buttonContainer'>
               
                    <div>
                <button onClick={()=>SendExamDetails(item)} className='showDetails'>Show Details</button>
                    </div>
                
                </div>
                </div>
                </>
            )

            }
     
    </div>
    </>
  )
}

export default ViewExam
