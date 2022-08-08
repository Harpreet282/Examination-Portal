import React, { useState, useEffect,useMemo } from "react";
import "./newRequests.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../../Loader";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { FcApproval, FcDeleteRow,FcUp, FcDown} from "react-icons/fc";
import Tippy from '@tippyjs/react';
import { RequestsAxios, ActionsHandleAxios } from "../../../Services/Admin";

function NewRequests() {
  const [onChangeSearchTerm, setOnChangeSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [order, setOrder] = useState("");
  const [totalPages, setTotalPages] = useState(0)
  const [pageIndex, setPageIndex] = useState(0);
  const [searchIndex, setsearchIndex] = useState(0);
  const [newRequests, setNewRequests] = useState([]);
 
  const dispatch = useDispatch();
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
    const status='pending';
    const sortBy='firstName';
    RequestsAxios(token,status,pageIndex,searchTerm,searchIndex,sortBy,order)
      .then((response) => {
        setNewRequests(response.data.data.Examiners);
        dispatch(loaderValueFalse());
        setTotalPages(response.data.data.totalPages);
        // console.log(response.data.data.Examiners);
      })
      .catch((error) => {
        dispatch(loaderValueFalse());
        console.log(error);
      });
  }, [pageIndex,searchIndex,searchTerm,order]);
  
useEffect(()=>{
  setPageIndex(0);
  setsearchIndex(0);  
},[searchTerm])

  useMemo(()=>{

  },[searchTerm])


  const handleAction = (id, action) => {
    const token = JSON.parse(localStorage.getItem("data")).token;

    dispatch(loaderValueTrue());
    // console.log(id);
    const data = {
      examinerID: id,
      action,
    };
    ActionsHandleAxios(data, token)
      .then((response) => {
        // console.log(response);
        const newData = newRequests.filter((x) => x._id !== id);
        setNewRequests(newData);
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
    <section className="new-requests-page">

{loadingState ? 
        <Loader />
       : 
       <>
       {
        newRequests.length<=0 && searchTerm===""?
        <h2 className="absolute-center">No New Pending Requests!!</h2>:
                <>
                 <div className="row pt-4">
                <div className="col-md-6">
                  <h2 className={newRequests.length<=0 && searchTerm !==""?'d-none':""} >All New Requests</h2>
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
                newRequests.length<=0 && searchTerm !==""?
                <h2 className="absolute-center">No Records Match!!</h2> :
                            <div className="py-4">
             

              <table className="table all-containers">
                <thead>
                  <tr>
                    <th scope="col" className="pl-4">
                      #
                    </th>
                    <th scope="col">Name
                    {order==="" || order==="-1"?
 <Tippy content={<span style={{color:'#E2B144'} } >Sort by Ascending Order</span>}>
 <button className="btn" onClick={()=>setOrder("1")}> <FcUp/></button>
</Tippy>
:
<Tippy content={<span style={{color:'#E2B144'} } >Sort by Descending Order</span>}>
   <button className="btn" onClick={()=>setOrder("-1")}> <FcDown/></button>
</Tippy>
         }
         </th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile-Number</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Approve
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Decline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {newRequests.map((req, i) => 
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
                            className="btn approveButton"
                            onClick={() =>
                              handleAction(req._id, myConstants.APPROVED)
                            }
                          >
                            <FcApproval size="25px" />
                          </button>
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
          {requests.length > 0 ? (
            <div className="py-4">
              <div className="row">
                <div className="col-md-6">
                  <h2>All New Requests</h2>
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
                    <th scope="col" className="pl-4 main-index">
                      #
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile-Number</th>
                    <th scope="col">Created-On</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Approve
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Decline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests
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
                        <th scope="row" className="pl-4">
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
            <h2 className="py-4">No Pending Requests</h2>
          )}
        </>
      )} */}
    </section>
  );
}

export default NewRequests;
