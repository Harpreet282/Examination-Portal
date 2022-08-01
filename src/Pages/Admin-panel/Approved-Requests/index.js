import React, { useState, useEffect, useRef } from "react";
import "./approvedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import { FcDeleteRow } from "react-icons/fc";

import {
  RequestsAxios,
  SearchRequestsAxios,
  ActionsHandleAxios,
} from "../../../Services/Admin";

function ApprovedRequests() {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(0);
  const [searchPageIndex, setSearchPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRequests, setSearchRequests] = useState([]);
  const [allApprovedRequests, setAllApprovedRequests] = useState([]);
  let shouldLog = useRef(true);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    const status = "approved";
    if (shouldLog.current) {
      shouldLog = false;
      dispatch(loaderValueTrue());
      RequestsAxios(token, status, pageIndex)
        .then((response) => {
          setApprovedRequests(response.data.data.Examiners);
          setTotalPages(response.data.data.totalPages);
          // console.log(totalPages)
          console.log(response, "resAppr");
          dispatch(loaderValueFalse());
        })
        .catch((error) => {
          console.log(error);
          dispatch(loaderValueFalse());
        });
    }
  }, [pageIndex]);

  const searchReq = () => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    if (shouldLog.current) {
      shouldLog = false;
      dispatch(loaderValueTrue());
      const status = "approved";
      SearchRequestsAxios(token,status,pageIndex,searchTerm)
        .then((response) => {
          setSearchRequests(response.data.data.Examiners);
          setTotalPages(response.data.data.totalPages);
          // console.log(totalPages)
          // console.log(response.data.data.Examiners);
          dispatch(loaderValueFalse());
          console.log(response, "resSeach");
        })
        .catch((error) => {
          console.log(error);
          dispatch(loaderValueFalse());
        });
    }
  };
  useEffect(() => {
    searchReq();
  },[pageIndex]);

  useEffect(() => {
    if (searchRequests.length>0) {
      setAllApprovedRequests(searchRequests);
    } else {
      setAllApprovedRequests(approvedRequests);
    }
  });

// console.log(allApprovedRequests)

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
  //   useEffect(()=>{
  //     handleAction();
  //  },[]);

  return (
    <section className="approved-requests-page">
      {loadingState ? (
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
                      // value={searchTerm}
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
                {/* {pageIndex < totalPages - 1 && <a
                  className="btn mx-1"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </a>
                } */}
              </div>
            </div>
          ) : (
            <h2 className="py-4">No Approved Accounts</h2>
          )}
        </>
      )}
    </section>
  );
}

export default ApprovedRequests;
