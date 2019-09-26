import React, {Component} from 'react';
import { Link, navigate } from "@reach/router";
import { deleteEvents,serverURL,addBookmarks } from './Api';

class Event extends Component {

    handleTrashClick = () => {
        var {event,refreshData} = this.props
        deleteEvents(event.id).then(res => refreshData())
       
    }
    handleBookmarkClick = () => {

       
        var {event,setCurrentUser, currentUser} = this.props
   
        addBookmarks(currentUser.id,{eventid:event.id}).then(res => {
            setCurrentUser(res.data)
        })
       
    }

    render(){
        var {event, currentUser} = this.props

        // var catColors = {
        //     sport: '#0091FF',
        //     wellbeing: '#519607',
        //     entertainment: '#6236FF',
        //     foodDrink: '#FA6400',
        //     miscellaneous: '#E02064'
        //   }

        var {event,currentUser} = this.props
        var color = event.category? event.category.color: '#0091FF';

        return currentUser ? (
            <div className="featured-card" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%,'+ color+'),url('+serverURL+event.photo+')'}}>
                <div className="information">
                    <div className="category-noborder">
                        
                        <div className="category" style={{color:color}}>{event.category? event.category.name : null}</div>
                        <div className="event-icon-group">
                            {currentUser.savedEvents.includes(event.id) ? <i className="fas fa-bookmark"></i> : <i onClick={this.handleBookmarkClick}className="far fa-bookmark"></i>}
                            { currentUser && (currentUser.id == event.user_id || currentUser.role == 'admin') ? (
                                <>
                                <Link to={'/events/'+event.id+'/edit'}><i className="far fa-edit"></i></Link>
                                <i onClick={this.handleTrashClick} className="fas fa-trash"></i> 
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div className="event-info"> 
                        <div className="date-location">
                            <h2 className="event-date">{event.time}</h2> <i className="fas fa-map-marker-alt"></i> 
                            <h2>{event.location}</h2>
                            <h3 className="event-price">$ {event.cost}</h3>
                        </div>
                        <h1 className="event-title">{event.name}</h1>
                        <Link to={'/events/'+event.id}><div className="event-details-btn" style={{backgroundColor:color}}>event details <i class="fas fa-arrow-right"></i></div></Link>
                    </div>
                    
                </div>
            </div>
        ): null}
}

export default Event;