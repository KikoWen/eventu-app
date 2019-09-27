import React, { Component } from "react";
import { Router, Link, navigate, Redirect } from "@reach/router";

// import {getEvents} from './Api.jsx'; import in Component.jsx
import RouteSavedEvents from './RouteSavedEvents.jsx';
import RouteEvents from "./RouteEvents";
import RouteSingleEvent from "./RouteSingleEvent";
import RouteAddEvent from "./RouteAddEvent";
import RouteEditEvent from "./RouteEditEvent";
import RouteLogin from "./RouteLogin.jsx";
import RouteEventDetails from "./RouteEventDetails.jsx";

import RouteUsers from './UserComponent/RouteUsers.jsx';
import RouteAddUser from './UserComponent/RouteAddUser.jsx';
import RouteEditUser from './UserComponent/RouteEditUser.jsx';

// import music.jpg from './RouteEditEvent';
import RouteMenu from './RouteMenu.jsx';
import RouteSingleCategory from './RouteSingleCategory.jsx';

import "./Scss/App.scss";
import { getSingleEvent, getSingleUser, getCategories } from "./Api";


var urlPrefix = "http://10.2.24.42:4000/api";

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
     
          <RouteSingleEvent  currentUser={currentUser} path="/events/:id/" currentUser={currentUser} />

          <RouteEvents currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} path='/events'/>
          
          <RouteSingleCategory currentUser={currentUser} path ="/categories/:id" />

          <RouteAddEvent currentUser={currentUser} path="/events/create" />

          <RouteEditEvent currentUser={currentUser} path="/events/:id/edit/" />

          <RouteLogin setCurrentUser={this.setCurrentUser} path="/" />

          {currentUser && currentUser.role == "admin" ? (
            <RouteUsers currentUser={currentUser} path="/users" />
          ) : null}

          <RouteAddUser currentUser={currentUser} path="/users/create" />

          {/* {currentUser ? ( */}
          <RouteEditUser currentUser={currentUser} path="/users/:id/edit" />
          {/* ) : null} */}

          <RouteSavedEvents currentUser={currentUser}  path='/users/:id/savedEvents'/>

          <RouteMenu setCurrentUser={this.setCurrentUser} currentUser={currentUser} path='/menu'/>
          
        </Router>

      </div>
    );
  }
}

export default App;
