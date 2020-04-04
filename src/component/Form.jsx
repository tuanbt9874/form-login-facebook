import React, { Component } from "react";
import Facebook from "./Facebook";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="login-form">
          <div className="form-header">
            <h1>Sign Up </h1>
          </div>
          <div className="form-body">
            <form>
              <label htmlFor="username">
                <i className="fal fa-circle"></i>
              </label>
              <input type="text" name="username" placeholder="USERNAME" />
              <label htmlFor="email">
                <i className="fal fa-circle"></i>
              </label>
              <input type="email" name="email" placeholder="EMAIL" />
              <label htmlFor="password">
                <i className="fal fa-circle"></i>
              </label>
              <input type="password" name="password" placeholder="PASSWORD" />
              <input type="checkbox" name="checkbox" value="Accept" />
              <label htmlFor="checkbox" className="lb-checkbox">
                I agree all statements in
                <a href="https://www.google.com/">Terms & Conditions</a>
              </label>
              <input type="submit" value="SIGN UP" />
              <div className="login">
                <span>Already Have acccount?</span>
                <a href="https://www.google.com/">Login</a>
              </div>
            </form>
          </div>
        </div>
        <div className="form-footer">
          <span>OR</span>
          <h3>Sign up for social platforms</h3>
          <div className="group-button">
            <Facebook />
            <a href="https://www.google.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fab fa-google-plus"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
