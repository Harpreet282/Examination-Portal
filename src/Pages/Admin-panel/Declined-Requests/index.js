import React, { useState, useEffect } from "react";
import "./declinedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import { FcApproval } from "react-icons/fc";
import {
RequestsAxios,
  ActionsHandleAxios,
} from "../../../Services/Admin";

function DeclinedRequests() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0)
    const [pageIndex, setPageIndex] = useState(0);
  const [declinedRequests, setDeclinedRequests] = useState([]);
  const loadingState = useSelector((state) => state.loadingState.loading);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data")).token;
    // console.log(token)
    dispatch(loaderValueTrue());
    const status='declined';
    RequestsAxios(token,status,pageIndex)
      .then((response) => {
        setDeclinedRequests(response.data.data.Examiners);
        dispatch(loaderValueFalse());
        setTotalPages(response.data.data.totalPages);
        // console.log(response.data.data.Examiners);
      })
      .catch((error) => {
        dispatch(loaderValueFalse());
        console.log(error);
      });
  }, [pageIndex]);

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
        const newData = declinedRequests.filter((x) => x._id !== id);
        setDeclinedRequests(newData);
        dispatch(loaderValueFalse());

        const str = data.action.toLowerCase();
        toast.success(
          `User ${str.charAt(0).toUpperCase() + str.slice(1)} Successfully!`
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
              <div className="row">
                <div className="col-md-6">
                  <h2>All Declined Requests</h2>
                </div>
                <div className="col-md-6">
                  <form
                    className="form-inline my-2 my-lg-0"
                    style={{ justifyContent: "right" }}
                  >
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="🔍Enter Email or Name"
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
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
                      Approve
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {declinedRequests
                    .filter((req) => {
                      if (searchTerm === "") {
                        return req;
                      } else if (
                        (
                          req.firstName.toLowerCase() || req.email.toLowerCase()
                        ).includes(searchTerm.toLowerCase())
                      ) {
                        return req;
                      }
                    })
                    .map((req, i) => 
                      <tr key={req._id} className="content-box">
                        <th scope="row" className="pl-4 main-index">
                        {(pageIndex * 5) +  i + 1}
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
                            className="btn approveButton"
                            onClick={() =>
                              handleAction(req._id, myConstants.APPROVED)
                            }
                          >
                            <FcApproval size="25px" />
                          </button>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
              <div className="pageButtons my-5">
              <a className={`btn mx-1 ${pageIndex<1?'disabled':''}`} onClick={()=>setPageIndex(pageIndex-1)}>Previous</a>
              <a
                  className={`btn mx-1 ${!(pageIndex < totalPages - 1) ? "disabled" : ""}`}
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  Next
                </a>
              </div>
            </div>
          ) : (
            <h2 className="py-4">No Declined Accounts</h2>
          )}
        </>
      )}
    </section>
  );
}

export default DeclinedRequests;
