import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DECLINED_REQUESTS_API, UPDATE_REQUESTS_API } from '../../../Apis/apis';
import './declinedRequests.css';
import Loader from '../../../Loader';
import { useSelector, useDispatch } from 'react-redux';
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';
import * as myConstants from '../../../Constants';
import { toast } from 'react-toastify';
import { FcApproval } from "react-icons/fc";

function DeclinedRequests() {
  const dispatch = useDispatch();
  const [declinedRequests, setDeclinedRequests] = useState([]);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
      const { token } = JSON.parse(localStorage.getItem('data'));
      // console.log(token)
      dispatch(loaderValueTrue());
      axios
        .get(DECLINED_REQUESTS_API, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setDeclinedRequests(response.data.data.Examiners);
          dispatch(loaderValueFalse());
          // console.log(response.data.data.Examiners);
        })
        .catch((error) => {
          dispatch(loaderValueFalse());
          console.log(error);
        });
    
  }, []);

  const handleAction = (id, action) => {
    const { token } = JSON.parse(localStorage.getItem('data'));
    dispatch(loaderValueTrue());
    // console.log(id)
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
        const newData = declinedRequests.filter((x) => x._id !== id);
        setDeclinedRequests(newData);
        dispatch(loaderValueFalse());

        const str = data.action.toLowerCase();
        toast.success(
          `User ${str.charAt(0).toUpperCase() + str.slice(1)} Successfully!`,
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(loaderValueFalse());
      });
  };
  //   useEffect(()=>{
  //     handleAction();
  //  });

  return (
    <section className="declined-requests-page ">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          {declinedRequests.length > 0 ? (
            <div className="py-4">
            <h2>All Declined Requests</h2>
            <table className="table all-containers">
              <thead>
                <tr>
                  <th scope="col" className='pl-5'>#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Created-On</th>
                  <th scope="col" style={{textAlign:'center'}}>Approve</th>
                </tr>
              </thead>
              <tbody>
              
                  {declinedRequests.map((req, i) => (
                      <tr key={req._id} className="content-box">
                        <th scope="row" className='pl-5 main-index'>{i + 1}</th>
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
                      </tr>
                    ))}
           
              </tbody>
            </table>
          </div>
            
          ) : (
            <h2 className='py-4'>No Declined Accounts</h2>
          )}
        </>
      )}
    </section>
  );
}

export default DeclinedRequests;
