import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Loader from '../../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount, logoutAccount} from '../../redux/actions';

function Header() {
  const[loading,setLoading]=useState(true)
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loginState.authenticated);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (JSON.parse(localStorage.getItem('data'))) {
      dispatch(loginAccount(data.token, data.userType));
    }
    setLoading(false)
  });

  // if (localStorage.data) {
  //   var currentUser = JSON.parse(localStorage.getItem('data')).userType;
  //   console.log(currentUser)
  // }

  return (
    
    <div className="">
      {
      loading?<Loader/>:
     <div className="header fixed-top">
       <nav className="navbar navbar-expand-lg navbar-dark bg-light px-5">
      <NavLink className="navbar-brand" to="/">
        <img src="https://marvel-b1-cdn.bc0a.com/f00000000181213/www.valpo.edu/brand-dev/files/2014/07/Athletic_ValpoShield_Horiz_Full_Brown_Web.png" alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          
          {!isLogged
            ? (
              <>
              <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign-Up
                  </NavLink>
                </li>
              </>
            )
            : (
              <>
              
              <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                     <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={() => dispatch(logoutAccount())}>
                    Logout
                  </NavLink>
                </li>

              </>
            )}
        </ul>
      </div>
    </nav>
     </div>
    }

     
    </div>
  );
}

export default Header;
