import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Product extends React.Component {
  constructor(props) {
    super();
    this.state = {
      width: window.innerWidth,
      products: [],
    };
  }
  componentDidMount() {
    console.log(localStorage.getItem("jwtToken"));
    axios
      .get(
        `${process.env.REACT_APP_API_URL_PRODUCT}`
        // {
        //   headers: {
        //     "x-access-token": localStorage.getItem("jwtToken"),
        //   },
      )
      .then((response) => {
        console.log(response.data);

        const products = response.data;
        this.setState({ products: products });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    console.log(this.state.products);
    if (isMobile) {
      return (
        <div className="container">
          <div className="row">
            {this.state.products.map((listProduct) => (
              <div className="col-12" key={listProduct.id}>
                <div style={imageStyle}>
                  <NavLink to={`/details/detail/${listProduct.id}`}>
                    <img
                      style={slideStyles}
                      src={`${process.env.REACT_APP_API_URL}/${listProduct.product.imageUrl}`}
                      alt="Lorem ipsum"
                    />
                  </NavLink>
                  <small>{listProduct.product.name}</small>
                  <h5>{listProduct.product.name}</h5>
                  <small>{listProduct.description}</small>
                  <h5>Rp.{listProduct.product.price},-</h5>
                  <h6>&nbsp; {listProduct.date}</h6>
                  <h6>&nbsp; 10:00 WIB</h6>
                  <small>&nbsp; {listProduct.location}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div class="row">
          {this.state &&
            this.state.products &&
            this.state.products.map((listProduct) => (
              <div className="col-3" key={listProduct.id}>
                <div style={imageStyle}>
                  <NavLink to={`/details/detail/${listProduct.id}`}>
                    <img
                      style={slideStyles}
                      src={`${process.env.REACT_APP_API_URL}${listProduct.imageUrl}`}
                      alt="Lorem ipsum"
                    />
                  </NavLink>
                  <small>{listProduct.name}</small>
                  <h5>{listProduct.name}</h5>
                  <h5>Rp.{listProduct.price},-</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

// const slideStyle = {
//   display: "block",
//   width: "100%",
//   maxHeight: "360px",
//   borderRadius: "8px",
// };
const slideStyles = {
  display: "block",
  width: "100%",
  maxHeight: "360px",
  borderRadius: "8px",
};
const container = {
  paddingRight: "0px",
  paddingLeft: "0px",
  marginLeft: "auto",
  marginRight: "auto",
};
const imageStyle = {
  display: "block",
  margin: "15px",
  fontFamily: "Barlow Semi Condensed",
};
