import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../action/auth";
import classnames from "classnames";
import Logo from "../../img/logo.png";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    // If logged in and user navigates to Register page, should redirect them to
    // dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
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
            <h5 className="font-weight-bold">Email</h5>
              <Input type="email" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email} 
              error={errors.email} className={classnames("form-control wider", {
                invalid: errors.email || errors.emailnotfound,
              })} />
              </FormGroup>
              <FormGroup>
            <h5 className="font-weight-bold">Password</h5>
                <Input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} 
                className={classnames("form-control", {
                  invalid: errors.password || errors.passwordincorrect,
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
              Sign In</Button>
        </Form>
      </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { loginUser })(withRouter(Login));