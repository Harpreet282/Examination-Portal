import React,{useState,useEffect} from 'react'
import './ExaminerDashboard.css'
import axios from 'axios';
const ExaminerDashboard = () => {
    const[request,setDeclineRequest]=useState([]);
    const token=JSON.parse(localStorage.getItem('data')).token;
    useEffect(()=>{
    axios.get('https://exam-portal-by-hritik-sanam.herokuapp.com/examiner/dashboard',{headers:{Authorization:`Bearer ${token}`}})
    .then((res)=>{
        console.log(res);
        setDeclineRequest(res.data.data); 
        console.log(request);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
  return (
    <div>
    {
        request.map((post)=>{
            return (<div>{post.firstName}
            console.log(request);
            </div>
            )
        })
    }
        <section className='examinerDashboard'>
            <div className='container all-containers my-5'>
                <div className='row all-content'>
                    <div className='col-md-5 dashboard-left-content'>
                        <img src="" className="img-fluid" alt=""/>
                        {
        request.map((post)=>{
            return (<div>firstname: {post.firstName}</div>
            )
        })
    }
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