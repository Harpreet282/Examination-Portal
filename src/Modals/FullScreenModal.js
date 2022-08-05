import React,{useCallback, useMemo, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreenModal = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const handle = useFullScreenHandle();
    
    // const [isFullScreen, setIsFullScreen] = useState(false)

    const handleHandler = (e) => {
        
        handle.enter()
        navigate("/giveexam",{state : {data : location.state.data}})     
        // console.log("keymodal",location.state.data)  
        // setIsFullScreen(true)

        // console.log(state,"State")
        if(e.key ==="Escape"){
            console.log('dvfsvdfvgvgvvv')
            // setIsFullScreen(false)
            console.log("State False")
            alert("Full screen Mode of ")
        }
        else{
            // setIsFullScreen("")8
            console.log("State True");
        }
    }
    
    const reportChange = useCallback((state,e) => {
        
    })

    // useMemo(() => {

    // },[isFullScreen])
    return (
        <div>
            <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <FullScreen handle={handle} className="text-left mt-3" onChange={reportChange}>
                                <h5>You need to be in full Screen mode for applying this exam!!</h5>
                            </FullScreen>
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