import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactCountdown from './Countdown'
import "./GiveExam.css"
import Swal from "sweetalert2"
import './Questions.css'
import axios from 'axios'



const GiveExam = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data; // y api se aara hai data bhot door se 
    const [ques, setQues] = useState([]);
    const [total, setTotal] = useState(0);
    const [pageNo, setPageNo] = useState(1)
    const [btns, setBtns] = useState([]);
    console.log(data.studentID)
    console.log(data.exam.examID);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('data')).token;
        console.log(token, "token")

        axios.get(`https://exam-portal-by-hritik-sanam.herokuapp.com/student/questions?studentID=${data.studentID}&examID=${data.exam.examID}&pageIndex=${pageNo}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
            // console.log("res", res);
            setQues(res.data.data.question);
            setTotal(res.data.data.Total);
            console.log(total, "total")
        }).catch((err) => {
            // console.log("err", err)
        })

    }, [pageNo])

    useEffect(() => {
        // console.log("arraytotal",Array(total.length))
        setBtns(Array(total).fill('blue'));
        console.log("btns", btns,"page",pageNo);
    }, [total,pageNo])

    // const [checkList, setCheckList] = useState(Array(1).fill(Array(4).fill(false)))
    // const [index, setIndex] = useState(0)

    // const checkHandler = (i, j) => {
    //     setBtns(btns.map((color, i) => {
    //         if (i === index) {
    //             return "green";
    //         }
    //         else {
    //             return color;
    //         }
    //     }));
    //     let values = Array(4).fill(false);
    //     setCheckList(checkList.map((v, ind) => {
    //         if (i === ind) {
    //             values[j] = true;
    //             return values;
    //         }
    //         else {
    //             return v;
    //         }
    //     }))
    // }

    // console.log(location.state.data.detail.exam.questions, 'giveque')


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

    const handleNext = () => {

        const nextQuestion = pageNo + 1;
        if (nextQuestion < ques.length) {
            setPageNo(nextQuestion)
        }
    }
    const handlePrevious = () => {

        const previousQuestion = pageNo - 1;
        if (previousQuestion < ques.length && previousQuestion > 0) {
            setPageNo(previousQuestion)
        }

    }
    // console.log('ques',ques)

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
                        <div className=''>
                            {ques.map((Q) =>
                                <div className='questions'>
                                    {console.log(Q)}
                                    <div className='question-section'>
                                        <div className='question-count'>
                                            <span>Question{pageNo}</span>/{ }
                                        </div>
                                        <div className='question-text my-3 mx-5'>{Q.question}</div>
                                        <div className='answer-section mx-5'>
                                            {
                                                Q.options.map((answer, i) =>
                                                    <div className='options'>
                                                        <input type="checkbox" />
                                                        <label>
                                                            <p>{answer}</p>
                                                        </label>
                                                    </div>

                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='buttons questions-button mt-4 mr-4'>

                            <button className='btn btn-info' onClick={handleNext}>Next</button>
                            <button className='btn btn-info' onClick={handlePrevious}>Previous </button>
                            <button className='btn btn-info' >Save</button>
                        </div>
                    </div>
                </div>


                <div className=''>
                    <div className=''>
                        {
                            btns.map((color, i) =>
                                <button className='btn btn-info' onClick={()=>setPageNo(i+1)}>{i + 1}</button>

                            )
                        }
                    </div>
                </div>
                <div className='col-md-12 mt-4 text-center'>
                    <div className='button'>
                        <button type="button" className="btn btn-success btn-left" onClick={submitHandle}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GiveExam