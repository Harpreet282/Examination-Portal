import React,{ useEffect,useState,useRef} from 'react'
import { EXAMINER_PROFILE ,UPDATED_PROFILE} from '../../../Apis/apis'
import axios from 'axios';
import './ExaminerProfile.css';
import {AiOutlineEdit} from 'react-icons/ai'
import {useSelector,useDispatch} from "react-redux";
import {useFormik} from "formik";
import Loader from '../../../Loader';
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";
import * as Yup from "yup";

const ExaminerProfile = () => {
    const[profile,setProfile] = useState([]);
    const[ shouldLog, setShouldLog ] = useState(true);
    const dispatch=useDispatch();
    const initialValues = {
        firstName:"",
        lastName:"",
        mobileNumber:""
      };
      const validationSchema = Yup.object({
        firstName:Yup.string().required("**Required!"),
        lastName: Yup.string().required("**Required!"),
        mobileNumber: Yup.string().required("**Required!"),
      });
      const onSubmit =(values)=>{
        console.log(values,'formSubmit');
        const token=JSON.parse(localStorage.getItem('data')).token;
    axios.patch(UPDATED_PROFILE,values,{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
        console.log(res); 
        setShouldLog(!shouldLog)
    })
    .catch((err)=>{
        console.log(err);
    })
      }
    const loadingState = useSelector((state) => state.loadingState.loading);
    
    useEffect(()=>{
        if (shouldLog) {
        const token=JSON.parse(localStorage.getItem('data')).token;
        dispatch(loaderValueTrue()); 
        axios.get(EXAMINER_PROFILE,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.examinerDetails);
            // setProfile(res.data.data.examinerDetails);
            setProfile([res.data.data.examinerDetails]);
            dispatch(loaderValueFalse()); 
            setShouldLog(!shouldLog)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    },[shouldLog])

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
  return (
    <>
     {loadingState?<Loader/>:<>
    <div className='ExaminerProfile'>
    <div className='row'>
    <div className='col-md-3 sidebar'>
    </div>
    <div className='frame'>
            <img src="https://p7.hiclipart.com/preview/417/305/229/female-woman-icon-black-hair-cliparts.jpg"/>
            </div>
        <div className='col-md-9 rightContent my-5'>
              {
                profile?.map((item,i)=>{
                    return(
                        <div className='examiner-profile-page' key={i}>
                    <div className='absolute-center'>
                    <h6 className='heading'>Personal Information</h6>
                    <div className='row firstName'>
                            <div className='col-md-6'>Name </div>
                            <div className='col-md-6'>{item.firstName} {item.lastName}</div>
                        </div>
                        
                        <div className='row userType'>
                        <div className='col-md-6'>UserType </div>
                        <div className='col-md-6'>{item.userType}</div>  
                        
                        </div>
                        <div className='row email'>
                            <div className='col-md-6'>Email </div>
                            <div className='col-md-6'>{item.email}</div>  
                        </div>
                        <div className='row mobileNumber'>
                            <div className='col-md-6'>Mobile No. </div>
                            <div className='col-md-6'>{item.mobileNumber}</div> 
                          
                        </div>
                        <button type="button" className='updatedProfile' data-backdrop="false" data-toggle="modal" data-target="#exampleModal"><AiOutlineEdit/>Updated profile</button>
                    </div>
                    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h4 className="modal-title">Add Subject</h4>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
         <form onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col md'>
          <label className='label'> firstName </label>
        </div>
        <div className='col md'>
          <input type="text"  {...formik.getFieldProps("firstName")}  placeholder=" firstName"/>
          {formik.touched.firstName && formik.errors.firstName ? (
                          <p className="text-danger error">
                            {formik.errors.firstName}
                          </p>
                        ) : null}
        </div>
        </div>
        <div className='row'>
        <div className='col md'>
          <label className='label'> LastName </label>
        </div>
        <div className='col md'>
          <input type="text"  {...formik.getFieldProps("lastName")}  placeholder="lastName" />
          {formik.touched.lastName && formik.errors.lastName ? (
                          <p className="text-danger error">
                            {formik.errors.lastName}
                          </p>
                        ) : null}
        </div>
        </div>
        <div className='row'>
        <div className='col md'>
          <label className='label'>Mobile No</label>
        </div>
        <div className='col md'>
          <input type="text"  {...formik.getFieldProps("mobileNumber")}  placeholder="mobileNumber" />
          {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                          <p className="text-danger error">
                            {formik.errors.mobileNumber}
                          </p>
                        ) : null}
        </div>
        </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>  
       </div>
     
    </div>
  </div>
                    </div>  
                   </div>
                    )
                })
            } 
            {/* <h4 className='headingTwo'>Private Information:-</h4> */}   
        </div>
        </div>
    </div>
    </>
     }
    </>
  )
}

export default ExaminerProfile
