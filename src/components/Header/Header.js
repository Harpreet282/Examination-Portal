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
          <img src="data:image/png;base64,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" alt="logo" />
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
