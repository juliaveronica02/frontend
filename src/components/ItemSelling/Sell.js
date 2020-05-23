import React, { Component } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";
import { Card, Button, Form, Container, Row } from "react-bootstrap";
import styled from "styled-components";
class Sell extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  onSubmit = (values, action) => {
    let formData = new FormData();
    Object.keys(values).forEach(function (key) {
      formData.append(key.values[key]);
    });
    formData.append("imageEvent", this.imageRef.current.files[0]);
    const URL = "https://api.juliaveronica.com/item/create";
    axios
      .post(URL, formData, {
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        action.setSubmitting(false);
        action.resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
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
        onSubmit={this.handleSubmit}
        render={(formProps, setFieldValue) => {
          return (
            <Container className="mt-5 pt-5 text-center">
              <h1>Sell Your Item here</h1>
              <Row className="justify-content-md-center">
                <Wrapper>
                  <Card className="text-left">
                    <Card.Body>
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Product Name"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="number"
                            name="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            placeholder="Item Price ex: 10000"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            placeholder="Describe your item here"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Image Url</Form.Label>
                          <Form.Control
                            type="file"
                            src={`${process.env.REACT_APP_API_URL}`}
                            name="imageUrl"
                            onChange={formik.handleChange}
                            value={formik.values.imageUrl}
                            placeholder="Paste your image Url here"
                            ref={this.imageRef}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>quantity</Form.Label>
                          <Form.Control
                            type="number"
                            name="quantity"
                            onChange={formik.handleChange}
                            value={formik.values.quantity}
                            placeholder="Quantity of your item"
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            type="text"
                            name="categoryId"
                            onChange={formik.handleChange}
                            value={formik.values.categoryId}
                            placeholder="Category ex : 1,2,3"
                          ></Form.Control>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Wrapper>
              </Row>
            </Container>
          );
        }}
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
