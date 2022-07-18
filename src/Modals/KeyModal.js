import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ExamGuildelines from "../Pages/Student-panel/studentView/Exams/ExamGuildelines"

const KeyModal = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [accessKey, setAccessKey] = useState({})
    const [id, setId] = useState({})

    useEffect(() => {
        setId(
            {
                studentID: location.state.studentID,
                examID:  location.state.examID,
                accessKey: accessKey,
            }
        )
    },[accessKey])
    
    const submitHandler = () => {
        console.log(id)
        navigate('/examguidelines')

    }
    
    return (
        <div>
            <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{borderBottom:"0 none", paddingBottom:"0"}}>
                            <h5 className="modal-title" id="exampleModalLongTitle">Student  Verification</h5><br/>
                           
                            <button type="button" onClick={()=>navigate('/studentDashboard/')} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p>Enter the key which you received on your registered mail.</p>
                            <input 
                                type="text"
                                placeholder='Enter your exam key'
                                onChange={(e) => setAccessKey(e.target.value)}
                                style={{border:"1px solid #e2dede",
                                borderRadius:"10px",
                                padding:"10px 55px 10px 15px",
                                marginright:"20px"}}
                            />       
                        </div>
                        <div className="modal-footer" style={{borderTop: "0 none"}}>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>navigate('/studentDashboard/')}>Close</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={submitHandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyModal