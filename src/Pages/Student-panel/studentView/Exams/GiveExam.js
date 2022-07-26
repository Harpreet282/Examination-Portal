import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactCountdown from './Countdown'
import "./GiveExam.css"
import Swal from "sweetalert2"
import './Questions.css'



const GiveExam = () => {

    const navigate = useNavigate()
    
    const location = useLocation()
    const dataq=location.state.data; // y api se aara hai data bhot door se 

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ques, setQues] = useState(dataq.detail.exam.questions)

    const [checkList, setCheckList] = useState(Array(dataq.detail.exam.questions.length).fill(Array(4).fill(false)))
    const [btns, setBtns] = useState(Array(dataq.detail.exam.questions.length).fill("gray"))
    const [ index, setIndex] = useState(0)

    const checkHandler = (i, j) =>{
        setBtns(btns.map((color,i) => {
            if(i === index){
                return "green";
            }
            else{
                return color;
            }
        }));
        let values = Array(4).fill(false);
        setCheckList(checkList.map((v, ind) => {
            if(i === ind){
                values[j] = true;
                return values;
            }
            else{
                return v;
            }
        }))
    }

    console.log(location.state.data.detail.exam.questions, 'giveque')


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

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < ques.length) {
            setCurrentQuestion(nextQuestion)
        }
    }
    const handlePrevious = () => {
        
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion < ques.length && previousQuestion >= 0)  {
            setCurrentQuestion(previousQuestion)
        }
        
    }


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


                            <div className='questions'>

                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question{currentQuestion + 1}</span>/{ques.length}
                                    </div>
                                    <div className='question-text my-3 mx-5'>{ques[currentQuestion].question}</div>
                                    <div className='answer-section mx-5'>
                                        {
                                            ques[currentQuestion].options.map((answerOption, i) => {
                                                return (
                                                <div className='options'>
                                                    <input type="checkbox" value='' />
                                                        <label>
                                                            <p>{answerOption}</p>
                                                        </label>
                                                </div>
                                            )

                                            })

                                        }
                                    </div>
                                </div>
                                <div className='buttons questions-button mt-4 mr-4'>
                                    <button className='btn btn-info' onClick={handleNext}>Next</button>
                                    <button className='btn btn-info' onClick={handlePrevious}>Previous </button>

                                    <button className='btn btn-info' >Save</button>
                                </div>
                            </div>
                            {/* <Questions /> */}
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='row mt-4'>
                        {
                            ques.map((content, index) => {
                                return (
                                    <div key={content.id}>
                                        <div className='btn-right-section my-3 col-md-4' >
                                            <button type='button' className='btn' onClick={()=>setCurrentQuestion(index)}>{index+1}</button>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className='col-md-12 mt-4 text-center'>
                        <div className='button'>
                            <button type="button" className="btn btn-success btn-left" onClick={submitHandle}>Submit</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GiveExam