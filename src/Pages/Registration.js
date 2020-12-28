import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../Components/Showcase/Navbar";

class Register extends Component {
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
        <div className="hero is-primary ">
        <div className="hero-body container">
            <h4 className="title">Resigter</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.Register}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Nom: </label>
                <input
                  className="input"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Prénom: </label>
                <input
                  className="input"
                     onChange={this.handleChange}
                />
              </div>
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
                <label className="label">Adresse: </label>
                <input
                  className="input"
                  
                  onChange={this.handleChange}
                />
                </div>
                <div className="field">
                <label className="label">Ville: </label>
                <input
                  className="input"
                  
                  onChange={this.handleChange}
                />
                </div>
                <div className="field">
                <label className="label">Pays: </label>
                <input
                  className="input"
                   onChange={this.handleChange}
                />
                </div>
                <div className="field">
                <label className="label">Code Postal: </label>
                <input
                  className="input"
                   onChange={this.handleChange}
                />
                </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
              <button className="button is-primary is-outlined is-pulled-right"> Submit </button>
                <label >Already registred GO to Login <a href="login">Login?</a> </label>
              </div>
            </div>
          </div>
        </form>
      </>
    ) 
  }
}
export default Register;