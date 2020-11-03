import React from "react";
import "./AboutAlbis.scss";
import tickLogo from "../../img/icons/tick.png";

const AboutAlbis = () => (
  <div className="about-section">
    <p className="title">
      <span className="about">About</span> <span>Della Nona</span>
    </p>
    <div className="info-container">
      <div className="info">
        {/* <div className="img-wrapper">
          <img src={tickLogo} alt="Tick logo" />
        </div> */}
        <p>
        Della Nonna is new, unique premium frozen dessert product. 
Product was brought to the market with the highest quality, meeting the criteria even of the best connoisseurs of sweet tastes. The desserts are made according to traditional and modern recipes known all over the world. 
        </p>
      </div>
      <div className="info">
      <p>
        More than 50 years of knowledge and dedication are behind these sweet pleasures, and these decades long tradition are reflected in the name of the Della Nonna brand - meaning comes from Grandma. In a figurative sense, it is something that is homemade, handmade, quality, and usually refers to cooking, food or sweets preparation. 
        </p>
      </div>
      <div className="info">
      <p>
        The connection of traditional and modern, old cookbooks handwritings, and technologies progress, are reflected in the brand slogan: 
        </p>
      </div> 
    </div>
    <p style={{textAlign: 'right', color: 'white'}}>
        <strong>Dolci. La prossima generazione. </strong>
        </p>
  </div>
);

export default AboutAlbis;
