import React from 'react'
import {Outlet} from 'react-router'
import Home from '../../Pages/Home'
import {useSelector} from 'react-redux';

const ProtectedRoutes = () => {
    const isLogged=useSelector(state=>state.loginState.authenticated);
  return (
    <div> 
{
    isLogged?<Outlet />:<Home/>
}
    </div>
  )
}

export default ProtectedRoutes