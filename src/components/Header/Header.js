import React from "react";
import dellaNonna from "../../img/della-nonna.svg";
import "./Header.scss";
import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import scrollTo from "gatsby-plugin-smoothscroll";
import AboutAlbis from "../AboutAlbis/AboutAlbis";

const Header = ({ activeLink }) => (
  <ul className="header">
    <li
      onClick={() => window.location.href = '/'}
      className={(activeLink === "#home" || activeLink === "") && "active"}
    >
      {/* <a href="/della-nonna#home">Home</a> */}
      <Link to="/della-nonna#home">Home</Link>
    </li>
    <li
      onClick={() => scrollTo("#about")}
      className={activeLink === "#about" && "active"}
    >
      {/* <a href="/della-nonna#about">About</a> */}
      <Link to="/della-nonna#about">About</Link>
    </li>
    <img
      alt="Della nonna logo"
      src={dellaNonna}
      className="della-nonna-logo2"
    />
    <li
      onClick={() => scrollTo("#products")}
      className={activeLink === "#products" && "active"}
    >
      <Link to="/della-nonna#products">Products</Link>
    </li>
    <li className={activeLink === "/contact" && "active"}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

export default Header;
