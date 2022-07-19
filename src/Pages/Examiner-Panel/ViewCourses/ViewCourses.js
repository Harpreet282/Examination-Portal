import React, { useEffect,useState } from 'react'
import './viewCourse.css'
import {useNavigate} from "react-router-dom"
import { VIEW_COURSES } from '../../../Apis/apis';
import {useSelector,useDispatch} from "react-redux";
import Loader from "../../.././Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import axios from 'axios';
const ViewCourses = () => {
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
    <div>
    {loadingState?<Loader/>:<>
        <section className='examinerDashboard'>
            <div className='container  my-5'>
                <div className='row all-content'>
                <div className='row'>
                {
            request.map((item)=>{
               return( 
                <>
                
                <div className='col-md-4'>
                <div className="card text-center mx-3 my-2 course-card">
  
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text" style={{width:"120%", height:"20%"}}>{item.description}</p>
    <div className='button-container'>
    {/* <div className='row'> */}
    <div className='row'>
        <button onClick={()=>navigate("/examinerDashboard/AddStudent" ,{ state: { courseId : item._id }})} className="btn AddStudent">Add Student </button>
    </div>
    {/* <button onClick={()=>navigate("/examinerDashboard/viewStudents" ,{ state: { courseId : item._id }})}className='btn showAllStudent'> All students</button> */}
    <div className='row'>
    <button onClick={()=>navigate("/examinerDashboard/AddSubject" ,{ state: { courseId : item._id }})} className='btn SubjectAdd'>Subject Add</button>
    </div>
    <div className='row'>
    <button onClick={()=>navigate("/examinerDashboard/viewAllSubject" ,{ state: {courseId :item._id }})} className='btn subjectShow'> View Subject</button>
    </div>
    {/* </div> */}
   
</div>
</div>
</div>
</div>

 
                </>
               )
            })
        }
        </div>
                          
                </div>
            </div>
        </section>
        </>
        }
    </div>
   
  )
}

export default ViewCourses
