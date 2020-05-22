import React, { Component, useState } from "react";
import axios from "axios";
import "./search.css";

import {
  Button,
  Input,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from "mdbreact";

import categoriesList from "./categories.json";

class Searches extends Component {
  state = {
    search: "",
  };

  renderCategory = (category) => {
    const { search } = this.state;
    var id = category.id.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={require("../img/1.png")}
                className={id}
                alt={category.name}
              />
            </p>
            <CardTitle title={category.name}>
              {category.name.substring(0, 15)}
              {category.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCategories = categoriesList.filter((category) => {
      return category.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a href="" target="_blank"></a>
                  </h3>
                </center>
              </div>
              <div className="col">
                <Input
                  label="Search Category"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredCountries.map((category) => {
                return this.renderCategory(category);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Searches;
