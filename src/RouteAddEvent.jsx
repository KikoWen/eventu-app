import React, {Component} from 'react';
import {addEvents,uploadFile} from './Api.jsx';
import { navigate } from '@reach/router';

class RouteAddEvent extends Component{
  handleFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.form);

    uploadFile(formData).then(res=>{


      var data = {
        name:formData.get('eventName'),
        category:formData.get('eventType'),
        location:formData.get('eventLocation'),
        description:formData.get('eventDescription'),
        cost:formData.get('ticketPrice'),
        photo: res.data
      }
  
      addEvents(data).then(res => navigate('/events'))
      
    })

  }
    
  render(){
    return (
      <div class="container addevent-container">
        <div class="header">
                
        </div>
        
        <div class="main">
          <h2>Add event</h2>
          <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
            <div class="form-group">
              <label for="eventName">Event Name</label>
              <input type="text" class="form-control" name="eventName" id="eventName"/>
            </div>
            <div class="event-type-and-location">
              <div class="form-group">
                <label for="eventType">Event Type</label>
                <select class="form-control" id="eventType" name="eventType">
                  <option>Entertainment</option>
                  <option>Wellbeing</option>
                  <option>Sport</option>
                  <option>Food & Drink</option>
                  <option>Miscellaneous</option>
                </select>
              </div>
              <div className="form-group">
                <label for="eventLocation">Event Location</label>
                <input type="text" class="form-control" name="eventLocation" id="eventLocation"/>
              </div>
            </div>
            <div class="form-group">
              <label for="eventDescription">Event Description</label>
              <textarea class="form-control" name="eventDescription" id="eventDescription" rows="4"></textarea>
            </div>
            <div class="form-group">
              <label for="uploadPhoto">Upload Photo</label>
              <input type="file" class="form-control-file" name="uploadPhoto" id="uploadPhoto"/>
            </div>
            <div class="form-group">
              <label for="ticketPrice">Ticket Price</label>
              <input type="text" class="form-control" name="ticketPrice" id="ticketPrice"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
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