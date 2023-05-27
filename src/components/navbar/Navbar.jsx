import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import Line from "../line/Line";
import { Squash as Hamburger } from "hamburger-react";

const Menu = () => (
  <>
    <p className="underline_animation">
      <a href="#Home">Home</a>
    </p>
    <p className="underline_animation">
      <a href="#About">About</a>
    </p>
    <p className="underline_animation">
      <a href="#Portfolio">Portfolio</a>
    </p>
    <p className="underline_animation">
      <a href="#Contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar-line">
      <div className="navbar">
        <div className="navbar__links">
          <div className="navbar__links__logo">
            <a href="#Home">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="navbar__menu-links_container">
            <div className="navbar__links__container">
              <Menu />
            </div>
            <div className="navbar__menu">
              <div className="hamburger_lines">
                <Hamburger
                  color="black"
                  size={23}
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </div>
              {isOpen && (
                <div className="navbar__menu-container slide-left">
                  <div className="navbar__menu-container__links">
                    <Menu />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Navbar;
