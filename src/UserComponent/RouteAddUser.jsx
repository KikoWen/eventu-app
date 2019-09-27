import React, { Component } from "react";
import { addUsers, uploadFile } from "../Api.jsx";
import { navigate } from "@reach/router";
import Footer from "../Footer.jsx";
import {Link} from "@reach/router";

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';

class RouteAddUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      username:'',
      password:'',
      email:'',
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();

    var formData = new FormData(this.formGroup.parentNode);
    var { currentUser } = this.props;

    var data = {
      name: formData.get("name"),
      email: formData.get("email"),
      username: formData.get("username"),
      role: formData.get("userRole"),
      password: formData.get("password"),
    };

    {
      currentUser && currentUser.role == "admin"
        ? addUsers(data).then(res => navigate("/users"))
        : addUsers(data).then(res => navigate("/"));
    }

  }
  
  handleInputChange = (e) => {
      var value = e.target.value
      var inputName = e.target.name
  
  
      var  stateData =  {}
      stateData[inputName] = value
  
      this.setState(stateData)
  }

  formError = (inputs) => {
    
  }
  
  render() {
    var { currentUser } = this.props;
    var { name, username, password, email } = this.state;
    return (
      <div className="container">
        <header>
          <Link to="/events"><i className="fas fa-arrow-left"></i></Link>
        </header>
        <div className="main">
          <h3 className="page-name">create new account</h3>

          <div className="signup-contents">
            <ValidatorForm onError={this.formError} onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}
              onSubmit={this.handleFormSubmit}
              
            >
              <div className="form-group" ref={el => {
                this.formGroup = el;
              }}>
                <label for="name">Name</label>
                <TextValidator
                  className="form-control2"
                  type="text"
                  name="name"
                  id="name"

                  value={name}
                  onChange={this.handleInputChange}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </div>

              <div className="form-group">
                <label for="username">User name</label>
                <TextValidator
                  className="form-control2"
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={this.handleInputChange}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </div>

              <div class="form-group">
                <label for="userRole">User role</label>
                <select class="form-control2" id="userRole" name="userRole" defaultValue="Attendee">
                {currentUser && currentUser.role ==='admin' ? (<option value="Admin">Admin</option>):null}
                    <option value="Event host">Event host</option>
                    <option value="Attendee">Attendee</option>
                </select>
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <TextValidator
                  className="form-control2"
                  type="text"
                  name="email"
                  id="emailAddress"
                  value={email}
                  onChange={this.handleInputChange}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required', 'Email is not valid']}
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <TextValidator 
                  className="form-control2"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={this.handleInputChange}
                  validators={['required','minStringLength: 3','maxStringLength: 10']}
                  errorMessages={['this field is required','too short','too long']}
                />
              </div>

              <button type="submit" className="btn btn-primary purple-button">
                Create New Account
              </button>
            </ValidatorForm>
          </div>
        </div>
        <Footer />
      </div>
    ) 
  }
}

export default RouteAddUser;
