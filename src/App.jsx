import React, {Component} from 'react';
import { Router, Link, navigate } from "@reach/router";

// import {getEvents} from './Api.jsx'; import in Component.jsx
import RouteEvents from './RouteEvents.jsx';
import RouteAddEvent from './RouteAddEvent.jsx';
import RouteEditEvent from './RouteEditEvent.jsx';
import RouteSavedEvents from './RouteSavedEvents.jsx';
// import music.jpg from './RouteEditEvent';

import './Scss/App.scss';

var urlPrefix ='http://localhost:4000/api'; 

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      events:[]
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
    var {events} = this.state
    return(

        <div>
          <Router>

            <RouteEvents path='/'/>  

            <RouteEvents path='/events'/>

            <RouteAddEvent path='/events/create'/>

            <RouteEditEvent path='/events/:id/edit'/>

            <RouteSavedEvents path='/users/:id/savedEvents'/>

          </Router>
        </div>
    );
  
  }
   
}

export default App;
