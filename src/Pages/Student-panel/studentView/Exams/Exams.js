import React, { useState,useEffect } from 'react'
import "./Exams.css"
import Timer from "../../Timer/Timer" 
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
import {loaderValue, loaderValue2} from "../../../../redux/actions/index"
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
    dispatch(loaderValue2())
    axios.get("https://exam-portal-by-hritik-sanam.herokuapp.com/student/dashboard",{headers: {Authorization: `Bearer ${token}`},}
    )
    .then(resp =>
       {
        console.log('resp',resp)
        dispatch(loaderValue())
        setItem(resp.data.data.student.exams)}
       )
    .catch(err => console.log(err))
  }

  const navigate = useNavigate()

  const openModal = (content) =>   {

    // console.log(content.studentID)
    navigate("/keymodal",{state:{studentID:content.studentID,examID:content.examID}})

  } 

  return (
    
    <div>
      {isLoading ? <Loader /> : 
      <div className='container'>
        <div className='row'>
            {item?.map((content) => {
              return (
                <div className='col-md-6 exams-col' key={content.examID}>
                  <div className="card exams-card">
                    <div className="card-body">
                      <h3 className="card-title">{content.subject}</h3>
                      <p>Exams date: {content.examDate.slice(0,10)}</p>
                      <p className="card-text  exams-timings">Start Time: {content.startTime} AM</p>
                      <p className="card-text  exams-timings">End time: {content.endTime}AM</p>
                    </div>
                    <div className="student-card-body">
                      <button href="#" className="card-button" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>{openModal(content)}}>
                        <Timer date={content.examDate} time={content.startTime}/>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>}
    </div>
  )
}

export default Exams