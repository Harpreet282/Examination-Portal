import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-page">
         <div className="container all-containers my-5">
          <div className="row">
            <div className="col-md-6 left-content">
              <div className="content absolute-center">
                <h1>Login To View Your Profile</h1>
                <button className="btn">
                  <NavLink to="login">Login Now</NavLink>
                </button>
              </div>
            </div>
            <div className="col-md-6 right-content">
              <div className="home-page-image">
                <img
                  src="https://www.kindpng.com/picc/m/240-2400609_educational-doctor-admission-entrance-examination-common-doctor-study.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> 
      </section>
    </>
  );
};

export default Home;
