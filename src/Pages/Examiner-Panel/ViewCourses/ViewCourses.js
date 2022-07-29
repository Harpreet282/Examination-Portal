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
    <>
    {loadingState?<Loader/>:<>
        <section className='examinerDashboard'>
        <div className='upperSection' >
        <button type="button" className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/examinerDashboard/course")}> Courses</button> 
        <div class="custom-control custom-switch custom-switch-xl">
            <input type="checkbox"  onClick={()=>{navigate("/examinerDashboard/CourseInTable")}} class="custom-control-input" id="customSwitch1"/>
            <label class="custom-control-label" for="customSwitch1">courses View In Table</label>
        </div>
        </div>
            
                <div className='row all-content '>
               
                {
            request.map((item)=>{
               return( 
                <>
                
                <div className='col-md-4'>
                <div className="card  text-center my-3 course-card">
  
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.description}</p>
    <div className='button-container'>
    <div className='row'>
    <div className='col-md-6 '>
        <button onClick={()=>navigate("/examinerDashboard/AddStudent" ,{ state: { courseId : item._id }})} className="btn AddStudent view-course-btn">Add Student </button>
    </div>
    
    <div className='col-md-6 '>
    <button onClick={()=>navigate("/examinerDashboard/viewStudents" ,{ state: { courseId : item._id }})} className='btn showAllStudent view-course-btn'> All students</button>
    </div>
    </div>
    <div className='row'>
    <div className='col-md-6 '>
    <button onClick={()=>navigate("/examinerDashboard/AddSubject" ,{ state: { courseId : item._id }})} type="button" className=" btn SubjectAdd view-course-btn" data-backdrop="false" data-toggle="modal" data-target="#exampleModal">Subject Add</button> 
    {/* <button >Subject Add</button> */}
    </div>
    <div className='col-md-6 '>
    <button onClick={()=>navigate("/examinerDashboard/viewAllSubject" ,{ state: {courseId :item._id }})} className='btn subjectShow view-course-btn'> View Subject</button>
    </div>
    </div>
    <div className='row '>
    <div className=' courseRemove col-md-12'>
    <button onClick={()=>navigate("/examinerDashboard/viewAllSubject" ,{ state: {courseId :item._id }})} className='btn courseRemoveButton'> Course Remove</button>
    </div>
    </div>
   
</div>
</div>
</div>
</div>
                </>
               )
            })
        }
        </div>
        </section>
        </>
        }
    </>
   
  )
}

export default ViewCourses
