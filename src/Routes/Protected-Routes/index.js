import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import * as myConst from '../../Constants';
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

function AdminProtectedRoutes() {
  const { userType } = JSON.parse(localStorage.getItem('data'));
  // console.log(userType);
  return (
    <div>
      {
 userType === myConst.ADMIN ? <Outlet /> : <Profile />
}
    </div>
  );
}

function ExaminerProtectedRoutes() {
  const { userType } = JSON.parse(localStorage.getItem('data'));
  console.log(userType);
  return (
    <div>
      {
 userType === myConst.EXAMINER ? <Outlet /> : <Profile />
}
    </div>
  );
}

function StudentProtectedRoutes() {
  const { userType } = JSON.parse(localStorage.getItem('data'));
  console.log(userType);
  return (
    <div>
      {
 userType === myConst.STUDENT ? <Outlet /> : <Profile />
}
    </div>
  );
}

export {
  ProtectedRoutes, ProtectedRoutes2, AdminProtectedRoutes, ExaminerProtectedRoutes, StudentProtectedRoutes,
};