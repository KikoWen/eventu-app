import React, {Component} from 'react';
import { Router, Link } from "@reach/router";
// import {getEvents} from './Api.jsx'; import in Component.jsx
import RouteEvents from './RouteEvents.jsx';
import RouteAddEvent from './RouteAddEvent.jsx';
import RouteEditEvent from './RouteEditEvent.jsx';
// import music.jpg from './RouteEditEvent';

import './Scss/App.scss';
import Axios from 'axios';

var urlPrefix ='http://localhost:4000/api'; 

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      events:[
        {
          name:'testing',
          id: 1,
          description: 'live music',
          location:'3 City rd, Grafton, Auckland',
          time: '10th Oct 2019',
          category: 'entertainment',
      },
      {
        name:'fitness',
        id: 3,
        description: 'gym time',
        location:'3 City rd, Grafton, Auckland',
        time: '10th Oct 2019',
        category: 'sport'
      },
      {
        name:'wellbeing',
        id: 2,
        description: 'meditation',
        location:'3 City rd, Grafton, Auckland',
        time: '10th Oct 2019',
        category: 'wellbeing'
      },
      {
        name:'food & drink',
        id: 4,
        description: 'meditation',
        location:'3 City rd, Grafton, Auckland',
        time: '10th Oct 2019',
        category: 'foodDrink'
      },
      {
        name:'exchange cloths market',
        id: 5,
        description: 'meditation',
        location:'3 City rd, Grafton, Auckland',
        time: '10th Oct 2019',
        category: 'miscellaneous'
      }
      ]
    }
  }



  render(){

    var catColors = {
      sport: '#0091FF',
      wellbeing: '#519607',
      entertainment: '#6236FF',
      foodDrink: '#FA6400',
      miscellaneous: '#E02064'
    }
    var {events} = this.state
    return(

      <div className="container homepage-container">
        <div className="header">

            <div className="header1">   
                <h6>What's on</h6>
                <div className="location">
                    <h1>Auckland</h1>
                    <i className="fas fa-map-marker-alt"></i>
                </div>
            </div>
            
            <div className="header2">
                <h6 className="hi-name">Hi, Kathryn</h6>
                <div className="filter">  
                <div className="filter">
                    <p className="filter-p">filter</p> 
                    <i class="fas fa-chevron-down"></i>
                </div>
                </div>
            </div>
        </div>

        <div className="main">
            {
              events.map(event=>{
                return (
                  <div className="featured-card" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%, '+catColors[event.category]+'),url(../public/music.jpg)'}} >
                    <div className="information">
                        <div className="category-noborder">
                            <button class="category">{event.category}</button>
                            <i className="far fa-bookmark"></i>
                            <i className="far fa-edit"></i> 
                        </div>
    
                        <div className="event-info"> 
                            <div className="date-location">
                                <h2 className="event-date">{event.time}</h2> <i className="fas fa-map-marker-alt"></i> <h2>{event.location}</h2>
                            </div>
                            <p className="card-description">{event.description}</p>
                        </div>
                    </div>
                </div>
                )
              })
            }
        </div>
       
        <div className="footer">
            <div className="home-footer">
                <i className="fas fa-home"></i>
                <i className="fas fa-plus"></i>
                <i className="far fa-bookmark"></i>
                <i className="fas fa-bars"></i>
            </div>
        </div>
	</div>
      // <div >hello!

      //   <div>
      //     <Router>

      //       <RouteEvents path='events'/>

      //       <RouteAddEvent path='events/create'/>

      //       <RouteEditEvent path='events/:id/edit'/>

      //     </Router>
      //   </div>

      // </div>
    );
   
    

  }
   

}

export default App;
