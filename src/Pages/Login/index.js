import React,{useState} from 'react'
import './login.css'
import { useNavigate, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { loginAccount } from '../../redux/actions';
import { LOGIN_API } from '../../Apis/apis';

const Login = () => {

  const navigate = useNavigate();
  const dispatch=useDispatch();

    const[state,setState]=useState({
  email:'',
  password:'',
  });

  const chaneHandler = e =>{
    setState({...state,[e.target.name]:e.target.value})
  }

  const submitHandler=e=>{
    e.preventDefault()
    // console.log('state',state)
    axios.post(LOGIN_API,state)
    .then((res)=>{
      console.log(res)
      toast.success("Login Successfully!");
      dispatch(loginAccount(res.data.data.accessToken,res.data.data.userType));
      navigate('/profile')
    })
    .catch((err)=>{
      console.log(err)
      if(err.response.data.message==='INVALID_PASSWORD')
      {
        toast.error("Invalid Password!");
      }
      else if(err.response.data.message==='USER_NOT_FOUND'){
        toast.error("User not found!");
      }
      else{
      toast.error("Error!");
      }
    })
  }

  return (
    <>
<section className="login-page">
  <div className="container all-containers my-5">
<div className="row">
  <div className="col-md-6 left-content">
  <div className="content absolute-center">
  <h1>Please Login by Enter your Credentials</h1>
  </div>
  </div>
  <div className="col-md-6 right-content">
 <div className="content absolute-center">
 <form className='px-5' onSubmit={submitHandler}>
  <div className="">
      <input type="text" name="email" onChange={chaneHandler} placeholder="E-mail" autoComplete='' />
    </div>
    <div className="">
      <input type="password" name="password" onChange={chaneHandler} placeholder="Password" autoComplete='new-password' />
    </div>
    <div>
      <button className='btn'>Login</button>
    </div>
    <div className='signupLink'>
      <p>Don't have an Account?
        <NavLink to='/signup'> Sign-Up Here</NavLink>
      </p>
    </div>
</form>
 </div>
  </div>
</div>
  </div>
</section>
<ToastContainer />
    </>
  )
}

export default Login