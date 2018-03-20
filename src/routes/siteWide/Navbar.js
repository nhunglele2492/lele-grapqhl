import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="menu">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink exact activeClassName="active" to="/styleguide">Style Guide</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
