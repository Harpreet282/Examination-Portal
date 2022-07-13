import React from 'react'
import "./GiveExam.css"

const GiveExam = () => {


    const data =[
        {
            id: 1,
            btnNo:1,
        },
        {
            id: 2,
            btnNo:2,
        },
        {
            id: 3,
            btnNo:3,
        },
        {
            id: 4,
            btnNo:4,
        },
        {
            id: 5,
            btnNo:5,
        },
        {
            id: 6,
            btnNo:6,
        },
        {
            id: 7,
            btnNo:7,
        },
        {
            id: 8,
            btnNo:8,
        },
        {
            id: 9,
            btnNo:9,
        },
        {
            id: 10,
            btnNo:10,
        },
        {
            id: 11,
            btnNo:11,
        },
        {
            id: 12,
            btnNo:12,
        },
        {
            id: 13,
            btnNo:13,
        },
        {
            id: 14,
            btnNo:14,
        },
        {
            id: 15,
            btnNo:15,
        },
        {
            id: 16,
            btnNo:16,
        },
        {
            id: 17,
            btnNo:17,
        },
        {
            id: 18,
            btnNo:18,
        },
        {
            id: 19,
            btnNo:19,
        },
        {
            id: 20,
            btnNo:20,
        },
    ]
  return (
    <div>
        <div className='give-exam mx-5'>
            <div className='section-nav'>
                <div className='subject  my-3'>
                    <p>Subject: Progamming in c</p>
                    <p>Code: #RDF004</p>
                </div>
            </div>
            <hr/>
            
        </div> 
       
        <div className='row'>

            <div className='col-md-8'>
                <div className='give-exam verticalLine'>
                    <div className='section-bottom-left mx-5 mt-5'>
                        <div className='questions'>
                                <p>1. Which of the following is true about return type of functions in C?</p>
                                <div className='options ml-3'>
                                    <input 
                                        type="checkbox"
                                    />
                                    <label>
                                        <p>Functions can return any type</p>
                                    </label><br/>
                                    <input 
                                        type="checkbox"
                                    />
                                    <label>
                                        <p>Functions can return any type except array and functions</p>
                                    </label><br/>
                                    <input 
                                        type="checkbox"
                                    />
                                    <label>
                                        <p>Functions can return any type except array, functions and union</p>
                                    </label><br/>
                                    <input 
                                        type="checkbox"
                                    />
                                    <label>
                                        <p>Functions can return any type except array, functions, function pointer and union</p>
                                    </label>

                                </div>
                        </div>
                        <div className='give-exam-btn button'>
                                <button type="button" class="btn btn-info btn-left">Previous</button>
                                <button type="button" class="btn btn-info btn-right">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div className='row'>
                    {
                        data.map((content) =>{
                            return(
                                <div>
                                    <div className='btn-right-section my-3 col-md-3' key={content.id}>
                                        <button type='button'className='btn'>{content.btnNo}</button>
                                    </div>
                                </div>
                                
                            )
                        })
                    } 
                </div> 
                <div className='col-md-12 mt-5 text-center'>
                <button type="button" class="btn btn-success btn-left">Submit</button> 
                </div>
                 
            </div>

        </div>
    </div>
  )
}

export default GiveExam