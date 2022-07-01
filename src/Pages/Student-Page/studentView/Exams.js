import React from 'react'
import "./Exams.css"
import Timer from "../Timer/Timer" 
const Exams = () => {
  const data = [
    {
      id: 1,
      subject: "Data Structure",
      date: "2022-07-04",
      timings: "9:00am to 12:00pm"
    },
    {
      id: 2,
      subject: "Programming in C",
      date: "2022-07-03",
      timings: "9:00am to 12:00pm"
    },
    {
      id: 3,
      subject: "Comp Automation",
      date: "2022-07-09",
      timings: "11:00am to 2:00pm"
    },
    {
      id: 4,
      subject: "Mathematics",
      date: "2022-07-15",
      timings: "12:00am to 3:00pm"
    },
  ]
  return (
    <div>
      <div className='container'>
        <div className='row'>
            {data?.map((content) => {
              return (
                <div className='col-md-6 exams-col' key={content.id}>
                  <div className="card exams-card">
                    <div className="card-body">
                      <h3 className="card-title">{content.subject}</h3>
                      <p>Exams date: {content.date}</p>
                      <p className="card-text  exams-timings">Timings: {content.timings}</p>
                    </div>
                    <div className="card-body">
                      {/* <a href="#" className="card-link">Card link</a> */}
                      <a href="#" className="card-link">
                        <Timer date={content.date}/>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Exams