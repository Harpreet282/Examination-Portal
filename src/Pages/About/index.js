import React from 'react';
import './about.css';

function About() {
  return (
    <section className="about-page">
      <div className="">
        <div className="container all-containers mt-5">
          <div className="row">
            <div className="col-md-6 left-content">
              <div className="content">
                <h1>Instructions for Students</h1>
                <ul>
                  <li>Students need to login to take Exam.</li>
                  <li>Exam will be of 20 minutes.</li>
                  <li>There will be 20 Questions in one Exam.</li>
                  <li>There will be no Negative Marking.</li>
                  <li>Questions will be MCQ type.</li>
                  <li>Students can take any exam.</li>
                  <li>Students can view Exam Scores History</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 right-content">
              <div className="content">
                <h1>Instructions for Examiners</h1>
                <ul>
                  <li>Examiner need to Sign-up first.</li>
                  <li>Examiners can only login when admin approve their sign-up request.</li>
                  <li>Examiner can set exam for students.</li>
                  <li>There should only be MCQ type questions.</li>
                  <li>Examiner can view student's exam.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
