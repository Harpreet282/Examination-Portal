import React,{useState} from 'react'
import './sign-up.css'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { SIGN_UP_API } from '../../Apis/apis';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Loader from '../../Loader';

const SignUp = () => {

  const[loading,setLoading]=useState(false)

  const initialValues={
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    password:''
  }



  const validationSchema= Yup.object({
    firstName: Yup.string()
    .required('**Required!'),

    lastName: Yup.string()
    .required('**Required!'),

    email:Yup.string()
    .email('Invalid email format!')
    .required('**Required!'),

    mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number is not valid')
    .required('**Required!'),

    password: Yup.string()
     .min(6, 'Password must be equal to or more than 6 characters!')
     .max(50, 'Too Long!')
     .required('**Required!'),
  })

  const onSubmit=values=>{
    // console.log('Submit Values',values)
    setLoading(true)
    axios.post(SIGN_UP_API ,values)
    .then((res)=>{
      setLoading(false)
      console.log(res)
      toast.success("Register Successfully!");
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
      toast.error("Error!");
    })
  }
  
    const formik=useFormik({
      initialValues,
      onSubmit,
      validationSchema,
  })

  return (
    <>
    <section className="signup-page">
    {loading?
<Loader/>
:
<>
<div className="container all-containers my-4">
    <div className="row">
      <div className="col-md-6 left-content">
      <div className="content absolute-center">
      <h1>Please Sign-up by Enter your Details</h1>
      </div>
      </div>
      <div className="col-md-6 right-content">
     <div className="content absolute-center">
     <form className='px-5'onSubmit={formik.handleSubmit}>
        <div className="">
        <input type="text" {...formik.getFieldProps('firstName')} placeholder="First Name" />
      { formik.touched.firstName && formik.errors.firstName?  <p className='text-danger error'>{formik.errors.firstName}</p> : null}
        </div>
        <div className="">
        <input type="text" {...formik.getFieldProps('lastName')} placeholder="Last Name" />
      { formik.touched.lastName && formik.errors.lastName?  <p className='text-danger error'>{formik.errors.lastName}</p> : null}
        </div>
     
      <div className="">
          <input type="text"   {...formik.getFieldProps('email')} placeholder="E-mail" />
      { formik.touched.email && formik.errors.email?  <p className='text-danger error'>{formik.errors.email}</p> : null}
        </div>
        <div className="">
          <input type="text"   {...formik.getFieldProps('mobileNumber')} placeholder="Phone Number" />
      { formik.touched.mobileNumber && formik.errors.mobileNumber?  <p className='text-danger error'>{formik.errors.mobileNumber}</p> : null}
   </div>
      
        <div className="">
          <input type="text" {...formik.getFieldProps('password')} placeholder="Password"/>
      { formik.touched.password && formik.errors.password?  <p className='text-danger error'>{formik.errors.password}</p> : null}
        </div>
        <div>
          <button className='btn'>Sign-up</button>
        </div>
        <div className='signupLink'>
          <p>Already have an Account?
            <NavLink to='/login'> Login Here</NavLink>
          </p>
        </div>
    </form>
     </div>
      </div>
    </div>
      </div>
</>
}
     
    </section>
    <ToastContainer />
        </>
  )
}

export default SignUp