import React from "react";
import logo from "../../img/logo.svg";
import SideBar from "./navbarSlide";
import "./navbar.scss";

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
    } else {
      return (
        <div className="Navbar">
        {/* Navbar */}
        <nav>
            <div className="brand">
              <img src={logo} a lt="store" className="navbar-brand" />
            </div>
            <ul className="menu-list">
              <li><a className="active" href="#Cart">Cart</a></li>
              <li><a href="#signIn">Sign In</a></li>
              <li><a href="#signUp">Sign Up</a></li>
            </ul>
        </nav>
      </div>
      );
    }
  }
}