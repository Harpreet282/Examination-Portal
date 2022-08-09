import React from 'react';
import './Exams.css';
import { useNavigate } from 'react-router-dom';
import Timer from '../../Timer/Timer';

function Exams() {
  const navigate = useNavigate();

  const openModal = () => {
    navigate('/modal');
  };

  const data = [
    {
      id: 1,
      subject: 'Data Structure',
      date: '2022-07-14',
      timings: '9:00am to 12:00pm',
    },
    {
      id: 2,
      subject: 'Programming in C',
      date: '2022-07-20',
      timings: '9:00am to 12:00pm',
    },
    {
      id: 3,
      subject: 'Comp Automation',
      date: '2022-07-18',
      timings: '11:00am to 2:00pm',
    },
    {
      id: 4,
      subject: 'Mathematics',
      date: '2022-07-15',
      timings: '12:00am to 3:00pm',
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((content) => (
            <div className="col-md-6 exams-col" key={content.id}>
              <div className="card exams-card">
                <div className="card-body">
                  <h3 className="card-title">{content.subject}</h3>
                  <p>
                    Exams date:
                    {content.date}
                  </p>
                  <p className="card-text  exams-timings">
                    Timings:
                    {content.timings}
                  </p>
                </div>
                <div className="student-card-body">
                  <button href="#" className="card-button" data-toggle="modal" data-target="#exampleModalCenter" onClick={openModal}>
                    <Timer date={content.date} time={content.time} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exams;
