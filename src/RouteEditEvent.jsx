import React, {Component} from 'react';
import { getSingleEvent , updateEvents} from './Api.jsx';
import { navigate } from '@reach/router';
import Footer from './Footer.jsx';

class RouteEditEvent extends Component{
    constructor(props){
        super(props)
        this.state = {
          event:{}
        }
      }

      componentDidMount(){
        var {id} = this.props;
        getSingleEvent(id).then(res => {
          this.setState({event:res.data})
        })
      }

      handleFormSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData(this.form);

        var data = {
          name:formData.get('eventName'),
          category:formData.get('eventType'),
          location:formData.get('eventLocation'),
          description:formData.get('eventDescription'),
          cost:formData.get('ticketPrice'),
      
        }
        var {id} = this.props;

        updateEvents(id,data).then(res => navigate('/events'))
      }

    
      render(){
        
        var {name,description,catogory,location,cost} = this.state.event
        return (
          <div className="container addevent-container">
            {/* <div className="header"> 
            </div> */}
            <div className="main">
              <h2>Edit event</h2>
              <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                <div className="form-group">
                  <label htmlFor="eventName">Event Name</label>
                  <input type="text" className="form-control2" name="eventName" id="eventName" defaultValue={name} />
                </div>
                <div className="event-type-and-location">
                  <div className="form-group">
                    <label htmlFor="eventType">Event Type</label>
                    <select className="form-control2" id="eventType" name="eventType" defaultValue ={catogory}> 
                      <option>Entertainment</option>
                      <option>Wellbeing</option>
                      <option>Sport</option>
                      <option>Food & Drink</option>
                      <option>Miscellaneous</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventLocation">Event Location</label>
                    <input type="text" className="form-control2" name="eventLocation" id="eventLocation" defaultValue={location}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="eventDescription">Event Description</label>
                  <textarea className="form-control2" name="eventDescription" id="eventDescription" rows="4" defaultValue={description}/>
                </div>
                <div className="form-group">
                  <label htmlFor="uploadPhoto">Upload Photo</label>
                  <input type="file" className="form-control-file" name="uploadPhoto" id="uploadPhoto"/>
                </div>
                <div className="form-group">
                  <label htmlFor="ticketPrice">Ticket Price</label>
                  <input type="text" className="form-control2" name="ticketPrice" id="ticketPrice" defaultValue={cost}/>
                </div>
                <button type="submit" className="btn btn-primary" id="Submit">Update</button>
              </form>
            </div>
            <Footer/>
          </div>
    

        )
      }
    }
    
    export default RouteEditEvent ;