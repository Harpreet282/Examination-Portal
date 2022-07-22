import React, { useState, useEffect } from 'react';
import './newRequests.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { PENDING_REQUESTS_API, UPDATE_REQUESTS_API } from '../../../Apis/apis';
import Loader from '../../../Loader';
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';
import * as myConstants from '../../../Constants';
import { FcApproval,FcDeleteRow } from "react-icons/fc";

function NewRequests() {
  const [requests, setRequests] = useState([]);
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {

      const { token } = JSON.parse(localStorage.getItem('data'));
      // console.log(token)
      dispatch(loaderValueTrue());
      axios
        .get(PENDING_REQUESTS_API, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setRequests(response.data.data.Examiners);
          dispatch(loaderValueFalse());
          // console.log(response.data.data.Examiners);
        })
        .catch((error) => {
          dispatch(loaderValueFalse());
          console.log(error);
        });
  }, []);

  const handleAction = (id, action) => {
    dispatch(loaderValueTrue());
    const { token } = JSON.parse(localStorage.getItem('data'));
    // console.log(id);
    const data = {
      examinerID: id,
      action,
    };
    axios
      .put(UPDATE_REQUESTS_API, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response);
        const newData = requests.filter((x) => x._id !== id);
        setRequests(newData);
        dispatch(loaderValueFalse());

        const str = data.action.toLowerCase();
        toast.success(
          `User ${str.charAt(0).toUpperCase() + str.slice(1)} Successfully!`,
        );
      })
      .catch((error) => {
        dispatch(loaderValueFalse());
        console.log(error);
      });
  };

  return (
    <section className="new-requests-page">
      {loadingState ? (
        <Loader />
      ) : (
        <>
        {requests.length > 0 ? (
          <div className="py-4">
          <h2>All New Requests</h2>
          <table className="table all-containers">
            <thead>
              <tr>
                <th scope="col" className='pl-5 main-index'>#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created-On</th>
                <th scope="col" style={{textAlign:'center'}}>Approve</th>
                <th scope="col" style={{textAlign:'center'}}>Decline</th>
              </tr>
            </thead>
            <tbody>
            
                {requests.map((req, i) =>(
                    <tr key={req._id} className="content-box">
                      <th scope="row" className='pl-5'>{i + 1}</th>
                      <td>
                        {req.firstName} {req.lastName}
                      </td>
                      <td>{req.email}</td>
                      <td>{new Date(new Date(req.createdOn).getTime() - 5 * 3600000 - 1800000).toLocaleString()}</td>
                      <td align='center'>
                      <button
                         className="btn approveButton"
                         onClick={() => handleAction(req._id, myConstants.APPROVED)}
                       >
                  <FcApproval size='25px' />
                       </button>
                      </td>
                      <td align='center'>
                      <button
                          className="btn declineButton"
                          onClick={() => handleAction(req._id, myConstants.DECLINED)}
                        >
                         <FcDeleteRow size='25px' />
                        </button>
                      </td>
                     
                    </tr>
                  ))}
         
            </tbody>
          </table>
        </div>
          
        ) : (
          <h2 className='py-4'>No Pending Requests</h2>
        )}
      </>
      
      )}
      <ToastContainer />
    </section>
  );
}

export default NewRequests;
