import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 5,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <img src={require("../img/2.png")} alt="Gambar 1"/>
          <img src={require("../img/1.png")} alt="Gambar 1"/>
          <img src={require("../img/3.png")} alt="Gambar 1"/>
          <img src={require("../img/2.png")} alt="Gambar 1"/>
          <img src={require("../img/3.png")} alt="Gambar 1"/>
          <img src={require("../img/2.png")} alt="Gambar 1"/>
          <img src={require("../img/1.png")} alt="Gambar 1"/>
          <img src={require("../img/1.png")} alt="Gambar 1"/>
          <img src={require("../img/2.png")} alt="Gambar 1"/>
          <img src={require("../img/3.png")} alt="Gambar 1"/>
          <img src={require("../img/1.png")} alt="Gambar 1"/>
          <img src={require("../img/2.png")} alt="Gambar 1"/>
          <img src={require("../img/3.png")} alt="Gambar 1"/>
        </Slider>
      </div>
    );
  }
}
