import React,{useEffect, useState} from 'react'
import {question_detail} from '../../../redux/actions/index';
import { useFormik} from "formik";
import * as Yup from "yup";
import './CreateQuestion.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const CreateQuestion = () => {
    const[questions,setQuestions]=useState([])
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();

  const initialValues = {
    question:"",
    optionOne: "",
    optionTwo:"",
    optionThree :"",
    optionFour:"",
    correctOption:"",
    marks:""
  };
  const validationSchema = Yup.object({
    question: Yup.string().required("**Required!"),
    optionOne:Yup.string().required("**Required!"),
    optionTwo:Yup.string().required("**Required!"),
    optionThree :Yup.string().required("**Required!"),
    optionFour:Yup.string().required("**Required"),
    marks:Yup.string().required('**Required!'),
    correctOption:Yup.string().required("**Required!")

  });
useEffect(()=>{
  console.log(questions);
  dispatch(question_detail(questions));
},[questions])
  const onSubmit = (values,{resetForm}) => {
    let que = {
        question: values.question,
        options:[values.optionOne,values.optionTwo,values.optionThree,values.optionFour],
        correctOption:values.correctOption,
        marks:values.marks
    }
    
    console.log(que);
    console.log(location.state.subjectId,'subject id')

    setQuestions([...questions,que]);
    resetForm({values:""})
    dispatch(
      question_detail(questions),
      // subjectID_details(location.state.subjectId)
      );
        
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className='create-question'>
       <h2 className='headingOne'>Create-Exam</h2>
       <form onSubmit={formik.handleSubmit}>
          <div className='row content'>
          <div className='col-md-3'>
            <label className='label'>Question</label>
          </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("question")}   placeholder="Question" name='question'/>
              {formik.touched.question && formik.errors.question ? (
                          <p className="text-danger error">
                            {formik.errors.question}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
            <label className='label'>Option 1</label>
          </div>
            <div className='col-md-9'>
            <input type="text" {...formik.getFieldProps("optionOne")} placeholder="Option1"/>
            {formik.touched.optionOne && formik.errors.optionOne ? (
                          <p className="text-danger error">
                            {formik.errors.optionOne}
                          </p>
                        ) : null}
            </div>
            </div>
         <div className='row content'>
         <div className='col-md-3'>
            <label className='label'>Option 2</label>
          </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("optionTwo")} placeholder="Option2" />
              {formik.touched.optionTwo && formik.errors.optionTwo ? (
                          <p className="text-danger error">
                            {formik.errors.optionTwo}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
            <label className='label'>option 3</label>
          </div>
            <div className='col-md-9'>
            <input type="text" {...formik.getFieldProps("optionThree")}  placeholder="Option3"/>
            {formik.touched.optionThree && formik.errors.optionThree ? (
                          <p className="text-danger error">
                            {formik.errors.optionThree}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
            <label className='label'>Option 4</label>
          </div>
            <div className='col-md-9'>
              <input type="text" {...formik.getFieldProps("optionFour")}  placeholder="Option4" />
              {formik.touched.optionFour && formik.errors.optionFour ? (
                          <p className="text-danger error">
                            {formik.errors.optionFour}
                          </p>
                        ) : null}
            </div>
            </div>
        
          <div className='row content'>
          <div className='col-md-3'>
            <label className='label'>Marks</label>
          </div>
            <div className='col-md-9'>
              <input type="text" {...formik.getFieldProps("marks")}    placeholder="Marks"/>
              {formik.touched.marks && formik.errors.marks ? (
                          <p className="text-danger error">
                            {formik.errors.marks}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
            <label className='label'>Answer</label>
          </div>
          <div className='col-md-9'>
            <input type="text"  {...formik.getFieldProps("correctOption")}  placeholder="Answer" name='correctOption'/>
            {formik.touched.correctOption && formik.errors.correctOption ? (
                          <p className="text-danger error">
                            {formik.errors.correctOption}
                          </p>
                        ) : null}
            </div>
            </div>
          <div>
          <div  className='buttonContainer'>
            <button type='submit' className='btn nextButton'>Submit</button>
             <button  onClick={()=>navigate("/examinerDashboard/createExam",{ state: { subjectId :location.state.subjectId,courseID:location.state.courseID}})} className='btn submitButton'>Next</button>
          </div>
          </div>
          </form>
    </div>
  )
}

export default CreateQuestion
