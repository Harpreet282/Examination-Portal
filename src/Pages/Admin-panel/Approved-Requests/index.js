import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { APPROVED_REQUESTS_API, UPDATE_REQUESTS_API } from "../../../Apis/apis";
import "./approvedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import { FcDeleteRow } from "react-icons/fc";

function ApprovedRequests() {
  const dispatch = useDispatch();

  const [approvedRequests, setApprovedRequests] = useState([]);
  let shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog = false;
      const { token } = JSON.parse(localStorage.getItem("data"));
      dispatch(loaderValueTrue());
      axios
        .get(APPROVED_REQUESTS_API, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setApprovedRequests(response.data.data.Examiners);
          dispatch(loaderValueFalse());
          // console.log(response.data.data.Examiners);
        })
        .catch((error) => {
          console.log(error);
          dispatch(loaderValueFalse());
        });
    }
  }, []);

  const handleAction = (id, action) => {
    const { token } = JSON.parse(localStorage.getItem("data"));
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
        const newData = approvedRequests.filter((x) => x._id !== id);
        setApprovedRequests(newData);
        dispatch(loaderValueFalse());

        const str = data.action.toLowerCase();
        toast.success(
          `User ${str.charAt(0).toUpperCase() + str.slice(1)} Successfully!`
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error");
        dispatch(loaderValueFalse());
      });
  };
  //   useEffect(()=>{
  //     handleAction();
  //  },[]);

  return (
    <section className="approved-requests-page">
      {loadingState ? (
        <Loader />
      ) : (
        <>
          {approvedRequests.length > 0 ? (
            <div className="py-4">
              <h2>All Approved Requests</h2>
              <table className="table all-containers">
                <thead>
                  <tr>
                    <th scope="col" className="pl-5">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{textAlign:'center'}}>Decline</th>
                  </tr>
                </thead>
                <tbody>
                
                    {approvedRequests.map((req, i) => (
                        <tr key={req._id} className="content-box">
                          <th scope="row" className="pl-5 main-index">{i + 1}</th>
                          <td>
                            {req.firstName} {req.lastName}
                          </td>
                          <td>{req.email}</td>
                          <td>{new Date(new Date(req.createdOn).getTime() - 5 * 3600000 - 1800000).toLocaleString()}</td>
                          <td align='center'>
                            <button
                              className="btn"
                              onClick={() =>
                                handleAction(req._id, myConstants.DECLINED)
                              }
                            >
                        <FcDeleteRow size='25px'/>
                            </button>
                          </td>
                        </tr>
                      
                    ))}
             
                </tbody>
              </table>
            </div>
          ) : (
            <h2 className='py-4'>No Approved Accounts</h2>
          )}
        </>
      )}
    </section>
  );
}

export default ApprovedRequests;
