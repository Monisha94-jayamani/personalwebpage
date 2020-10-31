import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com/monisha.jacklein.9">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Monisha94-jayamani">
                    <i className="fa fa-github" />
                  </a>
                </li>
               
                <li>
                  <a href="https://www.linkedin.com/feed/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>

                <li>
                  <a href="#/">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li></li>
                <li>
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    .
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>{" "}
        {/* Footer End*/}
      </React.Fragment>
    );
  }
}
