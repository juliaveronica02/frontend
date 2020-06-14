import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../action/auth";
import {Link} from "react-router-dom"
import classnames from "classnames";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
} from "mdbreact";

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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </container>

        <div className="form">
          <Form onSubmit={this.onSubmit}>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="10">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        id="email"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        id="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        validate
                      />
                    </div>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />
                        Remember Me
                      </Label>
                      <div className="text-center">
                        <MDBBtn color="primary" type="submit">Login</MDBBtn>
                      </div>
                    </FormGroup>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light forgot">
                      <div className="signup" onClick={this.onClick}>
                        <p>
                          Not a member?{" "}
                          <span>
                            <Link to ="/signup">Sign Up</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </MDBModalFooter>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
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
