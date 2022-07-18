import React, {useState,Navigate} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import {handleData} from '../../redux/Action/Action';
import './sign-up.css'

const SignUp = () => {

  const [data,setData]=useState({firstName:"",lastName:"",email:"",mobileNumber:"",password:""});
  const dispatch = useDispatch();
  const c = useSelector(state => state.DataItems);
  console.log(c);
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('https://exam-portal-by-hritik-sanam.herokuapp.com/register',data)
    .then((res)=>{
      console.log(res);
      <Navigate to="/Login"/>
    })
      .catch((error)=>{
        console.log(error);
      })
    dispatch(handleData(data));
  }
 
  return (
    <div>
    <div>
    {c.firstName}
    </div>
  
    <div className='container Signup_Container'>
    {/* {
     c.map((item)=>{
    return <h1 key={item.firstName}>signup data is {item}</h1>
    console.log(item);
     }
     )
  } */}
    <h1>Signup Form</h1>
   
    <form>
<div className="form-row">
<div className="form-group col-md-6">
    <label className='Signup_Label' >FirstName</label>
    <input type="text" placeholder='Firstname' onChange={(event)=>setData({...data,firstName:event.target.value})} className="form-control Signup_input"/>
  </div>
  <div className="form-group col-md-6">
    <label className='Signup_Label' >LastName</label>
    <input type="text" placeholder='LastName' onChange={(event)=>setData({...data,lastName:event.target.value})} className="form-control  Signup_input"/>
  </div>
  </div>
  
  <div className="form-group">
    <label className='Signup_Label'>Enter your Email</label>
    <input type="email" placeholder='Email' onChange={(event)=>setData({...data,email:event.target.value})} className="form-control  Signup_input" />
  </div>
  <div className="form-group">
    <label className='Signup_Label' >Enter your Phone Number</label>
    <input type="text" placeholder='phone Number' onChange={(event)=>setData({...data,mobileNumber:event.target.value})} className="form-control  Signup_input"/>
  </div>

  
<div className="form-group">
  <label className='Signup_Label'>Enter your password </label>
  <input type="text" className="form-control  Signup_input" id="inputAddress" onChange={(event)=>setData({...data,password:event.target.value})} placeholder="password"/>
</div>

{/* <div className="form-group">
    <label className='Signup_Label'>Roles</label>
    <select onChange={(event)=>setData({...data,roles:event.target.value})} className="form-control Signup_input" id="exampleFormControlSelect1">
      <option value="">---</option>
      <option>Examiner</option>
      <option>Admin</option>
    </select>
  </div> */}

<button type="submit" className="btn btn-lg Signup_Submit" onClick={handleSubmit}>Sign up</button>
</form>
  </div>
  </div>
  )
}

export default SignUp