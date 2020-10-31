import React from "react";
import "./Contact.scss";
import phoneLogo from "../../img/icons/phone.png";
import emailLogo from "../../img/icons/email.png";
import addressLogo from "../../img/icons/address.png";
import GoogleMapReact from "google-map-react";

const isClient = typeof window !== "undefined";

const lat = 41.7872168;
const lng = 20.9048755;

const Contact = () => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat, lng },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <div className="contact-section">
      <div className="address">
        <p className="address-title">Contact Us</p>
        <div className="info-container">
          <div className="info">
            <img alt="Address logo" src={addressLogo} />
            <span>Dutlok, Gostivar, Macedonia</span>
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
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{
              key: "AIzaSyDwilzCowVD0x2t4MWiHqQrxxNa3W7kru0",
            }}
            defaultCenter={[lat, lng]}
            defaultZoom={16}
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          >
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        )}
      </div>
    </div>
  );
};

const Marker = ({ lat, lng }) => <div></div>;

export default Contact;
