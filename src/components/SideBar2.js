import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default class componentName extends Component {
  onClick = () => {
    localStorage.clear();
    window.location.reload(false)
  }
  render() {
    return (
      <div>
        <Menu
          style={{
            backgroundColor: "white",
          }}
        >
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>

          <NavLink className="menu-item" to="/sell">
            Sell
          </NavLink>

          <NavLink className="menu-item" to="/" onClick={this.onClick}>
            Logout
          </NavLink>
        </Menu>
      </div>
    );
  }
}
