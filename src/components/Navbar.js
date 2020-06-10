import React, { Component } from "react";
import logo from "./img/logo.svg";
import "./navbar-new.scss";
import redShoes from "./img/red-shoes.png";
import shoes1 from "./img/shoes01.png";
import shoes2 from "./img/shoes02.png";
import shoes3 from "./img/shoes03.png";
// import { NavLink, Link } from "react-router-dom";
// import { Navbar } from "reactstrap";
// import Logo from "./img/logo.png";
// import { FaDollarSign } from "react-icons/fa";
// import PropTypes from "prop-types";
// import localForage from 'localforage'
// import Sidebar2 from "./SideBar2";
// import SideBar from "./navbarSlide";
// import "./style.css";
// import "./Navbar.css";
// import Swal from "sweetalert2";

import { connect } from "react-redux";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
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
  onClick = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div>
        {/* Navbar */}
        
      </div>
      );
    }
    return(
    <div className="Navbar">
        <nav>
            <div className="brand">
              <img src={logo} a lt="store" className="navbar-brand" />
            </div>
            <ul className="menu-list">
              <li><a className="active" href="#hero">Sell</a></li>
              <li><a href="#catalog">Sign In</a></li>
              <li><a>Sign Out</a></li>
            </ul>
        </nav>
         {/* Hero */}
         <div id="hero">
          <div className="hero-left">
            <div className="hero-el">
              <h1>Boost Up Your Style</h1>
              <h1>A Happy Future.</h1>
            </div>
            <div className="hero-el">
              <p>
                Get ready for greatness, We only provide the best of the best
                quality.
              </p>
            </div>
            <div>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={redShoes} alt="shoes1" />
          </div>
        </div>

        <div id="catalog">
          <div className="white-box">
          <div className="catalog-content">
            <h2>New Arrival</h2>
            <div className="product-list">
              <div className="fadeIn product">
                <div className="product-image">
                  <img src={shoes1} alt="shoes2" />
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h3>Light Up Shoes</h3>
                    <p>Stock : 10</p>
                  </div>
                  <div className="product-prize">Rp. 150.000,-</div>
                </div>
              </div>
              <div className="fadeIn product">
                <div className="product-image">
                  <img src={shoes2} alt="shoes2" />
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h3>Light Up Shoes</h3>
                    <p>Stock: 10</p>
                  </div>
                  <div className="product-prize">Rp. 150.000,-</div>
                </div>
              </div>
              <div className="fadeIn product">
                <div className="product-image">
                  <img src={shoes3} alt="shoes2" />
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h3>Light Up Shoes</h3>
                    <p>Stock: 20</p>
                  </div>
                  <div className="product-prize">Rp. 150.000,-</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(NavMenu);


// if(mobile)
 //     <div
    //       color="white"
    //       style={{ height: 100 }}
    //       className="fixed-top"
    //       id="App"
    //     >
    //       <Link to="/cart">
    //         <center>
    //           <img src={Logo} alt="..." style={{ width: 30, paddingTop: 20 }} />
    //         </center>
    //       </Link>
    //       <div>
    //         {this.props.auth.isAuthenticated !== true ? (
    //           <SideBar />
    //         ) : (
    //           <Sidebar2 />
    //         )}
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <Navbar
    //       color="white"
    //       className="fixed-top"
    //       style={{
    //         position: " ",
    //         width: "100%",
    //         boxShadow: "0 2px 6px 0 rgba(0,0,0,.2)",
    //       }}
    //       light
    //       expand="md"
    //     >
    //       <NavLink className="navbar-brand" to="/">
    //         <div className="cart">
    //           <img
    //             className="trishop"
    //             src={require("./img/trishop-logo.png")}
    //           />
    //         </div>
    //       </NavLink>
    //       <ul
    //         className="ml-auto navbar-nav"
    //         style={{
    //           padding: 5,
    //         }}
    //       >
    //         {/* <li
    //           className="nav-item"
    //           style={{
    //             padding: -5,
    //           }}
    //         >{localForage['keranjang'] ? 
    //         <></>
    //         : <NavLink className="nav-link" to="/cart">
    //         <img src={Logo} width={45} alt="..." />
    //       </NavLink>}
              
    //         </li>
    //         <li
    //           className="nav-item"
    //           style={{
    //             padding: 10,
    //           }}
    //         ></li> */}
    //         {/* <li
    //           className="nav-item"
    //           style={{
    //             padding: 8,
    //             backgroundColor: "rgb(31, 43, 82)",
    //             borderRadius: 10,
    //             marginRight: 10,
    //             height: 45,
    //             width: 60,
    //           }}
    //         >
    //           <NavLink
    //             style={{ color: "white" }}
    //             className="nav-link"
    //             to="/sell"
    //           >
    //             Sell
    //           </NavLink>
    //         </li> */}
    //         {this.props.auth.isAuthenticated !== true ? (
    //           <>
    //             <li
    //               className="nav-item"
    //               style={{
    //                 padding: 8,
    //                 backgroundColor: "rgb(31, 43, 82)",
    //                 borderRadius: 10,
    //                 marginRight: 10,
    //                 height: 45,
    //                 width: 75,
    //               }}
    //             >
    //               <NavLink
    //                 style={{ color: "white" }}
    //                 className="nav-link"
    //                 to="/signin"
    //               >
    //                 Signin
    //               </NavLink>
    //             </li>
    //             <li
    //               className="nav-item"
    //               style={{
    //                 padding: 8,
    //                 backgroundColor: "rgb(31, 43, 82)",
    //                 borderRadius: 10,
    //                 height: 45,
    //                 width: 80,
    //               }}
    //             >
    //               <NavLink
    //                 style={{ color: "white" }}
    //                 className="nav-link"
    //                 to="/signup"
    //               >
    //                 Signup
    //               </NavLink>
    //             </li>
    //           </>
    //         ) : (
    //           <></>
    //         )}
    //         {this.props.auth.isAuthenticated === true ? (
    //           <> <li
    //           className="nav-item"
    //           style={{
    //             padding: -5,
    //           }}
    //         ><NavLink className="nav-link" to="/cart">
    //         <img src={Logo} width={45} alt="..." />
    //       </NavLink></li>
    //             <li
    //               className="nav-item"
    //               style={{
    //                 padding: 10,
    //                 backgroundColor: "rgb(31, 43, 82)",
    //                 borderRadius: 10,
    //                 marginRight: 10,
    //               }}
    //             >
    //               <NavLink
    //                 style={{ color: "white" }}
    //                 className="nav-link"
    //                 to="/"
    //                 href="/"
    //                 onClick={this.onClick}
    //               >
    //                 Log out
    //               </NavLink>
    //             </li>
    //           </>
    //         ) : (
    //           <></>
    //         )}
    //       </ul>
    //     </Navbar>