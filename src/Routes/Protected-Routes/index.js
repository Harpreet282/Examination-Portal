import React,{useEffect, useState} from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../../Loader';

function ProtectedRoutes() {
  const [isLog, setIsLog] = useState("")
  const isLogged = useSelector((state) => state.loginState.authenticated);

  useEffect(()=>{
    setIsLog(isLogged)
  })
  return (
   <>
   {
    isLog===""?<Loader/>:
    <div>
    {
isLogged ?<Outlet />:<Navigate to="/login" />  
}
  </div>
   }
   </>
  );
}

function ProtectedRoutes2() {
  const [isLog, setIsLog] = useState("")
  const isLogged = useSelector((state) => state.loginState.authenticated);

  useEffect(()=>{
    setIsLog(isLogged)
  })

  return (
   <>
   {
    isLog===""?<Loader/>: 
    <div>
    {
!isLogged ? <Outlet /> : <Navigate to="/dashboard" />
}
  </div>
  }
   
  </>

  );
}

export {
  ProtectedRoutes, ProtectedRoutes2
};
