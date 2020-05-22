import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <div className="pt-2 mb-4">
        <div className="row mt-3">
          {/* <div className="col-md-6 col-sm-12"> */}
          <div className="col-lg-6 col-md-12">
            <Slider {...settings}>
              <img src={require("../img/1.png")} alt="Gambar 1" />
              <img src={require("../img/2.png")} alt="Gambar 2" />
              <img src={require("../img/3.png")} alt="Gambar 3" />
            </Slider>
          </div>
          {/* <div className="col-md-6 col-sm-12 d-flex flex-column size"> */}
          <div className="col-lg-6"style={{height:"500px"}} >
            <div className="mb-2 mt-2"style={{height:"50%"}}>
              <img
                src={require("../img/2.png")}
                alt="Gambar"
                style={{ height: "100%",width: "100%",border: "4px solid #d7e2e2"}}
              />
            </div>
            <div style={{height:"50%"}}>
              <img
                src={require("../img/3.png")}
                alt="Gambar"
                style={{   height: "100%",width: "100%",border: "4px solid #d7e2e2" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
