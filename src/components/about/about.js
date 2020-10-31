import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am Monisha.I did my Computer science Engineering in St.Annes
                college of Engineering and Technology. I am interested in
                Mathematics so,I choosed Engineering and I love to code.My
                hobbies are playing carrom,tennis,making blog etc. I love
                planting trees.My goal is to get land in a good IT
                company.Before that I wish to learn all coding tatics and i will
                agian all the programming experience.I hope i will acheive my
                goal.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Monisha Jayamani</span>
                    <br />
                    <span>
                      No.449 Kamman Kovil Street
                      <br />
                      Pathirikuppam, Cuddalore 02 India
                    </span>
                    <br />
                    <span>(+91)7812863264</span>
                    <br />
                    <span>monijacklein@gmail.com</span>
                  </p>
                </div>
                <div class="columns download">
                  <p>
                  
                     <a href="images/monisha-resume.pdf" download="monisha--resume" class="button"><i class="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>

              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>{" "}
        {/* About Section End*/}
      </React.Fragment>
    );
  }
}
