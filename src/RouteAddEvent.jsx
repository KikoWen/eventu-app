import React, {Component} from 'react';
import {addEvents} from './Api.jsx';
import { navigate } from '@reach/router';

class RouteAddEvent extends Component{
  handleFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.form);

    var data = {
      name:formData.get('name-input'),
      description:formData.get('description-input'),
      location:formData.get('location-input'),
      time:formData.get('time-input'),
      category:formData.get('category-input'),
    }
    addEvents(data).then(res => navigate('/events'))
  }
    
 

    
  render(){
    return (
      <div class="container addevent-container">
        <div class="header">
                
        </div>
        
        <div class="main"><h2>Add event</h2>
            <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                <div class="form-group">
                    <label for="eventName">Event Name</label>
                    <input type="name" class="form-control" id="eventName"/>
                </div>
                <div class="event-type-and-location">
                    <div class="form-group">
                        <label for="eventType">Event Type</label>
                        <select class="form-control" id="">
                            <option>Entertainment</option>
                            <option>Wellbeing</option>
                            <option>Sport</option>
                            <option>Food & Drink</option>
                            <option>Miscellaneous</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="eventLocation">Event Location</label>
                        <input type="location" class="form-control" id="eventLocation"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Event Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <div class="form-group">
                    <label for="uploadPhoto">Upload Photo</label>
                    <input type="file" class="form-control-file" id="uploadPhoto"/>
                </div>
                <div class="form-group">
                    <label for="ticketPrice">Event Name</label>
                    <input type="price" class="form-control" id="ticketPrice"/>
                </div>
            </form>
            <button type = "submit" className="btn btn-primary">PLEEaaESSSsse</button>
        </div>
        <div class="footer">
            <div class="home-footer">
                <i class="fas fa-home"></i>
                <i class="fas fa-plus"></i>
                <i class="far fa-bookmark"></i>
                <i class="fas fa-bars"></i>
            </div>
        </div>
        
      </div>

      


    )
  }
    
} 
export default RouteAddEvent ;