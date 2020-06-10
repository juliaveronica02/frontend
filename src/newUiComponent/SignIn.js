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