import React,{useEffect, useState} from 'react';
import axios from 'axios'; 
import {  VIEW_STUDENT } from '../../../Apis/apis';
import './viewStudent.css';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import {CREATE_EXAM} from '../../../Apis/apis';
import {toast,ToastContainer} from 'react-toastify'
import Loader from "../../.././Loader";
import { loaderValue, loaderValue2 } from "../../../redux/actions/index";

const ViewStudent = () => {
    const[data,setData]=useState([]);
    const dispatch=useDispatch();
    const[checklist,setCheckList]=useState([]);
    const location=useLocation();
    const loadingState = useSelector((state) => state.loadingState.loading);
    const exam = useSelector(state =>state.examCreateReducer);
    console.log(exam,'exam');
    // const courseID = JSON.parse(location.state.courseID);
     const courseId = location.state.courseId;
    console.log(courseId,'studentCourseId');

    const handleSubmit=()=>{
      let students = data.filter((student,index)=>checklist[index]);
      console.log(students);
      let ids = students.map((student)=>student._id);
      console.log(ids);
      const body = {
        ...exam.payload,
        students:ids
      }
      console.log(body,"shvb");
      const token=JSON.parse(localStorage.getItem('data')).token;
      axios.post(CREATE_EXAM,body,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
          if(err.response.data.message==='Start Time Is Not Valid'){
            toast.error("Please Enter the Exam Details");
          }
          else if(err.response.data.message==='Questions Is Not Valid')  {
            toast.error("Please Enter the Question");
          }
          })
        }
    
    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem('data')).token;
        dispatch(loaderValue2());
        axios.get(VIEW_STUDENT + courseId ,{headers:{Authorization:`Bearer ${token}`}})
            .then((res)=>{
                setData(res.data.data.students);
                setCheckList(Array(res.data.data.students.length).fill(false));
                dispatch(loaderValue());
                // localStorage.setItem("course",courseId);
                console.log(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    },[])

  function checkHandler(index){
    setCheckList(checklist.map((v,i)=>
    i===index?!v:v
    ))
    
  }
  return (
    <>
    {loadingState?<Loader/> :
    <>
    <div className='viewStudent'>
    <ToastContainer/>
    <h1>Student List</h1>
      <table className="table my-4">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Add</th>
    </tr>
  </thead>
  
    {
        data.map((item,index)=>{
            return(
            
             <tbody>
                <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td><input type="checkbox" defaultChecked={checklist[index]} className='btn add' onClick={()=>checkHandler(index)}/></td>  
                </tr>
            </tbody>

                
            )
        })
    }
    
  
    </table>
  <div className='submitButton'>
    <button className='btn submit' onClick={handleSubmit}>Submit</button>
  </div>

    </div>
    
    </>
    }
    </>
  )
  
}

export default ViewStudent
