import React, {useState, useEffect } from 'react'
import './newRequests.css'
import axios from 'axios';
import { PENDING_REQUESTS_API } from '../../../Apis/apis';

const NewRequests = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(PENDING_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setRequests(response.data.data.Examiners);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  

  return (
    <section className='new-requests-page my-3'>
        <h2>All New Pending Request :</h2>
        {requests.map((req) => {
          return (
            <div key={req._id} className="content-box p-2 my-2" >
            <div className="row">
             <div className="col-md-6 requests-left-content">
             <div className="email">{req.email}</div>
             </div>
             <div className="col-md-6 d-flex requests-right-content">
                 <div ><button className='btn approveButton'>Approve</button></div>
                 <div ><button className='btn declineButton'>Decline</button></div>
             </div>
            </div>
         </div>
          );
        })}

      
    </section>
  )
}

export default NewRequests