import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import Footer from './Footer.jsx';

import {getSingleUser, deleteBookmarks, serverURL} from './Api';


class RouteSavedEvents extends Component{
	constructor(props){
		super(props)
		this.state = {
			user:null
		}
	}

	componentDidMount(){
		var {id} = this.props
		
		getSingleUser(id).then(res=>this.setState({user:res.data}))
	}

	handleTrashClick = (e) => {
		var {id,refreshData} = this.props
		var eventId = e.target.dataset.eventid

        deleteBookmarks(id,eventId).then(res => this.setState({user:res.data}))
       
    }


    render(){

		var {user} = this.state
        return user ? (
            <div class="container savedEvents-container">
			<div class="header">
				<div class="header1">
					<h2 class="savedEvents-title">Saved Events <i class="far fa-bookmark"></i></h2>
				</div>
			</div>

			<div class="main ">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" class="card-header upcoming-heading">
                            <h4 >Upcoming Events</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body > 
								
								{user.bookmarks.map(event=>{

									return(
										<div class="upcoming-event-box">
											<div class="upcoming-event-box-icons">
												<i data-eventid={event.id} onClick={this.handleTrashClick} class="fas fa-times"></i>
											</div>
											<div class="picture-div">
												<img src={serverURL+event.photo} alt="" /> 
											</div>
											<div class="info-div">
												<div class="upcoming-event-name">{event.name}</div>
												<div class="upcoming-event-location">{event.location}</div>
												<div class="category-button ">{event.category}</div>

											</div>

										</div>

									)
								})}
									
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" class="card-header upcoming-heading">
                            <h4 >Past Events</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="event-card-body">
                                <div class="upcoming-event-box">
									<div class="picture-div">
										<img src="assets/img/pic2.jpg" alt="" /> 
									</div>
									<div class="info-div">
										<div class="upcoming-event-name">Lime Scooter Race</div>
										<div class="upcoming-event-location">Grafton</div>
										<div class="upcoming-event-box-icons">
											<div class="like"><i class="fas fa-bookmark"></i></div>
											<div class="share"><i class="far fa-share-square"></i></div>
										</div>
										<div class="category-button ">Sport</div>
									</div>
								</div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
				
                </Accordion>

        </div>
       
        <Footer/>
	</div>
        ) : null;
    }
}

export default RouteSavedEvents;