import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';

function ProtectedRoutes() {
  const isLogged = useSelector((state) => state.loginState.authenticated);

  return (
    <div>
      {
    isLogged ? <Outlet />
      : <Home />
}
    </div>
  );
}

function ProtectedRoutes2() {
  const isLogged = useSelector((state) => state.loginState.authenticated);
  return (
    <div>
      {
  !isLogged ? <Outlet /> : <Profile />
}
    </div>
  );
}

export {
  ProtectedRoutes, ProtectedRoutes2
};
