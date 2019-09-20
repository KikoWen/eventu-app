import React, {Component} from 'react';
import { Router, Link, navigate, Redirect } from "@reach/router";

// import {getEvents} from './Api.jsx'; import in Component.jsx
import RouteEvents from './RouteEvents.jsx';
import RouteAddEvent from './RouteAddEvent.jsx';
import RouteEditEvent from './RouteEditEvent.jsx';
import RouteSavedEvents from './RouteSavedEvents.jsx';
import RouteLogin from './RouteLogin.jsx';

import RouteUsers from './UserComponent/RouteUsers.jsx';
import RouteAddUser from './UserComponent/RouteAddUser.jsx';
import RouteEditUser from './UserComponent/RouteEditUser.jsx';
import RouteMenu from './RouteMenu';

import {getSingleUser } from './Api';

// import music.jpg from './RouteEditEvent';

import './Scss/App.scss';

var urlPrefix ='http://localhost:4000/api'; 

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      // events:[]
      currentUser:null
 
    }
   
  }
  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  componentDidMount(){
  
    
    var userId = localStorage.getItem('userId')

     if (userId){
         getSingleUser(userId).then(res =>  this.setState({currentUser:res.data}))
     }
  }


  render(){

    // var catColors = {
    //   sport: '#0091FF',
    //   wellbeing: '#519607',
    //   entertainment: '#6236FF',
    //   foodDrink: '#FA6400',
    //   miscellaneous: '#E02064'
    // }
    // var {events} = this.state

    var {currentUser} = this.state
    return(

        <div>
          <Router>

            <RouteEvents currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} path='/events'/>

            <RouteAddEvent path='/events/create'/>

            <RouteEditEvent path='/events/:id/edit'/>
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/" />

            <RouteUsers path='/users'/>

            <RouteAddUser path='/users/create'/>

            <RouteEditUser path='/users/:id/edit'/>

            <RouteMenu path='/menu'/>

            <RouteSavedEvents path='/users/:id/savedEvents'/>

          </Router>
        </div>
    );
  
  }
   
}

export default App;
