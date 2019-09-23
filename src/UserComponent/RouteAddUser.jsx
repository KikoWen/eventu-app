import React, { Component } from "react";
import { addUsers, uploadFile } from "../Api.jsx";
import { navigate } from "@reach/router";
import Footer from "../Footer.jsx";

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

    var formData = new FormData(this.form);
    var { currentUser } = this.props;

    var data = {
      name: formData.get("name"),
      email: formData.get("email"),
      username: formData.get("username"),
      role: formData.get("role")
      // currentUser:currentUser
    };

    {
      currentUser && currentUser.role == "admin"
        ? addUsers(data).then(res => navigate("/users"))
        : addUsers(data).then(res => navigate("/events"));
    }

    

    // addUsers(data).then(res => navigate("/users"));
  };handleInputChange = (e) => {
      var value = e.target.value
      var inputName = e.target.name
  
  
      var  stateData =  {}
      stateData[inputName] = value
  
      this.setState(stateData)
    }

    formError = (inputs) => {
      console.log(inputs)
    
    }

  render() {
    var { currentUser } = this.props;
    return (
      <div className="container">
        <header>
          <i className="fas fa-arrow-left"></i>
        </header>
        <div className="main">
          <h3 className="page-name">create new account</h3>

          <div className="signup-contents">
            <ValidatorForm onError={this.formError} onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}
              onSubmit={this.handleFormSubmit}
              ref={el => {
                this.form = el;
              }}
            >
              <div className="form-group">
                <label for="name">Name</label>
                <TextValidator
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleInputChange}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required', 'Name is not valid']}
                />
              </div>

              <div className="form-group">
                <label for="userName">User name</label>
                <TextValidator
                  className="form-control"
                  type="text"
                  name="userName"
                  id="userName"
                  onChange={this.handleInputChange}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required', 'Username is not valid']}
                />
              </div>

              <div class="form-group">
                <label for="userrole">User role</label>
                <select class="form-control" id="userRole" name="userRole">
                  {currentUser && currentUser.role == "admin" ? (<option>Admin</option>): null}
                    <option>Event host</option>
                    <option>Attendee</option>
                </select>
       
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <TextValidator
                  className="form-control"
                  type="text"
                  name="email"
                  id="emailAddress"
                  onChange={this.handleInputChange}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required', 'Email is not valid']}
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create New Account
              </button>
            </ValidatorForm>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RouteAddUser;
