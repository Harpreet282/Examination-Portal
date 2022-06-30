import React, {useState, useEffect } from 'react'
import './newRequests.css'
import axios from 'axios';
import { PENDING_REQUESTS_API,UPDATE_REQUESTS_API } from '../../../Apis/apis';

const NewRequests = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(PENDING_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setRequests(response.data.data.Examiners);
      console.log(response.data.data.Examiners);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  

  const handleAction=(id,action)=>{
    const token=JSON.parse(localStorage.getItem('data')).token;
console.log(id)
   const data={
      examinerID:id,
      action:action
    }
    axios
    .post(UPDATE_REQUESTS_API,data, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      console.log(response)
    let newData=requests.filter(x=>x._id !== id);
    setRequests(newData)
    })
    .catch((error) => {
      console.log(error);
    });
  }
//   useEffect(()=>{
//     handleAction();
//  },[]);

  return (
    <section className='new-requests-page my-3'>
       {requests.length>0?
        <>
        <h2>All New Pending Request :</h2>
        {requests.map((req) => {
          return (
            <div key={req._id} className="content-box p-2 my-2" >
            <div className="row">
             <div className="col-md-6 requests-left-content">
             <div className="email">{req.email}</div>
             </div>
             <div className="col-md-6 d-flex requests-right-content">
                 <div ><button className='btn approveButton' onClick={()=>handleAction(req._id,'APPROVED')}>Approve</button></div>
                 <div ><button className='btn declineButton' onClick={()=>handleAction(req._id,'DECLINED')}>Decline</button></div>
                 <div ><button className='btn deleteButton' onClick={()=>handleAction(req._id,'DELETED')}>Delete</button></div>
             </div>
            </div>
         </div>
          );
        })}
        </>
      :
      <h2>No Pending Requests</h2>
      }

      
    </section>
  )
}

export default NewRequests