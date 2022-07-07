import React from 'react'
import {Outlet} from 'react-router'
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
    const isLogged=useSelector(state=>state.loginState.authenticated);
  return (
    <div> 
{
    isLogged?<Outlet />:
     navigate("/")
}
    </div>
  )
}
const ProtectedRoutes2 = () => {
  const navigate = useNavigate();
  const isLogged=useSelector(state=>state.loginState.authenticated);
return (
  <div> 
{
  !isLogged?<Outlet />:   navigate("/profile")
}
  </div>
)
}

export  {ProtectedRoutes,ProtectedRoutes2}