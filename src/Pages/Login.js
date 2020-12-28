import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Components/Showcase/Navbar";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return  (
      <>
      <Navbar/>
        <div className="hero is-primary">
        <div className="hero-body container">
            <h4 className="title">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.login}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
              <button className="button is-primary is-outlined is-pulled-right"> Submit </button>
                <label >Not registred yet , Resigter Now  <a href="registration">Resigter?</a> </label>
              </div>
            </div>
          </div>
        </form>
      </>
    ) 
  }
}
export default Login;