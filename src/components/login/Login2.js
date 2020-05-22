import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./../actioncreators/auth";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
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
    return (
      <div className="container mt-5" style={{ marginBottom: "45px" }}>
        <div className="card pb-3">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./logo512.png"
                alt="Login"
                style={{ marginLeft: "35px", width: "80%", height: "300px" }}
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (values.email === "") {
                    errors.email = "Name is required";
                  }
                  if (values.password === "") {
                    errors.password = "Born is requird";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  axios.post("https://api.juliaveronica.com/users/login", {
                    values,
                  });
                  alert("Form is Validated!");
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <div
                  //   style={{
                  //     marginLeft: "380px",
                  //     marginBottom: "0",
                  //     paddingTop: "0",
                  //   }}
                  >
                    <Form>
                      <div
                        className="container"
                      >
                        <h1 className="text-center mb-3 mt-3">Login Form</h1>
                        <div className="text-center">
                          <div
                            class="card"
                            style={{
                              backgroundColor: "white",
                              boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                              width: "20rem",
                            }}
                          >
                            <div class="card-body" style={{ width: "" }}>
                              <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                                className={`${errors.email && touched.email} form-control`}
                              />
                              <p />
                              <Field
                                placeholder="Password"
                                type="password"
                                name="password"
                                className={`${
                                  errors.password && touched.password
                                } form-control`}
                              />
                              <p />
                              <button
                                type="submit"
                                className="btn btn-outline-primary"
                              >
                                Login
                              </button>
                              <h6 className="mt-3">
                                Don't have an account?
                                <Link to="/register">Sign Up</Link>
                              </h6>
                              {isSubmitting}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
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
