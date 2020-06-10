import React, { Component } from "react";
import logo from "../img/logo.svg";
// import "./navbar-new.scss";
import redShoes from "../img/red-shoes.png";
import shoes1 from "../img/shoes01.png";
import shoes2 from "../img/shoes02.png";
import shoes3 from "../img/shoes03.png";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* Navbar */}
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
    );
  }
}

export default Navbar;
