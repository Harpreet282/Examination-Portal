import React from 'react';
import './Result.css';

function Results() {
  const data = [
    {
      id: 1,
      subject: 'Discrete Mathematics',
      code: 'DM34751',
      marksObtained: 39,
      totalMarks: 50,
      grade: 'B+',
    },
    {
      id: 2,
      subject: "x",
      code: "PC00842",
      subject: 'Programming in C',
      code: 'PC00842',
      marksObtained: 47,
      totalMarks: 50,
      grade: 'A+',
    },
    {
      id: 3,
      subject: 'Core Java',
      code: 'CQ55674',
      marksObtained: 45,
      totalMarks: 50,
      grade: 'A+',
    },
    {
      id: 4,
      subject: 'human Values and Ethics',
      code: 'HM99100',
      marksObtained: 40,
      totalMarks: 50,
      grade: 'A+',
    },
    {
      id: 5,
      subject: 'English Communication',
      code: 'CE44187',
      totalMarks: 50,
      marksObtained: 48,
      grade: 'A+',
    },
  ];
  return (
    <div className='student-result'>
      <div className="results-container">
        <div className="row">
          {data.map((content) => (
            <div className="col-md-4 results-col" key={content.id}>
              <div className="card">
                <div className="card-body">
                  <div className="result-title">
                    <h3 className="card-title ">
                      {content.subject}
                    </h3>
                  </div>
                  <p>
                    Subject Code:
                    {content.code}
                  </p>
                  <p className="card-text">
                    Marks Obtained:
                    {content.marksObtained}
                    {' '}
                    /50
                  </p>
                  <div className="result-bottom">
                    <p>
                      Grade:
                      {content.grade}
                    </p>
                    <button type="button" className="btn">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
