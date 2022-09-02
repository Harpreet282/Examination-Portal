import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loaderValueFalse, loaderValueTrue } from '../../../redux/actions';
import { LOADING_FALSE } from '../../../redux/redux-constants';
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



  const[result, setResult] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('data')).token;
    dispatch(loaderValueTrue())
    axios.get("https://exam-portal-by-hritik-sanam.herokuapp.com/student/results",{
      headers: {Authorization :`Bearer ${token}`}
    })
    .then((res) => {
        dispatch(loaderValueFalse())
        setResult(res.data.data.results)
        console.log(res.data.data.results);
    })
    .catch((err) => {
      dispatch(loaderValueFalse())
    })
  },[])
  return (
    <div className='student-result'>
      <div className="results-container">
        <div className="row">
          {result?.map((content,i) => (
            <div className="col-md-4 results-col" key={i}>
              <div className="card">
                <div className="card-body">
                  <div className="result-title">
                    <h3 className="card-title ">
                      {content.subject}
                    </h3>
                  </div>
                  <div className='card-text'>
                  <p>
                    Exam Date : {''}
                    {content.examDate.slice(0,10)}
                  </p>
                  <p>
                    Result Declared On : {''}
                    {content.declaredON.slice(0,10)}
                  </p>
                  <p>
                    Marks Obtained : {''}
                    {content.marksObtained}
                    {' '}
                    /{content.totalMarks}
                  </p>
                  <p
                    
                  >
                    Grade : <span style={{color:(content.grade === "E" || content.grade === "F")?"red":"green"}}>{content.grade}</span>
                  </p>
                  </div>

                  <div className="result-bottom ">
                    <p>
                      Status : {''}
                      <span style={{color:(content.status === "ABSENT" || content.status === "FAILED" ? "red" : "green")}}>{content.status}</span>
                    </p>
                    <button type="button" className="btn">Percentage : {''}{content.percentage}%</button>
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
