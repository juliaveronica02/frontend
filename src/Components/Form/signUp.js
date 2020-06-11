import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../action/auth";
import classnames from "classnames";

import Logo from "../../img/logo.png";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
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
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2,
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </container>
      <div className="form">
      <Form onSubmit={this.onSubmit}>
          <FormGroup>
          <h5 className="font-weight-bold">Full Name</h5>
            <Input
              type="name"
              name="name"
              placeholder="Your Name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              className={classnames("form-control wider", {
                invalid: errors.name || errors.namenotfound,
              })}
            />
          </FormGroup>
          <FormGroup>
          <h5 className="font-weight-bold">Phone</h5>
            <Input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={this.onChange}
              value={this.state.phone}
              error={errors.phone}
              className={classnames("form-control wider", {
                invalid: errors.phone || errors.phonenotfound,
              })}
            />
            </FormGroup>
            <FormGroup>
            <h5 className="font-weight-bold">Email</h5>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              className={classnames("form-control wider", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            </FormGroup>
            <FormGroup>
            <h5 className="font-weight-bold">Password</h5>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              className={classnames("form-control wider", {
                invalid: errors.password || errors.passwordnotfound,
              })}
            />
            </FormGroup>
            <FormGroup>
            <h5 className="font-weight-bold">Confirm Password</h5>
            <Input
              type="password"
              name="password"
              placeholder="Confirm Password"
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              className={classnames("form-control wider", {
                invalid: errors.password2 || errors.password2notfound,
              })}
            />
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              Remember Me
            </Label>
          </FormGroup>
          <Button className="button center text-align-center box-wrapper" type="submit">
              Sign Up</Button>
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