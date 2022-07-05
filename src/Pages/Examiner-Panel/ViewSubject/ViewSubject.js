import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {VIEW_SUBECTS} from '../../../Apis/apis';

const ViewSubject = () => {
  const location=useLocation();
  const[Subjects,setSubjects]=useState([]);
//   useEffect(()=>{
//     const token=JSON.parse(localStorage.getItem('data')).token;
//     axios.get(VIEW_SUBECTS+location.state.courseId,{headers:{Authorization:`Bearer ${token}`}})
//         .then((res)=>{
//             console.log(res.data);
//             setSubjects(res.data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// })
  return (
    <>
      
    </>
  )
}

export default ViewSubject
