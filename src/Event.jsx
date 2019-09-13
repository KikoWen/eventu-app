import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";
import { deleteEvents,serverURL } from './Api';

class Event extends Component {

    handleTrashClick = () => {
        var {event,refreshData} = this.props
        deleteEvents(event.id).then(res => refreshData())
       
    }

    render(){

        var catColors = {
            sport: '#0091FF',
            wellbeing: '#519607',
            entertainment: '#6236FF',
            foodDrink: '#FA6400',
            miscellaneous: '#E02064'
          }

        var {event} = this.props

        return(
            <div className="featured-card" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%, #0091FF),url('+serverURL+event.photo+')'}}>
                <div className="information">
                    <div className="category-noborder">
                        <button className="category">{event.category}</button>
                        <i className="far fa-bookmark"></i>
                        <i className="far fa-edit"></i>
                        <i onClick={this.handleTrashClick} className="fas fa-trash"></i> 
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
    }
}

export default Event;