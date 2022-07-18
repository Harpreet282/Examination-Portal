import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { DECLINED_REQUESTS_API, UPDATE_REQUESTS_API } from '../../../Apis/apis';
import './declinedRequests.css';
import Loader from '../../../Loader';
import { useSelector, useDispatch } from 'react-redux';
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';
import * as myConstants from '../../../Constants';
import { ToastContainer, toast } from 'react-toastify';

function DeclinedRequests() {
  const dispatch = useDispatch();
  const [declinedRequests, setDeclinedRequests] = useState([]);
  let shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog = false;
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
    }
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
    <section className="declined-requests-page my-4">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          {declinedRequests.length > 0 ? (
            <>
              <h2>Declined Request :</h2>
              {declinedRequests.map((req) => (
                <div key={req._id} className="content-box p-2 my-2">
                  <div className="row">
                    <div className="col-md-8 requests-left-content">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="reqData">
                            {req.firstName}
                            {' '}
                            {req.lastName}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="reqData">{req.email}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex requests-right-content">
                      <div>
                        <button
                          className="btn approveButton"
                          onClick={() => handleAction(req._id, myConstants.APPROVED)}
                        >
                          Approve
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn btn deleteButton"
                          onClick={() => handleAction(req._id, myConstants.DELETED)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h2>No Declined Accounts</h2>
          )}
        </>
      )}
      <ToastContainer />
    </section>
  );
}

export default DeclinedRequests;
