import React, { useState, useEffect, useMemo } from "react";
import "./declinedRequests.css";
import Loader from "../../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { loaderValueFalse, loaderValueTrue } from "../../../redux/actions";
import * as myConstants from "../../../Constants";
import { toast } from "react-toastify";
import Tippy from '@tippyjs/react';
import { FcApproval,FcUp,FcDown } from "react-icons/fc";
import {
RequestsAxios,
  ActionsHandleAxios,
} from "../../../Services/Admin";

function DeclinedRequests() {
  const dispatch = useDispatch();

  const [onChangeSearchTerm, setOnChangeSearchTerm] = useState("");
  const [order, setOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0)
  const [pageIndex, setPageIndex] = useState(0);
  const [searchIndex, setsearchIndex] = useState(0);
  const [declinedRequests, setDeclinedRequests] = useState([]);

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
    const status='declined';
    const sortBy='firstName';
    RequestsAxios(token,status,pageIndex,searchTerm,searchIndex,sortBy,order)
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

  return (
    <section className="declined-requests-page ">
      {loadingState ? 
        <Loader />
       : 
       <>
       {
        declinedRequests.length<=0 && searchTerm===""?
        <h2 className="absolute-center">No Declined Accounts!!</h2>:
                <>
                 <div className="row pt-4">
                <div className="col-md-6">
                  <h2 className={declinedRequests.length<=0 && searchTerm !==""?'d-none':""} >All Declined Requests</h2>
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
                declinedRequests.length<=0 && searchTerm !==""?
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
                  </tr>
                </thead>
                <tbody>
                  {declinedRequests.map((req, i) => 
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
    </section>
  );
}

export default DeclinedRequests;
