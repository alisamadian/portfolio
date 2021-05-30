import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/components/Home"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <p>Portfolio</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/components/Home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/components/Ali"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ali
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/components/Jalal"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Jalal
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/components/About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
