import React, { useState } from 'react'
import "./Questions.css"
const Questions = () => {
    const questions = [
        {
            
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York' },
                { answerText: 'London' },
                { answerText: 'Paris' },
                { answerText: 'Dublin' },
            ],
        },
        {
            id: 2,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos' },
                { answerText: 'Elon Musk' },
                { answerText: 'Bill Gates' },
                { answerText: 'Tony Stark' },
            ],
        },
        {
            id: 3,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple' },
                { answerText: 'Intel' },
                { answerText: 'Amazon' },
                { answerText: 'Microsoft' },
            ],
        },
        {
            id: 4,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    // const saveAnswer = () => {
    //     const nextQuestion = currentQuestion + 1;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestion(nextQuestion)
    //     }
    // }

    const handleNext = () => {

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        }
    }
    const handlePrevious = () => {
        
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion < questions.length && previousQuestion >= 0)  {
            setCurrentQuestion(previousQuestion)
        }
        
    }

    return (
        <div>
            <div className='questions'>

                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question{currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text my-3 mx-5'>{questions[currentQuestion].questionText}</div>
                    <div className='answer-section mx-5'>
                        {questions[currentQuestion].answerOptions.map((answerOption,i) => {
                            return (

                                <div className='options'>
                                    <input type="checkbox" />
                                    <label>
                                        <p>{answerOption.answerText}</p>
                                    </label>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className='buttons questions-button mt-4 mr-4'>
                    <button className='btn btn-info' onClick={handleNext}>Next</button>
                    <button className='btn btn-info' onClick={handlePrevious}>Previous </button>
                    
                    <button className='btn btn-info' >Save</button>
                </div>
            </div>
        </div>
    )
}

export default Questions