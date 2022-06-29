import React from 'react'
import './ExaminerDashboard.css'
import axios from 'axios';
const ExaminerDashboard = () => {
    axios.get('https://exam-portal-by-hritik-sanam.herokuapp.com/examiner/dashboard')
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
  return (
    <div>
        <section className='examinerDashboard'>
            <div className='container all-containers my-5'>
                <div className='row all-content'>
                    <div className='col-md-5 dashboard-left-content'>
                        <img src="" className="img-fluid" alt=""/>
                        <p>FirstName :</p>
                        <p>LastName :</p>
                        <p>Email :</p>
                        <p>UserType :</p>
                    </div>
                    <div className='col-md-7 dashboard-right-content'>
                    <div className='row'>
        <div className='col-md my-2'>
        <button className='btn'>BTech</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn '>MCA</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn'>Bcom</button>
        </div>
        <div className='col-md my-2'>
        <button className='btn'>BCA</button>
        </div>
       
        </div>
        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ExaminerDashboard
