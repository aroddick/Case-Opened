import React, { Component } from "react";

class DropDown extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div onMouseEnter={this.toggleOpen} onMouseLeave={this.toggleOpen}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            display: 'inline-block',
            position: 'relative',
            padding: 10,
            margin: -2
          }}
        >
          Dropdown
        </a>
        <div className={menuClass} aria-labelledby="navbarDropDown">
          <a className="dropdown-item" href="#nogo">
            Item 1
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#nogo">
            Item 2
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#nogo">
            Item 3
          </a>
        </div>
      </div>
    );
  }
}

export default DropDown;
