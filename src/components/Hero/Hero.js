import React from "react";
import logo from "../../img/logo.png";
import dellaNonna from "../../img/della-nonna.png";
import "./Hero.scss";
import { Link } from "gatsby";

const Hero = ({ image }) => (
  <div
    className="landing full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      height: "100vh",
    }}
  >
    <div className="img-bg"></div>
    <div className="landing-content">
      <img alt="Albis logo" src={logo} className="landing-logo" />
      <img
        alt="Della nonna logo"
        src={dellaNonna}
        className="della-nonna-logo"
      />
      <Link to="/della-nonna">
        <button className="landing-btn">Go To Della Nonna</button>
      </Link>
    </div>
  </div>
);

export default Hero;
