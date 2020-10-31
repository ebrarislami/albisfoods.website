import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import { useLocation } from "@reach/router";

const Hero = ({ image }) => {
  const location = useLocation();

  return (
    <section
      id="#home"
      className="landing full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: "100vh",
      }}
    >
      <Header activeLink={location.hash} />
      <div className="img-bg"></div>
      <div className="landing-content">
        {/* <div className="mouse">
        <p>Scroll</p>
      </div> */}
        {/* <img alt="Albis logo" src={logo} className="landing-logo" /> */}
        {/* <img
        alt="Della nonna logo"
        src={dellaNonna}
        className="della-nonna-logo"
      /> */}
      </div>
    </section>
  );
};

export default Hero;
