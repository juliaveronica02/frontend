import React, { Component } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
        {/* <Footer /> */}
      </div>
    );
  }
}
