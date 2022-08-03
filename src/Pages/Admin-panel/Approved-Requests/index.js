import React, { useState, useEffect, useRef,useMemo } from "react";
import "./approvedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import { FcDeleteRow } from "react-icons/fc";

import {
  RequestsAxios,
  ActionsHandleAxios,
} from "../../../Services/Admin";

function ApprovedRequests() {
  const dispatch = useDispatch();

  const [onChangeSearchTerm, setOnChangeSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0)
  const [pageIndex, setPageIndex] = useState(0);
  const [searchIndex, setsearchIndex] = useState(0);
  const [approvedRequests, setApprovedRequests] = useState([])

  let shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(()=>{
    if(onChangeSearchTerm.length>=3){
      setSearchTerm(onChangeSearchTerm)
        }else{
          setSearchTerm("")
        }
  })  


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    // console.log(token)
    dispatch(loaderValueTrue());
    const status='approved';
    if (shouldLog.current) {
      shouldLog = false;
      RequestsAxios(token,status,pageIndex,searchTerm,searchIndex)
      .then((response) => {
        setApprovedRequests(response.data.data.Examiners);
        dispatch(loaderValueFalse());
        setTotalPages(response.data.data.totalPages);
        // console.log(response.data.data.Examiners);
      })
      .catch((error) => {
        dispatch(loaderValueFalse());
        console.log(error);
      });
    }
   
  }, [pageIndex,searchIndex,searchTerm]);
  
useEffect(()=>{
  setPageIndex(0);
  setsearchIndex(0);  
},[searchTerm])


  useMemo(()=>{

  },[searchTerm])
  
  const handleAction = (id, action) => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    dispatch(loaderValueTrue());
    // console.log(id)
    const data = {
      examinerID: id,
      action,
    };
    ActionsHandleAxios(data, token)
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

  // useEffect(()=>{
  //   handleAction()
  // },[])

  return (
    <section className="approved-requests-page">
      {loadingState ? 
        <Loader />
       : 
       <>
       {
        approvedRequests.length<=0 && searchTerm===""?
        <h2 className="absolute-center">No Approved Accounts!!</h2>:
                <>
                 <div className="row pt-4">
                <div className="col-md-6">
                  <h2 className={approvedRequests.length<=0 && searchTerm !==""?'d-none':""} >All Approved Requests</h2>
                </div>
                <div className="col-md-6">
                  <form
                    className="form-inline my-2 my-lg-0 d-block"
                    style={{ textAlign:'right' }}
                
                  >
                    <input
                      className="form-control"
                      value={onChangeSearchTerm}
                      type="search"
                      placeholder="🔍Write keyword to search..."
                      aria-label="Search"
                      onChange={(e) => {setOnChangeSearchTerm(e.target.value)}}
                    />
                    <br/>
                    <small>***Enter Minimum 3 characters to search!!***</small>
                  </form>
                </div>
              </div>
              {
                approvedRequests.length<=0 && searchTerm !==""?
                <h2 className="absolute-center">No Records Match!!</h2> :
                            <div className="py-4">
             

              <table className="table all-containers">
                <thead>
                  <tr>
                    <th scope="col" className="pl-4">
                      #
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile-Number</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                    Decline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {approvedRequests.map((req, i) => 
                      <tr key={req._id} className="content-box">
                        <th scope="row" className="pl-4 main-index">
                        {((searchTerm?searchIndex:pageIndex) * 5) +  i + 1}
                        </th>
                        <td>
                          {req.firstName} {req.lastName}
                        </td>
                        <td>{req.email}</td>
                        <td>+91 {req.mobileNumber}</td>
                        <td>
                          {new Date(
                            new Date(req.createdOn).getTime() -
                              5 * 3600000 -
                              1800000
                          ).toLocaleString()}
                        </td>
                        <td align="center">
                          <button
                            className="btn declineButton"
                            onClick={() =>
                              handleAction(req._id, myConstants.DECLINED)
                            }
                          >
                            <FcDeleteRow size="25px" />
                          </button>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
              <div className="pageButtons my-5">
              <a className={`btn mx-1 ${(searchTerm?searchIndex<1:pageIndex<1)?'disabled':''}`} onClick={()=>{
                searchTerm?
                setsearchIndex(searchIndex-1):
                setPageIndex(pageIndex-1)
                }}>Previous</a>
              <a
                  className={`btn mx-1 ${(searchTerm?!(searchIndex < totalPages - 1) : !(pageIndex < totalPages - 1)) ? "disabled" : ""}`}
                  onClick={() =>{
                    searchTerm?setsearchIndex(searchIndex+1):
                     setPageIndex(pageIndex + 1)}}
                >
                  Next
                </a>
                 {/* {pageIndex < totalPages - 1 && <a
                  className="btn mx-1"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </a>
                } */}
              </div>
            </div>
              }
                </>
       }
       </>
      }


      {/* {loadingState ? (
        <Loader />
      ) : (
        <>
          {allApprovedRequests.length > 0 ? (
            <div className="py-4">
              <div className="row">
                <div className="col-md-6">
                  <h2>All Approved Requests</h2>
                </div>
                <div className="col-md-6">
                  <form
                    className="form-inline my-2 my-lg-0"
                    style={{ justifyContent: "right" }}
                    onSubmit={searchReq}
                  >
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="🔍Search"
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <button className="btn searchBtn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <table className="table all-containers">
                <thead>
                  <tr>
                    <th scope="col" className="pl-4">
                      #
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile-Number</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Decline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allApprovedRequests.map((req, i) => (
                    <tr key={req._id} className="content-box">
                      <th scope="row" className="pl-4 main-index">
                        {pageIndex * 5 + i + 1}
                      </th>
                      <td>
                        {req.firstName} {req.lastName}
                      </td>
                      <td>{req.email}</td>
                      <td>+91 {req.mobileNumber}</td>
                      <td>
                        {new Date(
                          new Date(req.createdOn).getTime() -
                            5 * 3600000 -
                            1800000
                        ).toLocaleString()}
                      </td>
                      <td align="center">
                        <button
                          className="btn"
                          onClick={() =>
                            handleAction(req._id, myConstants.DECLINED)
                          }
                        >
                          <FcDeleteRow size="25px" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pageButtons my-5">
                <a
                  className={`btn mx-1 ${pageIndex < 1 ? "disabled" : ""}`}
                  onClick={() => setPageIndex(pageIndex - 1)}
                >
                  Previous
                </a>
                <a
                  className={`btn mx-1 ${
                    !(pageIndex < totalPages - 1) ? "disabled" : ""
                  }`}
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </a>
               
              </div>
            </div>
          ) : (
            <h2 className="py-4">No Approved Accounts</h2>
          )}
        </>
      )} */}
    </section>
  );
}

export default ApprovedRequests;
