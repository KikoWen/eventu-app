import React, { Component } from "react";
import { getSingleUser, updateUsers } from "../Api.jsx";
import {Link} from "@reach/router";
import { navigate } from "@reach/router";
import Footer from "../Footer.jsx";

class RouteEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    var { id } = this.props;
    getSingleUser(id).then(res => {
      this.setState({ user: res.data });
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();

    var formData = new FormData(this.form);

    var data = {
      name: formData.get("name"),
      email: formData.get("email"),
      username: formData.get("username"),
      role: formData.get("role")
    };

    var { id } = this.props;

    updateUsers(id, data).then(res => navigate("/users"));
  };

  render() {
    var { name, username, email, role } = this.state.user;
    var { currentUser } = this.props;
    return (
      <div className="container">
        <header>
          <Link to='/events'><i class="fas fa-arrow-left"></i></Link>
        </header>
        <div className="main">
          <h3 className="page-name">Edit account</h3>

          <div className="signup-contents">
            <form
              onSubmit={this.handleFormSubmit}
              ref={el => {
                this.form = el;
              }}
            >
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={name}
                />
              </div>

              <div className="form-group">
                <label for="userName">User name</label>
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  id="userName"
                  defaultValue={username}
                />
              </div>

              <div class="form-group">
                <label for="role">User role</label>
                <select class="form-control" id="userRole" name="userRole">
                  {currentUser && currentUser.role == "admin" ? (<option>Admin</option>): null}
                    <option>Event host</option>
                    <option>Attendee</option>
                </select>
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="emailAddress"
                  defaultValue={email}
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
                Update
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RouteEditUser;
