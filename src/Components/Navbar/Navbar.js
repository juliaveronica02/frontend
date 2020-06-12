import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import logo from "../../img/logo.svg";
import SideBar from "./navbarSlide";
// import "./navbar.scss";
// import "./style.css";

export default class NavMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div
          color="white"
          style={{ height: 100 }}
          className="fixed-top"
          id="App"
        >
          <center>
            <img src={logo} alt="..." style={{ width: 30, paddingTop: 20 }} />
          </center>
          <div>
            <SideBar />
          </div>
        </div>
      );
    }
    else {
      return (
        <Navbar
          color="white"
          className="fixed-top"
          style={{
            position: " ",
            width: "100%",
            boxShadow: "0 2px 6px 0 rgba(0,0,0,.2)",
            margin:0,
          }}
          light
          expand="md"
        >
          <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="..." style={{ width: 100 }} />
          </NavLink>
          <ul
            className="ml-auto navbar-nav" >
            <li
              className="nav-item">
              <NavLink  style={{ color: "black" }} className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink
                style={{ color: "black" }}
                className="nav-link"
                to="/signin"
              >
                Signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ color: "black" }}
                className="nav-link"
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </Navbar>
      );
    }
  }
}
