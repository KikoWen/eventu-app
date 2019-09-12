import React, {Component} from 'react';
import {Link } from "@reach/router";

class RouteEvents extends Component{
    constructor(props){
        super(props)
    
      }

    
      render(){
        return (
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
             events
              
          </div>
         
          <div className="footer">
              <div className="home-footer">
                  <i className="fas fa-home"></i>
                  <Link to="/events/create"><i className="fas fa-plus"></i></Link>
                  <i className="far fa-bookmark"></i>
                  <i className="fas fa-bars"></i>
  
              </div>
  
          </div>
    </div>
    

        )
      }
    }
    
    export default RouteEvents ;
    

