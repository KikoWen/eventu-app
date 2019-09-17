import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';


class RouteSavedEvents extends Component{
    render(){
        return(
            <div class="container savedEvents-container">
			<div class="header">
				<div class="header1">
					<h2 class="savedEvents-title">Saved Events <i class="far fa-bookmark"></i></h2>
				</div>

				<div class="header2">
					<div class="filter">
						<div class="filter">
							<p class="filter-p">filter</p>
							<i class="fas fa-chevron-down"></i>
						</div>
					</div>
				</div>
			</div>

			<div class="main">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" class="card-header upcoming-heading">
                            <h4 >Upcoming Events</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div class="upcoming-event-box">
									<div class="picture-div">
										<img src="assets/img/pic2.jpg" alt="" /> 
									</div>
									<div class="info-div">
										<div class="upcoming-event-name">Marathon</div>
										<div class="upcoming-event-location">Mission Bay</div>
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
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" class="card-header upcoming-heading">
                            <h4 >Past Events</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
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
       
        <div class="footer">
            <div class="home-footer">
                <i class="fas fa-home"></i>
                <i class="fas fa-search"></i>
                <i class="far fa-bookmark"></i>
                <i class="fas fa-bars"></i>
            </div>
        </div>
	</div>
        );
    }
}

export default RouteSavedEvents;