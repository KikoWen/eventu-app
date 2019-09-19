import React, {Component} from 'react';
import {addUsers,uploadFile} from '../Api.jsx';
import { navigate } from '@reach/router';
import Footer from '../Footer.jsx'

class RouteAddUser extends Component{

    handleFormSubmit = (e) => {
        e.preventDefault();
        // var {currentUser} = this.props

        var formData = new FormData(this.form);
     
      
        var data ={
            name:formData.get('name'),
            email:formData.get('email'),
            username:formData.get('username'),
            role:formData.get('role'),
            // currentUser:currentUser
        }

        addUsers(data).then(res => navigate('/users'))
   
    }

    render(){
        // var {currentUser} = this.props
        return(
            <div className="container">
                <header><i className="fas fa-arrow-left"></i></header>
                <div className="main">
                    <h3 className="page-name">create new account</h3>

                    <div className="signup-contents">
                        <form onSubmit ={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input className="form-control" type="text" name="name" id="name" />    
                            </div>

                            <div className="form-group">
                                <label for="userName">User name</label>
                                <input className="form-control" type="text" name="userName" id="userName" />
                            </div>
                        
                            <div class="form-group">
                                <label for="userrole">User role</label>
                                <select class="form-control" id="userRole" name="userRole">

                                    <option>Admin</option>
                                    <option>Event host</option>
                                    <option>Attendee</option>
                     
                                </select>
                                {/* <select class="form-control" id="userRole" name="userRole">

                                  {(currentUser && currentUser.role=='admin') ? 
                                    <>
                                        <option>Admin</option>
                                        <option>Event host</option>
                                        <option>Attendee</option>
                                  </> :  
                                     <>
                                        <option>Event host</option>
                                        <option>Attendee</option>
                                    </>
                                }
                                </select> */}
                            </div>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input className="form-control" type="text" name="email" id="emailAddress"/>
                            </div>

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input className="form-control" type="password" name="password" id="password" />
                            </div>
                        <button type="submit" className="btn btn-primary">Create New Account</button>
                    </form>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default RouteAddUser;