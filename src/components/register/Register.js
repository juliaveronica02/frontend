import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./../actioncreators/auth";
// import styled from "styled-components";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    };
  }
  componentDidMount() {
    // if logged in and user navigates to register page, should redirect them to dashboard.
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
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="container mt-4" style={{ marginBottom: "45px" }}>
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
              <form onSubmit={this.onSubmit}>
                <div className="container">
                  <h1
                    className="text-center mb-3 mt-3"
                    style={{ fontSize: "26px" }}
                  >
                    Register Form
                  </h1>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "white",
                      boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                      width: "20rem",
                    }}
                  >
                    <div className="card-body">
                      <div className="form-group">
                        {/* email */}
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          placeholder="Email"
                          id="email"
                          size="25"
                          type="email"
                        />
                      </div>
                      {/* phone */}
                      <div className="form-group">
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.phone}
                          error={errors.phone}
                          placeholder="Phone"
                          id="phone"
                          size="25"
                          type="number"
                        />
                      </div>
                      {/* password */}
                      <div className="form-group">
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          placeholder="Password"
                          id="password"
                          size="25"
                          type="password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.passwordConfirm}
                          error={errors.passwordConfirm}
                          placeholder="Confirm Password"
                          id="password"
                          size="25"
                          type="password"
                        />
                      </div>
                      {/* button signup */}
                      <div className="text-center mt-4">
                        <button type="submit" className="btn btn-outline-dark">
                          SignUp
                        </button>
                      </div>
                      <h6 className="mt-4">
                        Already Have an Account?
                        <Link to="/login"> Sign In</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const AppRegister = styled.form`
//   margin-top: 80px;
//   min-height: 40vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: white;
// `;

// <AppRegister>
// {/* form register */}
// <form onSubmit={this.onSubmit}>
//   <div className="form-group">
//     {/* email */}
//     <input
//       onChange={this.onChange}
//       value={this.state.email}
//       error={errors.email}
//       placeholder="email"
//       id="email"
//       size="25"
//       type="email"
//     />
//   </div>
//   {/* phone */}
//   <div className="form-group">
//     <input
//       onChange={this.onChange}
//       value={this.state.phone}
//       error={errors.phone}
//       placeholder="phone"
//       id="phone"
//       size="25"
//       type="number"
//     />
//   </div>
//   {/* password */}
//   <div className="form-group">
//     <input
//       onChange={this.onChange}
//       value={this.state.password}
//       error={errors.password}
//       placeholder="password"
//       id="password"
//       size="25"
//       type="password"
//     />
//   </div>
//   {/* button signup */}
//   <div style={{ margin: "20px" }} className="text-center pt-4">
//     <button type="submit" className="btn btn-outline-dark">
//       SignUp
//     </button>
//   </div>
// </form>
// </AppRegister>

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
