import React, { useState } from 'react';
import './viewQuestion.css'
import {IoTrashOutline}  from 'react-icons/io5';
import { useFormik} from "formik";
import * as Yup from "yup";
import {AiOutlineEdit} from 'react-icons/ai'
import axios from 'axios';
import{toast,ToastContainer} from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { DELETE_QUESTION, UPDATED_QUESTION } from '../../../Apis/apis';

const ViewQuestions = () => {
   
    // const [question,setQuestion]=useState([]);
    const [id,setId]=useState();
    const location=useLocation();
    const initialValues = {
        question:"",
        optionOne: "",
        optionTwo:"",
        optionThree :"",
        optionFour:"",
        correctOption:"",
      };
      const validationSchema = Yup.object({
        question:Yup.string().required("**Required!"),
        optionOne: Yup.string().required("**Required!"),
        optionTwo: Yup.string().required("**Required!"),
        optionThree: Yup.string().required("**Required!"),
        optionFour: Yup.string().required("**Required!"),
        correctOption:Yup.string().required("**Required!"),

      });
     
      const onSubmit = (values) => {
        console.log(id);
        const {correctOption,question} = values;
        let options = [values.optionOne,values.optionTwo,values.optionThree,values.optionFour];
        const body = {
          questionID:id,
          options:options,
          correctOption,
          question
        }
        console.log(values,body);
        const token=JSON.parse(localStorage.getItem('data')).token;
        axios.patch(UPDATED_QUESTION,body,{headers:{Authorization:`Bearer ${token}`}})
      .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })       
       
    }
    const deleteQuestion=(quesId)=>{
        console.log(quesId);
        const token=JSON.parse(localStorage.getItem('data')).token;
    
        axios.delete(DELETE_QUESTION+'/'+quesId,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
          console.log(res);
          toast.success("one Question is deleted");   
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
  return (
    <div className='viewQuestion'>
    <ToastContainer/>
      <h2>Course:- {location.state.questions.course}</h2>
      <div className='content'>
                    <div className='row'>
                        <div align="center" className='col-md-6'>
                            <p>Date:{location.state.questions.examDate.slice(0,-14).split("-").reverse().join("-")}</p>
                        </div>
                        <div align="center" className='col-md-6 '>
                            <p>Subject:{location.state.questions.subject}</p>
                        </div>
                    </div>
                    <div className='row '>
                        <div align="center" className='col-md-6'>
                            <p>StartTime:{location.state.questions.startTime}</p>
                        </div>
                        <div align="center" className='col-md-6'>
                        <p>EndTime:{location.state.questions.endTime}</p>
                        </div>
                    </div>
               
                <div className='row '>
                        <div align="center" className='col-md-6'>
                            <p>Duration:{location.state.questions.duration}</p>
                        </div>
                        <div  align="center" className='col-md-6'>
                            <p>Total Marks:{location.state.questions.totalMarks}</p>
                        </div>
                    </div>
                </div>
                
      {location.state.questions.questions.map((item,index)=>
        <>
        <div className='row question'>
            <div   className='col-md-8 leftContent'>
                <h5>Q{index+1}:- {item.question}</h5>
                <div className='col' >
                    <ol type="a">
                {item.options.map((value)=>
            <>
                <li className='option'>{value}</li>    
            </>
           
            )}
            </ol> 
                </div>
            <div className='col Answer'>Ans:- {item.correctOption}</div>
            </div>
           
            <div align="center" className='col-md-4'>
                <h5 >{item.marks}</h5>
                <IoTrashOutline onClick={()=>deleteQuestion(item._id)} className='trashIcon'/> 
                <AiOutlineEdit data-backdrop="false" data-toggle="modal" data-target="#exampleModal" />
            </div>
            <div className="modal"  id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
      <h4 className="modal-title">Edit Question</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div className="modal-body">
      <form onSubmit={(e)=>{formik.handleSubmit(e) ;setId(item._id)}}>
          <div className='row '>
          <div className='col-md-3'>
            <label className='label'>Question</label>
          </div>
            <div className='col-md-9'>
              <input type="text"  {...formik.getFieldProps("question")}    placeholder="Question" name='question'/>
              {formik.touched.question && formik.errors.question ? (
                          <p className="text-danger error">
                            {formik.errors.question}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row '>
            <div className='col-md-3'>
            <label className='label'>Option 1</label>
          </div>
            <div className='col-md-9'>
            <input type="text" {...formik.getFieldProps("optionOne")}  placeholder="Option1"/>
            {formik.touched.optionOne && formik.errors.optionOne ? (
                          <p className="text-danger error">
                            {formik.errors.optionOne}
                          </p>
                        ) : null}
            </div>
            </div>
         <div className='row '>
         <div className='col-md-3'>
            <label className='label'>Option 2</label>
          </div>
            <div className='col-md-9'>
              <input type="text" {...formik.getFieldProps("optionTwo")}  placeholder="Option2" />
              {formik.touched.optionTwo && formik.errors.optionTwo ? (
                          <p className="text-danger error">
                            {formik.errors.optionTwo}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row '>
            <div className='col-md-3'>
            <label className='label'>option 3</label>
          </div>
            <div className='col-md-9'>
            <input type="text"  {...formik.getFieldProps("optionThree")}  placeholder="Option3"/>
            {formik.touched.optionThree && formik.errors.optionThree ? (
                          <p className="text-danger error">
                            {formik.errors.optionThree}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row '>
            <div className='col-md-3'>
            <label className='label'>Option 4</label>
          </div>
            <div className='col-md-9'>
              <input type="text" {...formik.getFieldProps("optionFour")}    placeholder="Option4" />
              {formik.touched.optionFour && formik.errors.optionFour ? (
                          <p className="text-danger error">
                            {formik.errors.optionFour}
                          </p>
                        ) : null}
            </div>
            </div>
        
            <div className='row '>
            <div className='col-md-3'>
            <label className='label'>Answer</label>
          </div>
          <div className='col-md-9'>
            <input type="text"  {...formik.getFieldProps("correctOption")}   placeholder="Answer" name='correctOption'/>
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
          </div>
          </div>
          </form>
       </div>
    </div>
  </div>
                    </div> 
            </div>
           <hr/>
        </>
      )}
    </div>
    
  )
}

export default ViewQuestions
