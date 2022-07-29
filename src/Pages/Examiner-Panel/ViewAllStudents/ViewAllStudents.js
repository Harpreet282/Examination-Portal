import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify';
import { VIEWALLSTUDENT_API } from '../../../Apis/apis';
import Loader from '../../../Loader';
import { useNavigate } from 'react-router-dom';
import {IoTrashOutline} from 'react-icons/io5'
import {loaderValueTrue,loaderValueFalse } from '../../../redux/actions';
import { useSelector,useDispatch } from 'react-redux';

const ViewAllStudents = () => {
    const loadingState = useSelector((state) => state.loadingState.loading);
    const[AllStudents,setAllStudents]=useState([]);
    const[pageIndex,setPageIndex]=useState(1);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const token=JSON.parse(localStorage.getItem('data')).token;
    // dispatch(loaderValueTrue());
    useEffect(()=>{
        axios.get(VIEWALLSTUDENT_API + '?&pageSize=5&pageIndex',{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.students);
            // dispatch(loaderValueFalse());
            setAllStudents(res.data.data.students);
            console.log(AllStudents);
        })
        .catch((err)=>{
            console.log(err);
            // dispatch(loaderValueFalse());
        })
    },[AllStudents])
    let totalPages = 3;
   
  return (
    <div>
      {loadingState?<Loader/> :
    <>
    <div className='viewStudent'>
    <div className='upperSection' align="right">
    <button type="button" align="right" className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/examinerDashboard/course")}>Create Course</button> 
    </div>
    <ToastContainer/>
    <h2>Student List</h2>
      <table className="table  my-4 table-bordered">
  <thead >
    <tr className='table-primary' >
      <th scope='col'>#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  
    {
        AllStudents.map((item,index)=>{
            return(
            
             <tbody>
                <tr >
                <td>{index+1}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td><IoTrashOutline className='trashIcon'/> </td>  
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
    
    </>
    }
    </div>
  )
}

export default ViewAllStudents
