import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Portfolio Section
   ================================================== */}
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img alt="" src="images/portfolio/cloud.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Certificate</h5>
                          <p>learning</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02">
                      <img alt="" src="images/portfolio/url.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>URL</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/cloud.png"
                alt=""
              />
              <div className="description-box">
                <h4>Internship Certificate</h4>
                <p>
                  This is my Internship certificate as Web developer Trainee in
                  cloud logistics
                </p>
              </div>
              <div className="link-box">
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <div className="description-box">
                <h4>project</h4>
                <p>
                  This is a url shortener app it makes us to shortener the url
                  as optimist.This project is done in Node js and Mongo DB and
                  hosted in heroku
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  Branding, Web Development
                </span>
              </div>
              <div className="link-box">
                <a href="https://url-shortener-myapp.herokuapp.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            {/* modal-01 End */}
          </div>{" "}
          {/* row End */}
        </section>{" "}
        {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}
