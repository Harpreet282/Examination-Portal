import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';
import Loader from "../../.././Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import {IoTrashOutline,IoCreateSharp}  from 'react-icons/io5';
import {VIEW_SUBECTS,DELETE_SUBJECT} from '../../../Apis/apis';
import './ViewSubject.css'
import {useSelector,useDispatch} from "react-redux";
const ViewSubject = () => {
  const location=useLocation();
  const[Subjects,setSubjects]=useState([]);
  const[pageIndex,setPageIndex]=useState(1);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const loadingState = useSelector((state) => state.loadingState.loading);
  const subjectDelete=()=>{
    const token=JSON.parse(localStorage.getItem('data')).token;
    axios.put(DELETE_SUBJECT,{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    console.log(pageIndex);
    const token=JSON.parse(localStorage.getItem('data')).token;
    dispatch(loaderValueTrue());
    console.log(location.state.courseId,'course id');
    axios.get(VIEW_SUBECTS + '?courseID=' + location.state.courseId +'&pageSize=3&pageIndex='+pageIndex,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.subjects,'subjects');
            dispatch(loaderValueFalse());
            setSubjects(res.data.data.subjects);
            console.log(Subjects,'subjects')
        })
        .catch((error)=>{
            console.log(error);
            dispatch(loaderValueFalse());
        })
},[location.state.courseId,pageIndex])
let totalPages = 2;
  return (
    <>
    {loadingState?<Loader/> :
    <div className='viewSubject'>
    <div className='upperSection' align="right">
    <button type="button" align="right" className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/examinerDashboard/course")}>Create Course</button> 
   
     <h2>Subject List</h2>
     </div>
     <table className="table all-containers">
  <thead>
    <tr className='table-primary '>
      <th className='pl-4' scope="col">Subject</th>
      <th scope="col">Remove</th>
      <th scope="col">Create Exam</th>
    </tr>
  </thead>
      {
        Subjects.map((item,i)=>{
          return(
            <tbody key={item.subjectID}>
               <tr className='content-box'>
               <td>{item.subjectName}</td>
               <td><IoTrashOutline onClick={subjectDelete} className='trashIcon'/> </td>   
              <td><IoCreateSharp className='createIcon' onClick={()=>navigate("/examinerDashboard/createExam" ,{ state: { subjectId : item.subjectID,courseID:item._id  }})} ></IoCreateSharp></td>  
               </tr>
           </tbody>
               
           )
        })
      }
      </table>
      <div className='btnContainer'>
      <button className=' btn  previousButton' onClick={()=>{if(pageIndex - 1 > 0){setPageIndex(pageIndex - 1)}
      else{
        alert("no more records");
      }
      }}>Previous </button>
      <button className=' btn  nextButton' onClick={()=>{
        if(pageIndex + 1 <= totalPages){setPageIndex(pageIndex + 1)}
        else{
        alert("no more records");
      }
        }}>Next</button>
     </div>
     </div>
     }
     
    </>
  )
}

export default ViewSubject