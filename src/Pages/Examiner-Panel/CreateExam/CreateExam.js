import React, {useState} from 'react'
import './CreateExam.css';
import axios from 'axios';
import { useNavigate,useLocation} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import CreateQuestion from '../Create-question/CreateQuestion';
import {examCreate} from '../../../redux/actions/index';
import { useFormik} from "formik";
import * as Yup from "yup";

const CreateExam = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const[questions,setQuestions]=useState([])
  const[question,setQuestion]=useState({
    question:"",
    optionOne:"",
    optionTwo:"",
    optionThree:"",
    optionFour:"",
    correctOption:"",
    marks:""
  })
    // const [exam,setExam]=useState({
    //     // subjectID:'',
    //     duration:'',
    //     examDate:'',
    //     startTime:'',
    //     endTime:'',
    //     passingMarks:'',
    //     totalMarks:'',
    //     accessCode:'',
    //   })

      const initialValues = {
        examDate:"",
        startTime: "",
        endTime:"",
        duration :"",
        accessCode:""
      };
      const validationSchema = Yup.object({
        examDate: Yup.string().required("**Required!"),
        startTime:Yup.string().required("**Required!"),
        endTime:Yup.string().required("**Required!"),
        duration :Yup.string().required("**Required!"),
        accessCode:Yup.string().required("**Required")

      });
      
    const changeHandler = e =>{
        setQuestion({...question,[e.target.name]:e.target.value})
      }
      // const examHandler = e =>{
      //   setExam({...exam,[e.target.name]:e.target.value})
      // }
    const questionSubmit=e=>{
      e.preventDefault();
      let que = {
        question: question.question,
        options:[question.optionOne,question.optionTwo,question.optionThree,question.optionFour],
        correctOption:question.correctOption,
        marks:question.marks
      }
      // console.log(que);
      setQuestions([...questions,que]);
      console.log(questions,"old onedfgh")
      setQuestion({
        question:"",
        optionOne:"",
        optionTwo:"",
        optionThree:"",
        optionFour:"",
        correctOption:"",
        marks:"",
      })
    }
   
    const onSubmit = (values) => {
       console.log(questions);
        const Data = {
          ...values,
          // questions:questions,
          subjectID:location.state.subjectId
        }

        const token=JSON.parse(localStorage.getItem('data')).token;
        console.log(Data,'subectid');
        // console.log(course,"courseid creae exam");
        navigate("/examinerDashboard/viewStudents",{state:{courseId :location.state.courseID}})
        dispatch(
        examCreate(Data)
        );
    }

    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
  return (
    <div className='createExam'>
      <h1>Create-Exam</h1>
      <div className='row'>
            <CreateQuestion/>
    </div>
    <form   className='px-5'>
          <div className='row'>
            <div className='col-md-12'>
              <input type="text" onChange={changeHandler} value={question.question}   placeholder="Question" name='question'/>
             
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
            <input type="text" onChange={changeHandler} value={question.optionOne} placeholder="Option1" name='optionOne'/>
            </div>
         
            <div className='col-md-3'>
              <input type="text" onChange={changeHandler}  value={question.optionTwo} placeholder="Option2" name='optionTwo'/>
            </div>
            
            <div className='col-md-3'>
            <input type="text" onChange={changeHandler}  value={question.optionThree}  placeholder="Option3" name='optionThree'/>
            </div>
         
         
            <div className='col-md-3'>
              <input type="text" onChange={changeHandler} value={question.optionFour} placeholder="Option4" name='optionFour'/>
            </div>
            </div>
        
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" onChange={changeHandler}  value={question.marks}  placeholder="Marks"  name='marks'/>
            </div>
            <div className='col-md-6'>
            <input type="text" onChange={changeHandler} value={question.correctOption}  placeholder="Answer" name='correctOption'/>
            </div>
          </div>
          <div>
            <button onClick={questionSubmit}  className='btn'>Submit</button>
          </div>
          </form>
          <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-md-3'>
              <input   {...formik.getFieldProps("examDate")}  type="Date" placeholder="Date" />
              {formik.touched.examDate && formik.errors.examDate ? (
                          <p className="text-danger error">
                            {formik.errors.examDate}
                          </p>
                        ) : null}
            </div>
            <div className='col-md-3'>
            <input  {...formik.getFieldProps("startTime")}  type="time" placeholder="Start Time" />
            {formik.touched.startTime && formik.errors.startTime ? (
                          <p className="text-danger error">
                            {formik.errors.startTime}
                          </p>
                        ) : null}
            </div>
          
            <div className='col-md-3'>
              <input {...formik.getFieldProps("endTime")}  type="time" placeholder="End Time" />
              {formik.touched.endTime && formik.errors.endTime ? (
                          <p className="text-danger error">
                            {formik.errors.endTime}
                          </p>
                        ) : null}
            </div>
            <div className='col-md-3'>
            <input  {...formik.getFieldProps("duration")} type="text" placeholder="Duration" />
            {formik.touched.duration && formik.errors.duration ? (
                          <p className="text-danger error">
                            {formik.errors.duration }
                          </p>
                        ) : null}
            </div>
          </div>
          <div>
          <div className='row'>
          <div className='col-md-3'>
            <input  {...formik.getFieldProps("accessCode")}  type="text" placeholder="accessCode"/>
            {formik.touched.accessCode && formik.errors.accessCode ? (
                          <p className="text-danger error">
                            {formik.errors.accessCode}
                          </p>
                        ) : null}
          </div>
          {/* <div className='col-md-3'>
            <input onChange={examHandler} type="text" placeholder="Total Marks" name='totalMarks'/>
          </div>
          <div className='col-md-3'>
            <input onChange={examHandler} type="text" placeholder="passing Marks" name='passingMarks'/>
          </div> */}
            </div>
            <button type='submit' className='btn' >Submit</button>
          </div>
        </form>
    </div>
  )
}

export default CreateExam
