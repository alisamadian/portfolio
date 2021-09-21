import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import imggithub from "./ali/contact/github.svg";
import imglinkedin from "./ali/contact/linkedin.png";
import imginstagram from "./ali/contact/instagram.png";
import imgtwitter from "./ali/contact/twitter.png";
import imgfacebook from "./ali/contact/facebook.svg";

function Footer() {
  return (
    <div className="footer-container">

        <div className="sixth-row">
          <div className="sixth-row-container"></div>
          <div className="sixth-row-1">
            <div className="sixth-row-1-cells"></div>
            <div className="sixth-row-1-cells"></div>
            <div className="sixth-row-1-cells"></div>
            <div className="sixth-row-1-cells"></div>
            <div className="sixth-row-1-cells"></div>
          </div>
          <div className="sixth-row-2">
            <div className="sixth-row-2-cells"></div>
            <div className="sixth-row-2-cells"></div>
            <div className="sixth-row-2-cells"></div>
            <div className="sixth-row-2-cells"></div>
            <div className="sixth-row-2-cells"></div>
          </div>
          <div className="sixth-row-3">
            <a
              className="footer-card"
              href="https://github.com/alisamadian"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imggithub} width="160px;" alt="" />
              <p className="footer-text">Github</p>
            </a>
            <a
              className="footer-card"
              href="https://www.linkedin.com/in/ali-samadian-27281016b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imglinkedin} width="160px;" alt="" />
              <p className="footer-text">Linkedin</p>
            </a>
            <a
              className="footer-card"
              href="https://www.instagram.com/ali_samadian/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imginstagram} width="160px;" alt="" />
              <p className="footer-text">Instagram</p>
            </a>
            <a
              className="footer-card"
              href="https://twitter.com/josephstalinbig"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgtwitter} width="160px;" alt="" />
              <p className="footer-text">Twitter</p>
            </a>
            <a
              className="footer-card"
              href="https://www.facebook.com/ali.samadian/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgfacebook} width="160px;" alt="" />
              <p className="footer-text">Facebook</p>
            </a>
          </div>
        </div>
      <div className="footer-links">
        <ul className="links">
          <li className="nav-item">
            <Link to="/components/Home" className="footer-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/components/Works" className="footer-link">
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/components/Certificates" className="footer-link">
              Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/components/Contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="totop-year-container">
        <a href="#top" className="totop-but">
          To Top
        </a>
        <small className="footer-year">2021</small>
      </div>
    </div>
  );
}

export default Footer;
