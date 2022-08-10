import React, { useEffect,useState } from 'react'
import {useNavigate} from "react-router-dom"
import { VIEW_COURSES,DELETE_COURSE } from '../../../Apis/apis';
import {useSelector,useDispatch} from "react-redux";
import Loader from "../../.././Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import axios from 'axios';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {BiStreetView} from 'react-icons/bi';
import {FaRegNewspaper} from 'react-icons/fa';
import {MdPostAdd} from 'react-icons/md';
import {IoTrashOutline} from 'react-icons/io5';
import {toast,ToastContainer} from 'react-toastify'
import './viewCourseInTable.css'
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
      const courseRemove=(CourseId)=>{
        console.log(CourseId)
    const token=JSON.parse(localStorage.getItem('data')).token;
    axios.delete(DELETE_COURSE+ '/' +CourseId,{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
      console.log(res);
      const newData = request.filter((x) => x._id !== CourseId);
      setDeclineRequest(newData);
      toast.success("Course is deleted");
    })
    .catch((err)=>{
      console.log(err);
    })
      }
  return (
    <>
    {loadingState?<Loader/>:<>
        <section className='examinerDashboardTable'>
        <ToastContainer/>
        <div class="custom-control custom-switch">
            <input type="checkbox"  onClick={()=>{navigate("/dashboard/")}} class="custom-control-input" id="customSwitch1"/>
            <label class="custom-control-label" for="customSwitch1">courses View In Cards</label>
        </div>
            <table className="table all-containers">
  <thead align="center">
    <tr className='table-primary '>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      {/* <th scope="col">Description</th> */}
      <th scope="col">Date</th>
      <th scope="col">Add Student</th>
      <th scope="col">view Student</th>
      <th scope="col">view Subject</th>
      <th scope="col">Subject Add</th>
      <th scope="col">Remove Course</th>
    </tr>
  </thead>
      {
        request.map((item,i)=>{
          return(
            <tbody align="center">
               <tr >
               <td>{i+1}</td>
                 <td>{item.name}</td>
                 {/* <td>{item.description}</td> */}
                 <td>{item.createdDate.slice(1,10)}</td>  
                 <td className='AddStudentIcon'><AiOutlineUsergroupAdd onClick={()=>navigate("/dashboard/AddStudent" ,{ state: { courseId : item._id }})}/></td>
                 <td className='viewStudentIcon'><BiStreetView onClick={()=>navigate("/dashboard/viewStudents" ,{ state: { courseId : item._id }})}/></td>
                 <td className='viewSubjectIcon'><FaRegNewspaper  onClick={()=>navigate("/dashboard/viewAllSubject" ,{ state: {courseId :item._id }})} /></td>
                 <td className='AddSubjectIcon'><MdPostAdd onClick={()=>navigate("/dashboard/AddSubject" ,{ state: { courseId : item._id }})}  data-backdrop="false" data-toggle="modal" data-target="#exampleModal"/></td>
                 <td className='RemoveIcon'><IoTrashOutline  onClick={()=>courseRemove(item._id)}/></td>
               </tr>
           </tbody>
               
           )
        })
      }
      </table>
        </section>
        </>
        }
    </>
   
  )
}

export default ViewCourseInTable
