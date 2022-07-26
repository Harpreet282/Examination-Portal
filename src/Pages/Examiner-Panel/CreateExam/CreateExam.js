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
      
    const onSubmit = (values) => {
        const Data = {
          ...values,
          subjectID:location.state.subjectId
        }

        const token=JSON.parse(localStorage.getItem('data')).token;
        console.log(Data,'subectid');
        navigate("/examinerDashboard/StudentAddToExam",{state:{courseId :location.state.courseID}})
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
      <h2>Create-Exam</h2>
      <div>
            <CreateQuestion/>
            </div>
            <div>
              <h2>Exam Details</h2>
            </div>
            <div className='all-content'>
          <form onSubmit={formik.handleSubmit}>
          <div className='row content'>
            <div className='col-md-3'>
              <label  className='label'>Date</label>

          </div>
            <div className='col-md-9'>
              <input   {...formik.getFieldProps("examDate")}  type="Date" placeholder="Date" />
              {formik.touched.examDate && formik.errors.examDate ? (
                          <p className="text-danger error">
                            {formik.errors.examDate}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
              <label className='label'>Start Time</label>
          </div>
            <div className='col-md-9'>
            <input  {...formik.getFieldProps("startTime")}  type="time" placeholder="Start Time" />
            {formik.touched.startTime && formik.errors.startTime ? (
                          <p className="text-danger error">
                            {formik.errors.startTime}
                          </p>
                        ) : null}
            </div>
            </div>
          <div className='row content'>
            <div className='col-md-3'>
              <label className='label'>End Time</label>
          </div>
            <div className='col-md-9'>
              <input {...formik.getFieldProps("endTime")}  type="time" placeholder="End Time" />
              {formik.touched.endTime && formik.errors.endTime ? (
                          <p className="text-danger error">
                            {formik.errors.endTime}
                          </p>
                        ) : null}
            </div>
            </div>
            <div className='row content'>
            <div className='col-md-3'>
              <label className='label'>Duration</label>
          </div>
            <div className='col-md-9'>
            <input  {...formik.getFieldProps("duration")} type="text" placeholder="Duration" />
            {formik.touched.duration && formik.errors.duration ? (
                          <p className="text-danger error">
                            {formik.errors.duration }
                          </p>
                        ) : null}
            </div>
          </div>
          <div>
          <div className='row content'>
            <div className='col-md-3'>
              <label className='label'>Access Code</label>
          </div>
          <div className='col-md-9'>
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
    </div>
  )
}

export default CreateExam
