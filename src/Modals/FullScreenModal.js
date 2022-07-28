import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreenModal = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state.data,'fullscreen')
    // const submitHandler = () => {
    //     // e.preventDefault()
    //     navigate('/studentDashboard/examguidelines')

    // }
    const handle = useFullScreenHandle();

    const handleHandler = () => {
        
        handle.enter()
        navigate("/giveexam",{state : {data : location.state.data}})     
        // console.log("keymodal",location.state.data)  
    }
 
    return (
        <div>
            <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <FullScreen handle={handle} className="text-left mt-3">
                                <h5>You need to be in full Screen mode for applying this exam!!</h5>
                            </FullScreen>
                        </div>
                        <div className="modal-footer" style={{ borderTop: "0 none" }}>
                            <button type="submit" className="btn btn-success" data-dismiss="modal" 
                                onClick={handleHandler}>Enter full screen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenModal