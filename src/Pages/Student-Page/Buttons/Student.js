import React from 'react'
import './Student.css'
import {useNavigate, useLocation} from "react-router-dom"
import Exams from '../studentView/Exams'
import Results from '../studentView/Results'
import Transaction from '../studentView/Transaction'

const Student = () => {
    
    const navigate = useNavigate();

    const {pathname} = useLocation();
    const path = pathname.split("/")[1];

    const ResultHandler = () =>{
        console.log('result')
        navigate('/result')
    }
    const ViewHandler = () =>{
        console.log('view')
        navigate('/viewexams')
    }
    const TransactionHandler = () =>{
        console.log('transaction')
        navigate('/transaction')
    }

  return (
    <section>                                                           
        <div className='student-page'>
            <div className='container all-containers my-5'>
                <div className='row'>
                    <div className='col-md-3 student-col-3'>
                        <div className='student-left-container'>
                            <div className='side-bar'>
                                <ul>
                                    <li className='nav-item'>
                                        <button onClick={ResultHandler}>Results</button>                    
                                    </li>
                                    <li className='nav-item'>
                                        <button onClick={ViewHandler}>View Exams</button>                    
                                    </li>
                                    <li className='nav-item'>
                                        <button onClick={TransactionHandler}>Transaction</button>                    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 student-col-9'>
                        <p>Get the  Exam details here !!</p>
                        {path === "viewexams" && <Exams />}
                        {path === "result" && <Results />}
                        {path === "transaction" && <Transaction />}          
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Student