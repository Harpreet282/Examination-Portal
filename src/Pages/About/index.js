import React from 'react';
import './about.css';
import aboutImage from "../../Assets/images/About/about-us.webp"


function About() {
  return (
    <section className="about-page">
     <div className='about-container' >
      <div className='row mt-5 mx-0'>
        <div className='col-md-6 about-container-content'>
          <div className='content-section'>
            <h1>About Us</h1>
            <p>The One Technologies is in top software development solutions that stimulate your business with our comprehensive modern app development services. We offer customized digital solutions that will help engage your audience in the competitive era.
                <br/>
                <br/>
              We work with the best tools and technologies for iOS, Android, and web applications. You can have the most reliable and cost-effective next-gen solutions for your requirement by having us as your IT outsourcing partner. Our experienced team offers research-based insights to enhance software experience.
              <br/>
              <br/>
              The interest of students is given top priority and counseling is taken up to help students identify their interests and careers. PAGE’s course structure is comprehensive and scientifically designed for both teachers and students to evaluate progress.</p>
          </div>
        </div>
        <div className='col-md-6 p-0'>
          <div className='about-container-img'>
            <img src={aboutImage} />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
