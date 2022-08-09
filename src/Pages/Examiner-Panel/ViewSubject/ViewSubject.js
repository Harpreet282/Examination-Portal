import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';
import { useFormik} from "formik";
import Loader from "../../.././Loader";
import {toast,ToastContainer} from 'react-toastify'
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import {IoTrashOutline,IoCreateSharp}  from 'react-icons/io5';
import {AiOutlineEdit} from 'react-icons/ai'
import {VIEW_SUBECTS,DELETE_SUBJECT,UPDATED_SUBJECT} from '../../../Apis/apis';
import './ViewSubject.css'
import * as Yup from "yup";
import {useSelector,useDispatch} from "react-redux";
const ViewSubject = () => {
  const location=useLocation();
  const[Subjects,setSubjects]=useState([]);
  const[render,setRender]=useState(true)
  const [id,setId]=useState();
  const[pageIndex,setPageIndex]=useState(0);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    subjectName:"",
  };
  const validationSchema = Yup.object({
    subjectName:Yup.string().required("**Required!"),
  });
 
  const onSubmit = (values) => {
    console.log(id);
    const {subjectName} = values;
    const body = {
      subjectID:id,
      name:subjectName
    }
    console.log(values,body);
    const token=JSON.parse(localStorage.getItem('data')).token;
    axios.patch(UPDATED_SUBJECT,body,{headers:{Authorization:`Bearer ${token}`}})
  .then((res)=>{
    setRender(!render)
    console.log(res);
    const newData = Subjects.filter((x) => x.subjectName !== subjectName);
    setSubjects(newData);
})
.catch((err)=>{
    console.log(err);
})       
   
}
  const loadingState = useSelector((state) => state.loadingState.loading);
  const subjectDelete=(subID)=>{
    console.log(subID)
    const token=JSON.parse(localStorage.getItem('data')).token;
    axios.delete(DELETE_SUBJECT+ '/' +subID,{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
      console.log(res);
      const newData = Subjects.filter((x) => x.subjectID !== subID);
      setSubjects(newData);
      toast.success("Subject is deleted");
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    if(render){
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
             setRender(!render);
        })
        .catch((error)=>{
            console.log(error);
            dispatch(loaderValueFalse());
        })
      }
},[location.state.courseId,pageIndex,render])

let totalPages = 2;
const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema,
});
  return (
    <>
    {loadingState?<Loader/> :
    <div className='viewSubject'>
    <ToastContainer/>
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
      <th scope='col'>Edit</th>
    </tr>
  </thead>
      {
        Subjects.map((item,i)=>
          <>
            <tbody key={item.subjectID}>
               <tr className='content-box'>
               <td>{item.subjectName}</td>
               <td><IoTrashOutline onClick={()=>subjectDelete(item.subjectID)} className='trashIcon'/> </td>   
              <td><IoCreateSharp className='createIcon' onClick={()=>navigate("/examinerDashboard/createQuestion" ,{ state: { subjectId : item.subjectID,courseID:item._id  }})} ></IoCreateSharp></td> 
             <td><AiOutlineEdit className='editIcon' data-backdrop="false" data-toggle="modal" data-target="#exampleModal1" /></td>
               </tr>
           </tbody>
           <div className="modal"  id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
      <h4 className="modal-title">Edit Subject</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div className="modal-body">
      <form onSubmit={(e)=>{formik.handleSubmit(e) ;setId(item.subjectID)}}>
          <div className='row '>
          <div className='col-md-3'>
            <label className='label'>Subject</label>
          </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("subjectName")}    placeholder="Question" name='subjectName'/>
              {formik.touched.subjectName && formik.errors.subjectName ? (
                          <p className="text-danger error">
                            {formik.errors.subjectName}
                          </p>
                        ) : null}
            </div>
            </div>
          <div>
          <div  className='buttonContainer'>
            <button type='submit' className='btn submitButton'>Submit</button>
          </div>
          </div>
          </form>
       </div>
    </div>
  </div>
                    </div> 
               
           </>
      )}
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