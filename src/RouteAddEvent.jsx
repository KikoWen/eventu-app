import React, {Component} from 'react';
import {addEvents,uploadFile,getCategories} from './Api.jsx';
import { navigate, Link } from '@reach/router';
import Footer from './Footer.jsx'

class RouteAddEvent extends Component{

  constructor(props){
    super(props);
    this.state ={
        events:[],
        categories:[]
        
    }
  }
  componentDidMount(){
    getCategories().then(res=>this.setState({categories:res.data}))
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.form);
    var {currentUser} = this.props
    uploadFile(formData).then(res=>{


      var data = {
        name:formData.get('eventName'),
        cat_id:formData.get('eventType'),
        location:formData.get('eventLocation'),
        description:formData.get('eventDescription'),
        cost:formData.get('ticketPrice'),
        photo: res.data,
        user_id: currentUser.id
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
                  {
                        this.state.categories.map( category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })
                    }
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
        <Footer/>
      </div>
    )
  }
} 
export default RouteAddEvent ;