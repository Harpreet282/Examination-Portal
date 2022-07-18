import React,{useState} from 'react'
import styles from './login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {Login_Account} from '../../redux/Action/Action'
import Header from '../../components/Header/Header';

const Login = () => {
  const c = useSelector(state => state. Login_Data);
  const navigate=useNavigate();
  console.log(c);
  const [data,setData]=useState({email:"",password:""});
  const dispatch=useDispatch();
  const [token,setToken]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('https://exam-portal-by-hritik-sanam.herokuapp.com/login',data)
    .then((res)=>{
      console.log(res.data);
      setToken(res.data.data.accessToken);
      dispatch(Login_Account(res.data.data.accessToken));
  console.log(c);
 
  if(res.data.data.userType=== 'EXAMINER'){
     navigate('/profile');
  }
    })
  
    .catch((error)=>{
      console.log(error);
    })

  }
  return (
    <div>
    <Header/>
       <div className={`container ${styles.Login_Container}`}>
    <h1>Login Form</h1>
    <form>

  
  <div className={`form-group`}>
    <label className={`${styles.Login_Label}`}>Enter your Email</label>
    <input type="email" placeholder='Email' onChange={(event)=>setData({...data,email:event.target.value})} className={`${styles.Login_input} form-control`} />
  </div>
  <div className={`form-group`}>
    <label className= {`${styles.Login_Label}`}>Enter password</label>
    <input type="password" placeholder='Password' onChange={(event)=>setData({...data,password:event.target.value})} className={`${styles.Login_input} form-control`}/>
  </div>
  <button type="submit" className={`btn btn-lg ${styles.Login_Submit}`} onClick={handleSubmit}>Login</button>
  </form>
    </div>
    </div>
  )
}

export default Login