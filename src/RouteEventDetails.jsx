import React, {Component} from 'react';
import {addEvents,uploadFile} from './Api.jsx';
import { navigate, Link } from '@reach/router';
import Footer from './Footer.jsx'

class RouteEventDetails extends Component{
    
      
    render(){
      return (
            <div class="container">
                <div class="image-section">
                    <i class="fas fa-arrow-left"></i>
                    <a class="entertainment" href="#">Entertainment</a>
                </div>

                <div class="text-contents">
                    <div class="title">
                        <h2>Name of event</h2>
                        <div class="icons">
                            <i class="far fa-bookmark"></i>
                            <i class="fas fa-share-square"></i>
                        </div>
                    </div>

                    <div class="explanation">
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut
                            enim ad minim veniam.  <a href="">read more</a></p>
                    </div>

                    <div class="date-info">
                        <div class="when">
                            <h4>When</h4>
                            <p>12 July 3:00am</p>
                        </div>
                        <div class="info where">
                            <h4>Where</h4>
                            <p>Takapuna beach</p>
                        </div>
                        <div class="info cost">
                            <h4>Cost</h4>
                            <p>$75.00</p>
                        </div> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
  } 
  export default RouteEventDetails ;