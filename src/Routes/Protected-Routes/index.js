import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
  return (
    <div>
      {
  isLogged ?  <Outlet /> : <Navigate to="/login" />
}
    </div>
  );
}

function ProtectedRoutes2() {
  const isLogged = useSelector((state) => state.loginState.authenticated);

  return (
    <div>
      {
  !isLogged ? <Outlet /> : <Navigate to="/dashboard" />
}
    </div>
  );
}

export {
  ProtectedRoutes, ProtectedRoutes2
};
