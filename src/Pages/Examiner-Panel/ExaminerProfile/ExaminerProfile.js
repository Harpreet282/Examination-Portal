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
        <div className='container my-5'>
            <img src="https://p7.hiclipart.com/preview/417/305/229/female-woman-icon-black-hair-cliparts.jpg"/>
            <h4 className='headingOne'>Personal Information</h4>
              {
                profile.map((item)=>{
                    return(
                        <>
                        <div className='firstName'>
                            <p className='firstNameHeading'>FirstName:- </p>
                            <p className='firstNameData'>{item.firstName}</p>
                        </div>
                        <div className='lastName'>
                        <p className='lastNameHeading'>LastName:- </p>
                        <p className='lastNameData'>{item.lastName}</p>
                        </div>
                        <div className='userType'>
                        <p className='userTypeHeading'>userType:- </p>
                        <p className='userTypeData'>{item.userType}</p>  
                        </div>
                   </>
                    )
                })
            } 
            <h4 className='headingTwo'>Private Information:-</h4>
            {
                profile.map((item)=>{
                    return(
                        <>
                        <div className='email'>
                            <p className='emailHeading'>Email:- </p>
                            <p className='emailData'>{item.email}</p>  
                        </div>
                        <div className='mobileNumber'>
                            <p className='mobileNumberHeading'>mobileNumber:- </p>
                            <p className='mobileNumberData'>{item.mobileNumber}</p>  
                        </div>
                   </>
                    )
                })
            }    
        </div>
    </div>
    </>
     }
    </>
  )
}

export default ExaminerProfile
