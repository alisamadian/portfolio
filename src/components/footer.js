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
      <section className="footer-markers">
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
            >
              <img src={imggithub} width="160px;" alt="" />
              <p className="footer-text">Github</p>
            </a>
            <a
              className="footer-card"
              href="https://www.linkedin.com/in/ali-samadian-27281016b/"
              target="_blank"
            >
              <img src={imglinkedin} width="160px;" alt="" />
              <p className="footer-text">Linkedin</p>
            </a>
            <a
              className="footer-card"
              href="https://www.instagram.com/ali_samadian/"
              target="_blank"
            >
              <img src={imginstagram} width="160px;" alt="" />
              <p className="footer-text">Instagram</p>
            </a>
            <a
              className="footer-card"
              href="https://twitter.com/josephstalinbig"
              target="_blank"
            >
              <img src={imgtwitter} width="160px;" alt="" />
              <p className="footer-text">Twitter</p>
            </a>
            <a
              className="footer-card"
              href="https://www.facebook.com/ali.samadian/"
              target="_blank"
            >
              <img src={imgfacebook} width="160px;" alt="" />
              <p className="footer-text">Facebook</p>
            </a>
          </div>
        </div>
      </section>
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
      <section className="social-media">
        <div className="footer-logo">
          <Link to="/components/Home" className="social-logo">
            To Top
          </Link>
        </div>
        <small className="website-rights">2021</small>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </Link>
          <Link
            className="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
