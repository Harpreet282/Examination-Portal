import React,{useState,useEffect} from 'react'
import { APPROVED_REQUESTS_API } from '../../../Apis/apis';
import axios from 'axios';
import './approvedRequests.css'

const ApprovedRequests = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);

  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(APPROVED_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setApprovedRequests(response.data.data.Examiners);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  

  return (
    <section className='approved-requests-page my-3'>
        <h2>All Approved Request :</h2>
        {approvedRequests.map((req) => {
          return (
            <div  key={req._id} className="content-box p-2 my-2">     
             <div className="email">{req.email}</div>          
         </div>
          );
        })}
      
    </section>
  )
}

export default ApprovedRequests