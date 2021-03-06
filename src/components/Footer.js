import React from "react";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logo from "../img/logo.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <img alt="Albis logo" src={logo} className="logo" />
              </div>
              <div className="column is-6"></div>
              <div className="column is-2 social">
                <p>Follow Us</p>
                <a
                  title="facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://facebook.com/albisfoods"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/albisfoods"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copy">
          AlbisFoods 2020 &copy; All Rights reserved.
        </p>
      </footer>
    );
  }
};

export default Footer;
