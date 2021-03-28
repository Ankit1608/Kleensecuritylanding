import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link
              to="home"
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <img style={{ height: "30px" }} src={logo} />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="academy"
                  onClick={closeMobileMenu}
                  offset={0}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Academy
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="ctf-enterprise"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Battle-Stash
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className="nav-links"
                  activeClass="active"
                  to="ctf-public"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  Hackarena
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
