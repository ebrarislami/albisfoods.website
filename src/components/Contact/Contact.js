import React from "react";
import "./Contact.scss";
import phoneLogo from "../../img/icons/phone.png";
import emailLogo from "../../img/icons/email.png";
import addressLogo from "../../img/icons/address.png";
import GoogleMapReact from "google-map-react";

const isClient = typeof window !== "undefined";

const lat = 41.8026;
const lng = 20.9089;

const Contact = () => (
  <div className="contact-section">
    <div className="address">
      <p className="address-title">Contact Us</p>
      <div className="info-container">
        <div className="info">
          <img alt="Address logo" src={addressLogo} />
          <span>Gostivar, Macedonia</span>
        </div>
        <div className="info">
          <img alt="Email logo" src={emailLogo} />
          <span>admin@albisfoods.com</span>
        </div>
        <div className="info">
          <img alt="Phone logo" src={phoneLogo} />
          <span>+389 70 xxx xxx</span>
        </div>
      </div>
    </div>
    <div className="map">
      {isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwilzCowVD0x2t4MWiHqQrxxNa3W7kru0" }}
          defaultCenter={[lat, lng]}
          defaultZoom={14}
        >
          <div className="marker" lat={lat} lng={lng} />
        </GoogleMapReact>
      )}
    </div>
  </div>
);

export default Contact;
