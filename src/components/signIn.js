// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../action/auth";
// import classnames from "classnames";
// import Logo from "./img/logo.png";

// import "../App.css";

// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       email: "",
//       password: "",
//       errors: {},
//     };
//   }
//   componentDidMount() {
//     this.setState({ isLoading: true });
//     // If logged in and user navigates to Register page, should redirect them to
//     // dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/");
//     }
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//       this.props.history.push("/"); // push user to dashboard when they login
//     }
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }
//   onChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };
  
//   onSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     this.props.loginUser(userData, this.props.history);
//     // console.log(userData);
//   };
//   render() {
//     const { errors } = this.state;
//     return (
//       <div className="App-login">
//         <main>
//           <center>
//             <div
//               style={{
//                 padding: "80px",
//               }}
//             >
//               <div className="container">
//                 <div
//                   className="z-depth-1  lighten-4"
//                   style={{
//                     display: "inline-block",
//                     padding: "32px 48px 0px 48px",
//                     border: "1px solid #EEE",
//                   }}
//                 >
//                   <img
//                     src={Logo}
//                     className="responsive-img"
//                     style={{
//                       width: "150px",
//                       margin: 20,
//                     }}
//                     alt="..."
//                   />
//                   <form onSubmit={this.onSubmit}>
//                     <div className="form-group text-left">
//                       <label>Email</label>
//                       <input
//                         onChange={this.onChange}
//                         value={this.state.email}
//                         error={errors.email}
//                         placeholder="Example@mail.com"
//                         id="email"
//                         size="25"
//                         type="email"
//                         className={classnames("form-control", {
//                           invalid: errors.email || errors.emailnotfound,
//                         })}
//                       />
//                     </div>
//                     <div className="form-group text-left">
//                       <label>Password</label>
//                       <input
//                         onChange={this.onChange}
//                         value={this.state.password}
//                         error={errors.password}
//                         // placeholder=" password"
//                         id="password"
//                         size="25"
//                         type="password"
//                         placeholder="Please enter your password"
//                         className={classnames("form-control", {
//                           invalid: errors.password || errors.passwordincorrect,
//                         })}
//                       />
//                     </div>
//                     <div style={{ margin: 20 }} className="text-center pt-4">
//                       <button type="submit" className="btn btn-outline-dark">
//                         Login
//                       </button>
//                     </div>
//                     {/* <div className="text-center pt-2">
//                                             <a className="btn btn-link text-primary" href="#">Forgot Your Password?</a>
//                                         </div> */}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </center>
//         </main>
//       </div>
//     );
//   }
// }
// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
// export default connect(mapStateToProps, { loginUser })(withRouter(Login));
import React from "react";
import "./SignIn.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function SignIn() {
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
        <Form>
          <h5 className="font-weight-bold">Email</h5>
          <FormGroup>
            <Input
              className="wider"
              type="email"
              name="email"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
          <h5 className="font-weight-bold">Password</h5>
            <Input
              className="wider"
              type="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              Remember Me
            </Label>
          </FormGroup>
          <Button className="button center text-align-center box-wrapper">
              Sign In</Button>
          <br /> 
          <p className="password">
              <a href="www.google.com">
              Forgot Password? Sign Up here.<a href="" target="_blank"></a></a></p>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;