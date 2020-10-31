import React from "react";
import dellaNonna from "../../img/della-nonna.svg";
import "./Header.scss";
import { Link } from "gatsby";

const Header = ({ activeLink }) => (
  <ul className="header">
    <li className={activeLink === "#home" && "active"}>
      <a href="#home">Home</a>
    </li>
    <li className={activeLink === "#about" && "active"}>
      <a href="#about">About</a>
    </li>
    <img
      alt="Della nonna logo"
      src={dellaNonna}
      className="della-nonna-logo2"
    />
    <li className={activeLink === "#products" && "active"}>
      <a href="#products">Products</a>
    </li>
    <Link to="/contact">
      <li className={activeLink === "/contact" && "active"}>
        <a>Contact</a>
      </li>
    </Link>
  </ul>
);

export default Header;
