import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Resume Section
   ================================================== */}
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Life</h3>
                  <p className="info">
                    B.E. Bacholor of Computer Science Engineering<span>•</span>{" "}
                    <em className="date">April 2015</em>
                  </p>
                  <p>
                    I felt excited to share my University life experience.It was
                    nice day when i started my college life.I choosed my course on my wish because i like computer and future scope scope also based on computer.
                    I love coding.I am good in computer knowledge and learnt well,and i completed my degree in first class.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>School</h3>
                  <p className="info">
                    Sslc and Hlsc<span>•</span>{" "}
                    <em className="date">March 2015</em>
                  </p>
                  <p>
                    I am average student and i felt every tough and lazy to
                    learn and to scorce marks in schools,and i analyzed myself i
                    correct my mistakes increased concentration and i cracked
                    the exam well with 90%, and my staffs helped a alot to
                    scorce.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Integra Software Services</h3>
                  <p className="info">
                    Programmer Trainee<span>•</span>{" "}
                    <em className="date">February 2020 - August 2020</em>
                  </p>
                  <p>
                    As i selected in good IT company,i got to took training as
                    domain of MERN Developer.I
                    learnt well and felt i started coding and i increased the
                    logical thinking and learnt MERN full stack developed done
                    small small tasks and solved many codekata problems.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Cloud Logistics Technology</h3>
                  <p className="info">
                    Web Developer Internship <span>•</span>{" "}
                    <em className="date">November 2019 - January 2020</em>
                  </p>
                  <p>
                    I got Internship in Cloud Logistics,Pondicherry.I started
                    learning new Technology such as HTML,CSS,JS,PHP.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                So far i learnt all these languages in order to withstand in IT
                and i improved the below languages and i will have touch on all
                these languages nad i also interest in learning other languages
                also
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand photoshop" />
                    <em>Mongo DB</em>
                  </li>
                  
                  <li>
                    <span className="bar-expand illustrator" />
                    <em>React Js</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>PHP</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>JavaScript</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>bootstrap</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>CSS</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>{" "}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
