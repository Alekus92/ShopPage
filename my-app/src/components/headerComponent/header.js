import React, { Component } from "react";
//import logo from "./images/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="topnav" id="myTopnav">
        <a href="#home">
          <img className="logo" src="" alt="Smiley face" />
        </a>
        <div className="navlist" id="navlist">
          <a className="navoption active" href="#home">
            Home
          </a>
          <a className="navoption" href="#news">
            News
          </a>
          <a className="navoption" href="#contact">
            Contact
          </a>
          <a className="navoption" href="#about">
            Kontakt
          </a>
          <a className="navoption" href="#about">
            O nas
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
