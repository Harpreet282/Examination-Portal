import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount, logoutAccount } from '../../redux/actions';
import * as myConstants from '../../Constants';

function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loginState.authenticated);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (JSON.parse(localStorage.getItem('data'))) {
      dispatch(loginAccount(data.token, data.userType));
    }
  });

  if (localStorage.data) {
    var currentUser = JSON.parse(localStorage.getItem('data')).userType;
    // console.log(currentUser)
  }

  return (
    <div className="header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_v03MXYtMYta3mga-w4zIuiTRnPJ_eEPAA&usqp=CAU" alt="logo" />
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
                  {currentUser === myConstants.EXAMINER
                    ? (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/examinerDashboard">
                          Dashboard
                        </NavLink>
                      </li>
                    </>
                    )
                    : (
                      <>
                        {
              currentUser === myConstants.ADMIN
                ? (
                 <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/adminDashboard">
                      Dashboard
                    </NavLink>
                  </li>
                 </>
                )
                : (
                  <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/studentDashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  </>
                )
}
                      </>
                    )}

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
  );
}

export default Header;
