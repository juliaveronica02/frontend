import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
// import { Button } from "react-bootstrap";
export default class ItemSell extends Component {
  render() {
    return (
      <div className="wrapper">
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
            if (values.name === "") {
              errors.name = "Item Name is Required";
            }
            if (values.price === "") {
              errors.price = "Price is Required";
            }
            if (values.description === "") {
              errors.description = "Descriptiption is required";
            }
            if (values.imageUrl === "") {
              errors.imageUrl = "Image is required";
            }
            if (values.quantity === "") {
              errors.quantity = "Quantity is required";
            }
            if (values.categoryId === "") {
              errors.categoryId = "Category is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            axios.post("https://api.juliaveronica.com/item/create", {
              values,
                headers: {
                    "x-access-token": localStorage.getItem("jwtToken"),
                  },
            });
            alert("Create Sukses");
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting, onSubmit }) => (
            <Form onSubmit={onSubmit}>
              <div className="container mt-3 mb-3">
                <div className="row justify-content-md-center">
                  <div className="col-md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <h1 className="text-center">Item Sells</h1>
                      <div className="card-body">
                        <Field
                          placeholder="name"
                          type="text"
                          name="name"
                          className={`${errors.name && touched.name}`}
                        />
                        <p />
                        <Field
                          placeholder="price"
                          type="number"
                          name="price"
                          className={`${errors.price && touched.price}`}
                        />
                        <p />
                        <Field
                          placeholder="description"
                          type="string"
                          as="textarea"
                          name="description"
                          className={`${
                            errors.description && touched.description
                          }`}
                        />
                        <p />
                        <input
                          type="file"
                          className="form-control inputText mb-1"
                          name="imageEvent"
                          style={{ width: "15.5rem" }}
                          ref={this.imageRef}
                        />
                        <Field
                          placeholder="quantity"
                          type="number"
                          name="quantity"
                          className={`${errors.quantity && touched.quantity}`}
                        />
                        <Field
                          placeholder="categoryId"
                          type="text"
                          name="categoryId"
                          className={`${
                            errors.categoryId && touched.categoryId
                          }`}
                          as="select"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>Others</option>
                          <p />
                        </Field>
                        <small className="form-text text-muted">
                          Your Category Event.
                        </small>
                        <p />
                        <button
                          className="btn btn-outline-primary"
                          type="submit"
                        >
                          Submit
                          {isSubmitting}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
