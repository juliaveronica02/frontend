import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../action/auth";
import classnames from "classnames";

import "./style.css";
import logo from "../../img/logo.svg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to
    // dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onChangePhone = (e) => {
    this.setState({
      [e.target.id]: e.target.value.replace(/\D/, ""),
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="d-md-flex flex-row">
        <container className="SignIn header">
          <h1 className="display-3 font-weight-bold">
            Want to Buy Something Cheap?
          </h1>
          <h1>Take a Look Inside Here.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </container>
        <div className="logo">
          {/* <img src={logo} alt="Logo Trishop" style={{ width: 75, paddingTop: 150 }} /> */}
        </div>
        <div className="form">
          <Form obSubmit={this.onSubmit}>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="10">
                  <p className="h5 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      onChange={this.onChange}
                      value={this.state.passwordConfirm}
                      error={errors.passwordConfirm}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary">Register</MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
