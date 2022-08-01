import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import { loaderValueFalse, loaderValueTrue } from "../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader'
import { EXAM_ACCESSCODE } from '../Apis/apis'

const KeyModal = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const loadingState = useSelector((state) => state.loadingState.loading)

    const dispatch = useDispatch()
    const [accessKey, setAccessKey] = useState('')
    const [id, setId] = useState({})

    // console.log(location.state.studentID, 'studentid')
    // console.log(location.state.examID, 'examId')

    useEffect(() => {
        setId(
            {
                studentID: location.state.studentID,
                accessCode: accessKey,
                examID: location.state.examID,

            }
        )
    }, [accessKey])


    const submitHandler = () => {
        dispatch(loaderValueTrue())
        const token = JSON.parse(localStorage.getItem('data')).token;
        // console.log('AccessCodeid', id);

        dispatch(loaderValueTrue())
        axios.post(EXAM_ACCESSCODE, id, { headers: { Authorization: `Bearer ${token}` }, }
        )
            .then(resp => {
                // console.log('responseKEY', resp)
                dispatch(loaderValueFalse())

                console.log(resp.data.data, 'keymodal')
                navigate('/examguidelines', { state: { detail: resp.data.data } })
            })
            .catch(err => {
                dispatch(loaderValueFalse())
                alert("Enter the valid key");
                navigate('/studentDashboard')
            })
    }


    return (

        <>
            {loadingState ?
                <Loader /> :
                <div className="modal" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header" style={{ borderBottom: "0" }}>
                                <h5 className="modal-title" id="staticBackdropLabel">Student Verification</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => navigate('/studentDashboard/')}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Enter the key which you have received on your  Email-id.</p>
                                <input
                                    type="text"
                                    placeholder="Enter the access key"
                                    onChange={(e) => setAccessKey(e.target.value)}
                                    style={{
                                        border: "1px solid #e2dede",
                                        borderRadius: "10px",
                                        padding: "10px 55px 10px 15px",
                                        marginRight: "20px"
                                    }}
                                />
                            </div>
                            <div className="modal-footer" style={{ borderTop: "0 none" }}>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => navigate('/studentDashobard/')}>Close</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={submitHandler}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            }
        </>
    )
}

export default KeyModal