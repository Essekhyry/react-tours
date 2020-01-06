import React, { Component } from "react";
import logo from "../../logo.png";
import "./Navbar.scss";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="///" />
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/">About</a>
          </li>
          <li className="nav-link">
            <a href="/">Tours</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
