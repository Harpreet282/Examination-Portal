import React,{useEffect, useState} from 'react';
import axios from 'axios'; 
import {  VIEW_STUDENT,DELETE_STUDENT } from '../../../Apis/apis';
import './ViewStudent.css';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import {CREATE_EXAM} from '../../../Apis/apis';
import {toast,ToastContainer} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import Loader from "../../.././Loader";
import {IoTrashOutline} from 'react-icons/io5'
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";

const ViewStudent = () => {
    const[data,setData]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[checklist,setCheckList]=useState([]);
    const location=useLocation();
    const loadingState = useSelector((state) => state.loadingState.loading);
    const exam = useSelector(state =>state.examCreateReducer);
    console.log(exam,'exam');
    // const courseID = JSON.parse(location.state.courseID);
     const courseId = location.state.courseId;
    console.log(courseId,'studentCourseId');

    
    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem('data')).token;
        dispatch(loaderValueTrue());
        axios.get(VIEW_STUDENT + '?pageSize=12&courseID=' + courseId ,{headers:{Authorization:`Bearer ${token}`}})
            .then((res)=>{
                setData(res.data.data.students);
                console.log(res.data.data.students,'data');
                setCheckList(Array(res.data.data.students.length).fill(false));
                dispatch(loaderValueFalse());
                // localStorage.setItem("course",courseId);
              
            })
            .catch((error)=>{
                console.log(error);
                dispatch(loaderValueFalse());
            })
    },[])

    const deleteStudent=(studentID)=>{
      const token=JSON.parse(localStorage.getItem('data')).token;
      axios.delete(DELETE_STUDENT+ '/' +studentID,{headers:{Authorization:`Bearer ${token}`}})
      .then((res)=>{
        console.log(res);
        const newData = data.filter((x) => x._id!== studentID);
        setData(newData);
        toast.success("Student is deleted");
      })
      .catch((err)=>{
        console.log(err);
      })
    }

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
    <div className='upperSection' align="right">
    <button type="button" align="right" className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/dashboard/course")}>Create Course</button> 
    </div>
    <ToastContainer/>
    <h2>Student List</h2>
      <table className="table all-containers">
  <thead >
    <tr className='table-primary' >
      <th scope='col'>#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
    {
        data.map((item,index)=>{
            return(
            
             <tbody>
                <tr className='content-box'>
                <td>{index+1}</td>
                <td>{item.studentName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td><IoTrashOutline onClick={()=>deleteStudent(item._id)}  className='trashIcon'/> </td>  
                </tr>
            </tbody>

                
            )
        })
    }
    </table>
    
  

    </div>
    
    </>
    }
    </>
  )
  
}

export default ViewStudent