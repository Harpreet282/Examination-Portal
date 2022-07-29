import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactCountdown from './Countdown'
import "./GiveExam.css"
import Swal from "sweetalert2"
import './Questions.css'
import axios from 'axios'
import { loaderValueTrue, loaderValueFalse } from "../../../../../src/redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../../../../Loader"



const GiveExam = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data; // y api se aara hai data bhot door se 
    const [ques, setQues] = useState([]);
    const [total, setTotal] = useState(0);
    const [pageNo, setPageNo] = useState(0)
    const [btns, setBtns] = useState([]);
    const dispatch = useDispatch()
    const [checkList, setCheckList] = useState([]);
    const loadingState = useSelector((state) => state.loadingState.loading);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('data')).token;
        console.log(token, "token")
        dispatch(loaderValueTrue())
        axios.get(`https://exam-portal-by-hritik-sanam.herokuapp.com/student/questions?studentID=${data.studentID}&examID=${data.exam.examID}&pageIndex=${pageNo}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {

            // console.log("res", res);
            dispatch(loaderValueFalse())
            setQues(res.data.data.question);
            console.log(res.data.data.question,"Qusetions");
            setTotal(res.data.data.Total);
            setBtns(Array(res.data.data.Total).fill('#d2d7d2'));
            setCheckList(Array(res.data.data.Total).fill(Array(4).fill(false)));
        }).catch((err) => {
            dispatch(loaderValueFalse())
            // console.log("err", err)
        })

    }, [])

    const pageHandler = (page)=>{
        const token = JSON.parse(localStorage.getItem('data')).token;
        axios.get(`https://exam-portal-by-hritik-sanam.herokuapp.com/student/questions?studentID=${data.studentID}&examID=${data.exam.examID}&pageIndex=${page}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
            dispatch(loaderValueFalse())
            setPageNo(page);
            setQues(res.data.data.question);
        }).catch((err) => {
            dispatch(loaderValueFalse())
        })
    }
    // useEffect(() => {
    //     setBtns(Array(total).fill('#d2d7d2'));
    //     setCheckList(Array(total).fill(Array(4).fill(false)));
    // }, [total, pageNo])

    const checkHandler = (i, j) => {
        setBtns(btns.map((color, index) => {
            if (i === index) {
                return "#66d9e6";
            }
            else {
                return color;
            }
        }));
        let values = Array(4).fill(false);
        setCheckList(checkList.map((v, ind) => {
            if (i === ind) {
                values[j] = true;
                return values;
            }
            else {
                return v;
            }
        }))
    }



    const submitHandle = () => {
        Swal.fire({
            type: 'success',
            text: 'You have successfully completed the exam!! ',
            confirmButtonText: "Ok",
        }).then(
            () => {
                navigate("/studentDashboard")
            })
    }

    // const saveAnswer = () => {
    //     const nextQuestion = currentQuestion + 1;
    //     if (nextQuestion < questions.length) {   
    //         setCurrentQuestion(nextQuestion)
    //     }
    // }

    
        
        const saveAnswer = () => {
         
        const token = JSON.parse(localStorage.getItem('data')).token;
        
        let postData={
            studentID:data.studentID,
            questionID:ques[0]._id,
            answer:answer
            }
            console.log(postData,'sdfgh');
            axios.post('https://exam-portal-by-hritik-sanam.herokuapp.com/student/answer',postData,{
                headers: {Authorization: `Bearer ${token}`},
            }
            
            )
            .then((res)=>{
                console.log("res",res)
            })
            .catch((err)=>{
                console.log("err",err)
            })
    }
    const handleNext = () => {
        const nextQuestion = pageNo + 1;
        if (nextQuestion < total) {
            setPageNo(nextQuestion)
        }
    }
    const handlePrevious = () => {
        const previousQuestion = pageNo - 1;
        if (previousQuestion < total && previousQuestion >= 0) {
            setPageNo(previousQuestion)
        }
    }
    console.log('ques',ques)

    return (

        <div>

            <div className='give-exam mx-5 margin-from-top'>
                <div className='section-nav'>
                    <div className='row py-2'>
                        <div className='col'>
                            <div className='subject  my-3'>
                                <p>Subject: Progamming in c</p>
                                <p>Code: #RDF004</p>
                            </div>
                        </div>
                        <div className='col timer my-4 mr-4'>
                            <p>Remaining time: <button><ReactCountdown /></button> </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className='row mr-0'>


                <div className='col-md-8 mb-2  section-questions'>
                    <div className='give-exam mx-5'>
                        <>
                            {loadingState ? <Loader />
                                :
                                <div className=''>
                                    {ques.map((Q, i) =>
                                        <div className='questions' key={i}>
                                            <div className='question-section'>
                                                <div className='question-count'>
                                                    <span>Question{pageNo + 1}</span>/{total}
                                                </div>
                                                <div className='question-text my-3 mx-5'>{Q.question}</div>
                                                <div className='answer-section mx-5'>
                                                    {
                                                        Q.options.map((option, i) =>
                                                            <div className='options' key={i}>
                                                                <input type="checkbox"
                                                                    id='checkOption'
                                                                    checked={checkList[pageNo][i]}
                                                                    onClick={() => {
                                                                        setAnswer(option)
                                                                        checkHandler(pageNo, i)
                                                                    }} />
                                                                <label>
                                                                    <p>{option}</p>
                                                                </label>
                                                            </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            }
                        </>
                    </div>

                    <div className='buttons questions-button mt-4 center-content-in-div'>
                        <button className='btn btn-info' onClick={handlePrevious}>Previous </button>
                        <button className='btn btn-info' onClick={saveAnswer}>Save</button>
                        <button className='btn btn-info' onClick={handleNext}>Next</button>
                    </div>
                </div>


                <div className='row mt-2'>
                    <div className='col-md-4 giveexam-btn mx-3'>
                        {
                            btns.map((color, i) =>
                                <div className="">
                                    <button className='btn ml-2' style={{ backgroundColor:`${pageNo===i?'#66d9e6':'#d2d7d2'}`}} onClick={() => pageHandler(i)}>{i + 1}</button>
                                </div>
                            )
                        }
                    </div>                  
                    <div className='col-md-12 mt-4 text-center'>
                        <div className='button'>
                            <button type="button" className="btn btn-success btn-left" onClick={submitHandle}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default GiveExam