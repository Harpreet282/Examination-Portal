import React, { useState,useEffect } from 'react'
import "./Exams.css"
import Timer from "../../Timer/Timer" 
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
import {loaderValueFalse, loaderValueTrue} from "../../../../redux/actions/index"
import {useDispatch, useSelector} from "react-redux"
import Loader from "../../../../Loader/index"

const Exams = () => {

  const [item, setItem] = useState([]);
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loadingState.loading)
  
  useEffect(() => {
   getData()
  },[]);

  const getData = () => {
    const token = JSON.parse(localStorage.getItem('data')).token;
    dispatch(loaderValueTrue())
    axios.get("https://exam-portal-by-hritik-sanam.herokuapp.com/student/dashboard",{headers: {Authorization: `Bearer ${token}`},}
    )
    .then(resp =>
       {
        console.log('resp',resp)
        dispatch(loaderValueFalse())
        setItem(resp.data.data.student.studentexams)}
       )
    .catch(err => {console.log(err)
    dispatch(loaderValueFalse())})
  }

  const navigate = useNavigate()

  // const openModal = () => {
  //   navigate('/modal');
  // };
  
  return (
    <div className='exam-page'>
      { 
  console.log(item,'item')
      
      }
      {isLoading ? <Loader /> : 
        <div className='container'>
          <div className='row'>
            {item?.map((content) => {
              return (
                <div className='col-md-4 exams-col' key={content.examID}>
                  <div className="card exams-card">
                    <div className="card-body">
                      <h3 className="card-title">{content.subject}</h3>
                      <p>Exams date: {content.examDate.slice(0,10)}</p>
                      <p className="card-text  exams-timings">Start Time: {content.startTime} {content.startTime.slice(0,2) <=12 ? "A.M." : "P.M."}</p>
                      <p className="card-text  exams-timings">End time: {content.endTime} {content.endTime.slice(0,2) <=12 ? "A.M." : "P.M."}</p>
                    </div>
                    <div className="student">
                      <div href="#">
                        <Timer data={content} date={content.examDate} starttime={content.startTime} end={content.endTime}/>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            
          </div>
        </div>}
    </div>
  );
}

export default Exams;
