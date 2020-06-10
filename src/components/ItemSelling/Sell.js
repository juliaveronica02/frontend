import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from 'sweetalert2'
import { Card, Button, Container, Row } from "react-bootstrap";
import './../style.css'
import styled from "styled-components";
class Sell extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  handleSubmit = (values, actions) => {
    var formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    // Object.keys(values).forEach(function (key) {
    //   formData.append(key.values[key]);
    // });
    formData.append("imageUrl", this.imageRef.current.files[0]);
    axios
      .post("https://api.juliaveronica.com/item/create", formData, {
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          "Content-Type": "multipart/form-data",
        },
      },
      Swal.fire({
        icon: 'success',
        title: 'Item Has Been Added'
      })
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      
  };
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
          imageUrl: "",
          quantity: "",
          categoryId: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.name) {
            errors.name = (
              <small className="form-text text-danger">Name is required</small>
            );
            errors.price = (
              <small className="form-text text-danger">Price is required</small>
            );
            errors.description = (
              <small className="form-text text-danger">Description is required</small>
            );
            errors.quantity = (
              <small className="form-text text-danger">Quantity is required</small>
            );
            errors.imageUrl = (
              <small className="form-text text-danger">Image is required</small>
            );
            errors.categoryId = (
              <small className="form-text text-danger">Category is required</small>
            );
            return errors;
          }
        }}
        onSubmit={this.handleSubmit}
        render={(formProps) => {
          return (
            <Form>
              <div style={{ marginTop: 100 }} className="container">
                <div className="row justify-content-md-center">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="card" style={{ width: "25rem" }}>
                      <div className="card-body">
                        <div className="form-group">
                          <label>Name</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="name"
                          />
                          <ErrorMessage name="name" />
                        </div>
                        <div className="form-group">
                        <label>Price</label>
                          <Field
                            type="number"
                            className="form-control"
                            name="price"
                            placeholder="price"
                          />
                          <ErrorMessage name="price" />
                        </div>
                        <div className="form-group">
                        <label>Description</label>

                          <Field
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="description"
                          />
                          <ErrorMessage name="description" />
                        </div>
                        <div className="form-group">
                        <label>Quantity</label>
                          <Field
                            type="number"
                            className="form-control"
                            name="quantity"
                            placeholder="quantity"
                          />
                          <ErrorMessage name="quantity" />
                        </div>
                        <div className="form-group">
                          <label>Upload Image</label>
                          <input
                            type="file"
                            className="form-control"
                            name="imageUrl"
                            ref={this.imageRef}
                          />
                          <ErrorMessage name="imageUrl" />
                        </div>
                        <div className="form-group">
                          <label>Category</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="categoryId"
                            placeholder="category ID"
                          />
                          <ErrorMessage name="categoryId" />
                        </div>
                        <button
                          className="btn btn-outline-primary"
                          type="submit"
                          disabled={formProps.isSubmitting}
                        >
                          Add Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );}}
          />
        );
      }
    }
    export default Sell;
    const Wrapper = styled.section`
      padding: 0;
      margin: 0;
      align-content: center;
    `;