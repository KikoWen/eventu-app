import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";
import { deleteEvents,serverURL } from './Api';
import CategoryFilter from './CategoryFilter';

class Event extends Component {

    handleTrashClick = () => {
        var {event,refreshData} = this.props
        deleteEvents(event.id).then(res => refreshData())
       
    }

    render(){

        var {event, currentUser,category} = this.props

        var color = event.category? event.category.color: '#0091FF'
        return(
            <div className="featured-card" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%, '+color+'),url('+serverURL+event.photo+')'}}>
                <div className="information">
                    <div className="category-noborder">
                        <button className="category">{event.category? event.category.name : null}</button>

                        { currentUser && currentUser.id == event.user_id ? (
                            <>
                            <i className="far fa-bookmark"></i>
                            <Link to={'/events/'+event.id+'/edit'}><i className="far fa-edit"></i></Link>
                            <i onClick={this.handleTrashClick} className="fas fa-trash"></i> 
                            </>
                        ) : null}
                        
                    </div>

                    <div className="event-info"> 
                        <div className="date-location">
                            <h2 className="event-date">{event.time}</h2> <i className="fas fa-map-marker-alt"></i> 
                            <h2>{event.location}</h2>
                            <h3 className="event-price">{event.cost}</h3>
                        </div>
                        <p className="card-description">{event.description}</p>
                    </div>
                    
                </div>
            </div>
        ) 
    }
}

export default Event;