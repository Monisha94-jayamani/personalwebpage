import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Contact Section
   ================================================== */}
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                If u want to contact or any doubts to self learn to get started
                in IT sure i will help u and i will share my knowlege what i
                learnt
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form
                action="mailto:monijacklein@gmail.com"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactName"
                      name="contactName"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>{" "}
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Monisha Jayamani
                  <br />
                  No.449 Kamman Kovil street,pathirikuppam <br />
                  Cuddalore,India
                  <br />
                  <span>(+91)7812863264</span>
                </p>
              </div>
              <div className="widget widget_tweets">
                <ul id="twitter"></ul>
              </div>
            </aside>
          </div>
        </section>{" "}
        {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
