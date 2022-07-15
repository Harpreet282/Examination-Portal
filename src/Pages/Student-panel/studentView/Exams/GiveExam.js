import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactCountdown from './Countdown'
import "./GiveExam.css"
import Swal from "sweetalert2"
import Questions from './Questions'


const GiveExam = () => {

    const navigate = useNavigate()
    const submitHandle=()=>{
        Swal.fire({
            type: 'success',
            text: 'You have successfully completed the exam!! ',
            confirmButtonText:"Ok",
          }).then(
            ()=>{
              navigate("/studentDashboard")
          })
    }

    const data =[
        {
            id: 1,
            btnNo:1,
        },
        {
            id: 2,
            btnNo:2,
        },
        {
            id: 3,
            btnNo:3,
        },
        {
            id: 4,
            btnNo:4,
        },
        {
            id: 5,
            btnNo:5,
        },
        {
            id: 6,
            btnNo:6,
        },
        {
            id: 7,
            btnNo:7,
        },
        {
            id: 8,
            btnNo:8,
        },
        {
            id: 9,
            btnNo:9,
        },
        {
            id: 10,
            btnNo:10,
        },
        {
            id: 11,
            btnNo:11,
        },
        {
            id: 12,
            btnNo:12,
        },
        {
            id: 13,
            btnNo:13,
        },
        {
            id: 14,
            btnNo:14,
        },
        {
            id: 15,
            btnNo:15,
        },
        {
            id: 16,
            btnNo:16,
        },
        {
            id: 17,
            btnNo:17,
        },
        {
            id: 18,
            btnNo:18,
        },
        {
            id: 19,
            btnNo:19,
        },
        {
            id: 20,
            btnNo:20,
        },
    ]
  return (
    <div>
        <div className='give-exam mx-5'>
            <div className='section-nav'>
                <div className='row'>
                    <div className='col'>
                        <div className='subject  my-3'>
                            <p>Subject: Progamming in c</p>
                            <p>Code: #RDF004</p>
                        </div>
                    </div>
                    <div className='col timer my-4 mr-4'>
                        <p>Remaining time: <button><ReactCountdown /></button> </p>                          
                    </div>
                </div>
            </div>
            <hr/>
        </div> 
       
        <div className='row mr-0'>

            <div className='col-md-8 mb-2 section-questions'>
                <div className='give-exam mx-5'>
                    <div className=''>
                        <Questions />
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='row mt-4'>
                    {
                        data.map((content) =>{
                            return(
                                <div key={content.id}>
                                    <div className='btn-right-section my-3 col-md-4' >
                                        <button type='button'className='btn'>{content.btnNo}</button>
                                    </div>
                                </div>
                                
                            )
                        })
                    } 
                </div> 
                <div className='col-md-12 mt-4 text-center'>
                    <div className='button'>
                        <button type="button" className="btn btn-success btn-left" onClick={submitHandle}>Submit</button> 
                    </div>
                </div>
                 
            </div>

        </div>
    </div>
  )
}

export default GiveExam