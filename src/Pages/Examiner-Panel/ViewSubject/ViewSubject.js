import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';
import Loader from "../../.././Loader";
import { loaderValue, loaderValue2 } from "../../../redux/actions/index";
import {VIEW_SUBECTS} from '../../../Apis/apis';
import './ViewSubject.css'
import {useSelector,useDispatch} from "react-redux";
const ViewSubject = () => {
  const location=useLocation();
  const[Subjects,setSubjects]=useState([]);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const loadingState = useSelector((state) => state.loadingState.loading);
  useEffect(()=>{
    const token=JSON.parse(localStorage.getItem('data')).token;
    dispatch(loaderValue2());
    console.log(location.state.courseId,'course id');
    axios.get(VIEW_SUBECTS  + location.state.courseId,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.subjects,'subjects');
            dispatch(loaderValue());
            setSubjects(res.data.data.subjects);
            console.log(Subjects,'subjects')
        })
        .catch((error)=>{
            console.log(error);
        })
},[location.state.courseId])






  return (
    <>
    {loadingState?<Loader/> :
    <>
     <h1>Subject List</h1>
     <table className="table my-4">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Remove</th>
      <th scope="col">Create Exam</th>
    </tr>
  </thead>
      {
        Subjects.map((item,i)=>{
          return(
            <tbody  key={item.subjectID}>
               <tr>
               <td>{item.name}</td>
                 <td><button className='btn'>Remove</button></td>  
                 <td><button onClick={()=>navigate("/examinerDashboard/createExam" ,{ state: { subjectId : item.subjectID,courseID:item._id  }})}  className='btn' >Create Exam</button></td>  
               </tr>
           </tbody>
               
           )
        })
      }
      </table>
      </>
     }
    </>
  )
}

export default ViewSubject
