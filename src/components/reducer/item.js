import React, { useState, useEffect } from "react";
import axios from "axios";
import { beli } from "./../actioncreators/cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./item.css";
import Cartt from "./../cart/Test";
import NumberFormat from "react-number-format";
const Test = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.juliaveronica.com/item/show", {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  // const testimage = "https://i.imgur.com/tq4h23x.jpg";
  console.log(data);

  return <div>{}</div>;
  return (
    <div className="container pt-4 mb-4">
      <h3 className="text-center">Our Items</h3>
      <hr className="hr mb-4" />
      {/* <div className="row">{showData}</div> */}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    beli,
  };
};

export default connect(null, mapDispatchToProps)(Test);
