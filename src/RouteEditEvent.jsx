import React, {Component} from 'react';
import { getSingleEvent , updateEvents, uploadFile} from './Api.jsx';
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
  
        uploadFile(formData).then(res=>{
         
          var data = {
            name:formData.get('eventName'),
            category:formData.get('eventType'),
            location:formData.get('eventLocation'),
            description:formData.get('eventDescription'),
            cost:formData.get('ticketPrice'),
          }

          var fileName = res.data

          if(fileName != ''){
            data.photo = fileName
          }

          var {id} = this.props;
  
          updateEvents(id,data).then(res => navigate('/events'))
    

        })
       
      }

    
      render(){
        var {currentUser} = this.props        
        var {name,description,catogory,location,cost,time} = this.state.event
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
                      <option>Cuisine</option>
                      <option>Miscellaneous</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventLocation">Event Location</label>
                    <input type="text" className="form-control2" name="eventLocation" id="eventLocation" defaultValue={location}/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="datetime">Date/Time</label>
                  <input type="text" class="form-control2" name="datetime" id="uploadPhoto" placeholder="dd-mm-yyyy 00:00" defaultValue={time}/>
                </div>

                <div className="form-group">
                  <label htmlFor="eventDescription">Event Description</label>
                  <input className="form-control2" name="eventDescription" id="eventDescription" rows="4" defaultValue={description}/>
                </div>
                <div className="form-group">
                  <label htmlFor="uploadPhoto">Upload Photo</label>
                  <input type="file" className="form-control-file" name="uploadPhoto" id="uploadPhoto"/>
                </div>
                <div className="form-group">
                  <label htmlFor="ticketPrice">Ticket Price</label>
                  <input type="text" className="form-control2" name="ticketPrice" id="ticketPrice" defaultValue={cost}/>
                </div>
                <button type="submit" className="btn btn-primary submit-buttom " >Update</button>
              </form>
            </div>
            <Footer currentUserId={currentUser ? currentUser.id : null}/>
          </div>
    

        )
      }
    }
    
    export default RouteEditEvent ;