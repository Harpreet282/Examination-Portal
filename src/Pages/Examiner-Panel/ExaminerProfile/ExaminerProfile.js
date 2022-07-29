import React,{ useEffect,useState,useRef} from 'react'
import { EXAMINER_PROFILE } from '../../../Apis/apis'
import axios from 'axios';
import './ExaminerProfile.css';
import {useSelector,useDispatch} from "react-redux";
import Loader from '../../../Loader';
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions/index";

const ExaminerProfile = () => {
    const[profile,setProfile]=useState([]);
    const dispatch=useDispatch();
    const loadingState = useSelector((state) => state.loadingState.loading);
    let shouldLog = useRef(true);
    useEffect(()=>{
        if (shouldLog.current) {
            shouldLog = false;
        
        const token=JSON.parse(localStorage.getItem('data')).token;
        dispatch(loaderValueTrue()); 
        axios.get(EXAMINER_PROFILE,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.examinerDetails);
            // setProfile(res.data.data.examinerDetails);
            setProfile((oldArray) => [...oldArray, res.data.data.examinerDetails]);
            dispatch(loaderValueFalse()); 
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    },[])
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
           
            {/* <h4 className='headingOne'>Personal Information</h4> */}
              {
                profile.map((item)=>{
                    return(
                        <div className='examiner-profile-page'>
                       
                    <div className='absolute-center'>
                    <h6 className='heading'>Personal Information</h6>
                    <div className='row firstName'>
                            <div className='col-md-6'>Name </div>
                            <div className='col-md-6'>{item.firstName} {item.lastName}</div>
                       
                        </div>
                        
                        <div className='row userType'>
                        <div className='col-md-6'>{item.userType}</div>  
                        <div className='col-md-6'>UserType </div>
                        </div>
                        <div className='row email'>
                            <div className='col-md-6'>Email </div>
                            <div className='col-md-6'>{item.email}</div>  
                        </div>
                        <div className='row mobileNumber'>
                            <div className='col-md-6'>Mobile No. </div>
                            <div className='col-md-6'>{item.mobileNumber}</div>  
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
