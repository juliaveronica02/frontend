import React, { Component } from 'react'
import "./navbar.scss";
import shoes1 from "../../img/shoes01.png";
import shoes2 from "../../img/shoes02.png";
import shoes3 from "../../img/shoes03.png";

export default class Home extends Component {
    render() {
        return (
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
        )
    }
}
