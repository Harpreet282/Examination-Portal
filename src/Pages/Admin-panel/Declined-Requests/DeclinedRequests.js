import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { DECLINED_REQUESTS_API } from '../../../Apis/apis';
import './declinedRequests.css'

const DeclinedRequests = () => {
  const [declinedRequests, setDeclinedRequests] = useState([]);

  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(DECLINED_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setDeclinedRequests(response.data.data.Examiners);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <section className='declined-requests-page my-3'>
        <h2>Declined Request :</h2>
        {declinedRequests.map((req) => {
          return (
            <div className="content-box p-2 my-2" key={req._id}>     
             <div className="email">{req.email}</div>          
         </div>
          );
        })}

      
    </section>
  )
}

export default DeclinedRequests