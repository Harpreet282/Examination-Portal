import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import {loaderValue, loaderValue2} from "../redux/actions/index"
import { useDispatch } from 'react-redux'

const KeyModal = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const dispatch = useDispatch()
    const [accessKey, setAccessKey] = useState({})
    const [id, setId] = useState({})

    useEffect(() => {
        setId(
            {
                studentID: location.state.studentID,
                examID: location.state.examID,
                accessKey: accessKey,
            }
        )
    }, [accessKey])

    const submitHandler = () => {
        console.log(id)

    }

    const[item, setItem] = useState()

    const getKey = () => {
        const token = JSON.parse(localStorage.getItem('data')).token;
        dispatch(loaderValue2())
        axios.get("https://exam-portal-by-hritik-sanam.herokuapp.com/student/exam",id,{headers: {Authorization: `Bearer ${token}`},}
        )
        .then(resp =>
           {
            console.log('resp',resp)
            dispatch(loaderValue())
            setItem(resp.data.data.student.exams)
            navigate('/examguidelines')
        })
        .catch(err => {
            alert("Enter the valid key")
            {console.log(err.message)}
        })
    }

    useEffect(() => {
        getKey()
    },[])


    return (

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
        </div>
    )
}

export default KeyModal