import React,{useCallback, useMemo, useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreenModal = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    



    const handle = useFullScreenHandle();
    
    // const [isFullScreen, setIsFullScreen] = useState(false)

    const handleHandler = (e) => {
        
        navigate("/giveexam",{state : {data : location.state.data}})     
    }
    
    return (
        <div>
            <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                          
                                <h5>You need to be in full Screen mode for applying this exam!!</h5>
                          
                        </div>
                        <div className="modal-footer" style={{ borderTop: "0 none" }}>
                            <button type="submit" className="btn btn-success" data-dismiss="modal" 
                                onClick={(e) => {handleHandler(e)
                                    
                                }}>Enter full screen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenModal