import React, { Component } from "react";
import DropDown from "./DropDown";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import Search from "./Search";
import Logo from "../assets/brand-logo.png";

class NavBar extends Component {
  state = {};

  isActive = URL => {
    let currentLocation = window.location.pathname;
    return URL === currentLocation ? "nav-item active" : "nav-item";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            hspace="15"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Case Opened
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={this.isActive("/")}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className={this.isActive("/about-us")}>
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li className={this.isActive("/shop")}>
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <DropDown />
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    );
  }
}

export default NavBar;
