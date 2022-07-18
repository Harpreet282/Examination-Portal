import React,{useEffect, useState} from 'react'
import {question_detail} from '../../../redux/actions/index';
import { useFormik} from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';

const CreateQuestion = () => {
    const[questions,setQuestions]=useState([])
    const dispatch=useDispatch()
//   const[question,setQuestion]=useState({
//     question:"",
//     optionOne:"",
//     optionTwo:"",
//     optionThree:"",
//     optionFour:"",
//     correctOption:"",
//     marks:""
//   })
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
  
// const changeHandler = e =>{
//     setQuestion({...question,[e.target.name]:e.target.value})
//   }
useEffect(()=>{
  console.log(questions);
  dispatch(question_detail(questions));
},[questions])
  const onSubmit = (values) => {
   
    let que = {
        question: values.question,
        options:[values.optionOne,values.optionTwo,values.optionThree,values.optionFour],
        correctOption:values.correctOption,
        marks:values.marks
    //   question: question.question,
    //   options:[question.optionOne,question.optionTwo,question.optionThree,question.optionFour],
    //   correctOption:question.correctOption,
    //   marks:question.marks
    }
    
    console.log(que);

    setQuestions([...questions,que]);
         // setQuestion({
    //   question:"",
    //   optionOne:"",
    //   optionTwo:"",
    //   optionThree:"",
    //   optionFour:"",
    //   correctOption:"",
    //   marks:"",
    // })
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
       <form onSubmit={formik.handleSubmit}   className='px-5'>
          <div className='row'>
            <div className='col-md-12'>
              <input type="text"  {...formik.getFieldProps("question")}     placeholder="Question" name='question'/>
              {formik.touched.question && formik.errors.question ? (
                          <p className="text-danger error">
                            {formik.errors.question}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row'>
            <div className='col-md-3'>
            <input type="text" {...formik.getFieldProps("optionOne")} placeholder="Option1"/>
            {formik.touched.optionOne && formik.errors.optionOne ? (
                          <p className="text-danger error">
                            {formik.errors.optionOne}
                          </p>
                        ) : null}
            </div>
         
            <div className='col-md-3'>
              <input type="text"  {...formik.getFieldProps("optionTwo")} placeholder="Option2" />
              {formik.touched.optionTwo && formik.errors.optionTwo ? (
                          <p className="text-danger error">
                            {formik.errors.optionTwo}
                          </p>
                        ) : null}
            </div>
            
            <div className='col-md-3'>
            <input type="text" {...formik.getFieldProps("optionThree")}  placeholder="Option3"/>
            {formik.touched.optionThree && formik.errors.optionThree ? (
                          <p className="text-danger error">
                            {formik.errors.optionThree}
                          </p>
                        ) : null}
            </div>
         
         
            <div className='col-md-3'>
              <input type="text" {...formik.getFieldProps("optionFour")}  placeholder="Option4" />
              {formik.touched.optionFour && formik.errors.optionFour ? (
                          <p className="text-danger error">
                            {formik.errors.optionFour}
                          </p>
                        ) : null}
            </div>
            </div>
        
          <div className='row'>
            <div className='col-md-6'>
              <input type="text" {...formik.getFieldProps("marks")}    placeholder="Marks"/>
              {formik.touched.marks && formik.errors.marks ? (
                          <p className="text-danger error">
                            {formik.errors.marks}
                          </p>
                        ) : null}
            </div>
            <div className='col-md-6'>
            <input type="text"  {...formik.getFieldProps("correctOption")}  placeholder="Answer" name='correctOption'/>
            {formik.touched.correctOption && formik.errors.correctOption ? (
                          <p className="text-danger error">
                            {formik.errors.correctOption}
                          </p>
                        ) : null}
            </div>
          </div>
          <div>
            <button type='submit' className='btn'>Submit</button>
          </div>
          </form>
    </div>
  )
}

export default CreateQuestion