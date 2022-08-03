import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Login from '../../Pages/Login';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
  // const navigate = useNavigate();

  return (
    <div>
      {
  isLogged ?  <Outlet /> : <Login/> 
}
    </div>
  );
}

function ProtectedRoutes2() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
  const navigate = useNavigate();

  return (
    <div>
      {
  !isLogged ? <Outlet /> :  navigate('/dashboard')
}
    </div>
  );
}

export {
  ProtectedRoutes, ProtectedRoutes2
};
