import React,{useEffect, useState} from 'react';
import axios from 'axios'; 
import {VIEW_STUDENT} from '../../../Apis/apis'
import './studentAddToExam.css';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import {CREATE_EXAM} from '../../../Apis/apis';
import {toast,ToastContainer} from 'react-toastify'
import Loader from '../../../Loader';
import SweetAlert from 'sweetalert2-react';
// import swal from 'sweetalert'
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';

const StudentAddToExam = () => {
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
        questions:exam.data,
        ...exam.payload,
        students:ids,
        subjectID:location.state.subjectId
      }
      console.log(body,"shvb");
      const token=JSON.parse(localStorage.getItem('data')).token;
      axios.post(CREATE_EXAM,body,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
          console.log(res);
          SweetAlert  ({
            title: "Good job!",
            text: "Successfully create the Exam!",
            icon: "success",
            button: "Aww yiss!",
          });
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
        dispatch(loaderValueTrue());
        axios.get(VIEW_STUDENT + '?pageSize=12&courseID=' + courseId ,{headers:{Authorization:`Bearer ${token}`}})
            .then((res)=>{
                setData(res.data.data.students);
                setCheckList(Array(res.data.data.students.length).fill(false));
                dispatch(loaderValueFalse());
                // localStorage.setItem("course",courseId);
                console.log(data);
            })
            .catch((error)=>{
                console.log(error);
                dispatch(loaderValueFalse());
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
    <h2>Student List</h2>
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
            
             <tbody key={index}>
                <tr>
                <td>{item.studentName}</td>
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

export default StudentAddToExam