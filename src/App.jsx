import React, { Component } from "react";
import { Router, Link, navigate, Redirect } from "@reach/router";

// import {getEvents} from './Api.jsx'; import in Component.jsx
import RouteEvents from "./RouteEvents";
import RouteSingleEvent from "./RouteSingleEvent";
import RouteAddEvent from "./RouteAddEvent";
import RouteEditEvent from "./RouteEditEvent";
import RouteLogin from "./RouteLogin.jsx";
import RouteEventDetails from "./RouteEventDetails.jsx";

import RouteUsers from './UserComponent/RouteUsers.jsx';
import RouteAddUser from './UserComponent/RouteAddUser.jsx';
import RouteEditUser from './UserComponent/RouteEditUser.jsx';
import RouteMenu from './RouteMenu';

// import music.jpg from 'chec./RouteEditEvent';

import "./Scss/App.scss";
import { getSingleEvent, getSingleUser, getCategories } from "./Api";

var urlPrefix = "http://localhost:4000/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  setCurrentUser = user => {
    this.setState({ currentUser: user });
  };
  componentDidMount() {
    //local storage
    var userId = localStorage.getItem("userId");

    if (userId) {
      getSingleUser(userId).then(res =>
        this.setState({ currentUser: res.data })
      );
    }
  }

  render() {
    var { currentUser } = this.state;
    return (
      <div>
        <Router>
          <RouteEvents currentUser={currentUser} path="/events" />

          <RouteSingleEvent  path="/events/:id/" currentUser={currentUser} />

          <RouteAddEvent currentUser={currentUser} path="/events/create" />

          <RouteEditEvent path="/events/:id/edit/" />

          <RouteLogin setCurrentUser={this.setCurrentUser} path="/" />

          {currentUser && currentUser.role == "admin" ? (
            <RouteUsers currentUser={currentUser} path="/users" />
          ) : null}

          <RouteAddUser currentUser={currentUser} path="/users/create" />

          {/* {currentUser ? ( */}
          <RouteEditUser currentUser={currentUser} path="/users/:id/edit" />
          {/* ) : null} */}

          <RouteMenu path='/menu'/>
        </Router>
      </div>
    );
  }
}

export default App;
