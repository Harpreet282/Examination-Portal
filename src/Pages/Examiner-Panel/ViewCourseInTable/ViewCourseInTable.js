import React, { useEffect,useState } from 'react'
import {useNavigate} from "react-router-dom"
import { VIEW_COURSES } from '../../../Apis/apis';
import {useSelector,useDispatch} from "react-redux";
import Loader from "../../.././Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import axios from 'axios';
const ViewCourseInTable = () => {
      const[request,setDeclineRequest]=useState([]);
      const navigate = useNavigate();
      const dispatch=useDispatch();
      const loadingState = useSelector((state) => state.loadingState.loading);
      useEffect(()=>{
          const token=JSON.parse(localStorage.getItem('data')).token;
          dispatch(loaderValueTrue());        
          axios.get(VIEW_COURSES,{headers:{Authorization:`Bearer ${token}`}})
          .then((res)=>{
              console.log(res.data.data.examinerCourses)
              setDeclineRequest(res.data.data.examinerCourses);
              console.log(request,'id');
              dispatch(loaderValueFalse());   
          })
          .catch((error)=>{
              console.log(error);
              dispatch(loaderValueFalse());
          })
      },[])
  return (
    <>
    {loadingState?<Loader/>:<>
        <section className='examinerDashboard'>
        <div class="custom-control custom-switch">
            <input type="checkbox"  onClick={()=>{navigate("/examinerDashboard/viewCourse")}} class="custom-control-input" id="customSwitch1"/>
            <label class="custom-control-label" for="customSwitch1">courses View In Cards</label>
        </div>
            <div className='container'>
            <table className="table table-sm  table-bordered  my-4 ">
  <thead>
    <tr className='table-primary '>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
      {
        request.map((item,i)=>{
          return(
            <tbody>
               <tr >
               <td>{i+1}</td>
                 <td>{item.name}</td>
                 <td>{item.description}</td>
                 <td>{item.createdDate}</td>  
                 
               </tr>
           </tbody>
               
           )
        })
      }
      </table>
               
        </div>
        </section>
        </>
        }
    </>
   
  )
}

export default ViewCourseInTable
