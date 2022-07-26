import React, { useState, useEffect, useRef } from "react";
import "./approvedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import { FcDeleteRow } from "react-icons/fc";
import {ApprovedRequestsAxios,ActionsHandleAxios} from '../../../Services/Admin';

function ApprovedRequests() {
  const dispatch = useDispatch();
const [searchTerm,setSearchTerm]=useState("");
  const [approvedRequests, setApprovedRequests] = useState([]);
  let shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    if (shouldLog.current) {
      shouldLog = false;
      dispatch(loaderValueTrue());
      ApprovedRequestsAxios(token)
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
    const token = JSON.parse(localStorage.getItem("data")).token;
    dispatch(loaderValueTrue());
    // console.log(id)
    const data = {
      examinerID: id,
      action,
    };
    ActionsHandleAxios(data,token)
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
             <div className="row">
              <div className="col-md-6">
              <h2>All Approved Requests</h2>
              </div>
              <div className="col-md-6">
              <form className="form-inline my-2 my-lg-0" style={{justifyContent:'right'}}>
      <input className="form-control mr-sm-2" type="search" placeholder="🔍Enter Email or Name" aria-label="Search" onChange={(e)=>{setSearchTerm(e.target.value)}} />
    </form>
              </div>
             </div>
              <table className="table all-containers">
                <thead>
                  <tr>
                    <th scope="col" className="pl-4">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile-Number</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{textAlign:'center'}}>Decline</th>
                  </tr>
                </thead>
                <tbody>
                
                    {approvedRequests.filter((req)=>{
if(searchTerm==""){
  return req
} else if((req.firstName.toLowerCase() || req.email.toLowerCase()).includes(searchTerm.toLowerCase())){
  return req
}
                    }).map((req, i) => (
                        <tr key={req._id} className="content-box">
                          <th scope="row" className="pl-4 main-index">{i + 1}</th>
                          <td>
                            {req.firstName} {req.lastName}
                          </td>
                          <td>{req.email}</td>
                          <td>+91 {req.mobileNumber}</td>
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
