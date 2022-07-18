import React, { useState, useEffect, useRef } from "react";
import "./newRequests.css";
import axios from "axios";
import { PENDING_REQUESTS_API, UPDATE_REQUESTS_API } from "../../../Apis/apis";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from '../../../Constants'
import { ToastContainer, toast } from "react-toastify";

const NewRequests = () => {
  const [requests, setRequests] = useState([]);
  const dispatch = useDispatch();
  var shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog = false;
      const token = JSON.parse(localStorage.getItem("data")).token;
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
    }
  }, []);

  const handleAction = (id, action) => {
    dispatch(loaderValueTrue());
    const token = JSON.parse(localStorage.getItem("data")).token;
    // console.log(id);
    const data = {
      examinerID: id,
      action: action,
    };
    axios
      .put(UPDATE_REQUESTS_API, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // console.log(response);
        let newData = requests.filter((x) => x._id !== id);
        setRequests(newData);
        dispatch(loaderValueFalse());

        const str = data.action.toLowerCase();
        toast.success(
          `User ${str.charAt(0).toUpperCase() + str.slice(1)} Successfully!`
        );
      })
      .catch((error) => {
        dispatch(loaderValueFalse());
        console.log(error);
      });
  };

  return (
    <section className="new-requests-page my-4">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          {requests.length > 0 ? (
            <>
              <h2>All New Pending Request :</h2>
              {requests.map((req) => {
                return (
                  <div key={req._id} className="content-box p-2 my-2">
                    <div className="row">
                      <div className="col-md-8 requests-left-content">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="reqData">
                              {req.firstName} {req.lastName}
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
                            className="btn declineButton"
                            onClick={() => handleAction(req._id, myConstants.DECLINED)}
                          >
                            Decline
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn deleteButton"
                            onClick={() => handleAction(req._id, myConstants.DELETED)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <h2>No Pending Requests</h2>
          )}
        </>
      )}
      <ToastContainer />
    </section>
  );
};

export default NewRequests;
