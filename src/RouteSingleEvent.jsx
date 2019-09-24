import React, { Component } from 'react';
import { Link,navigate } from "@reach/router";
import Event from './Event';
import { getEvents, deleteReviews, getSingleEvent, serverURL,addReviews } from './Api';
import Footer from './Footer.jsx';

class RouteSingleEvent extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            event:null
        }
    }

    handleFormSubmit = (e) => {


        e.preventDefault();
        console.log('hi')
        var {id,currentUser,review} = this.props
       var formData = new FormData(this.form);
       
        var data = {
            title:formData.get('title'),
            comment:formData.get('comment'),
            user_id:currentUser.id,
            event_id:id
        }
        console.log(data)
        
        addReviews(data)
        .then(res => this.loadSingleEvent())
          
     
    
    }

    handleTrashClick = (e) => {
        var reviewId = e.target.dataset.reviewid
        var {refreshData} = this.props
        console.log(reviewId)
        deleteReviews(reviewId).then(res => this.loadSingleEvent())
       
    }

    loadSingleEvent = () => {
        var {id} = this.props

        getSingleEvent(id).then(res=>{

            this.setState({event:res.data})
        })
    }

    componentDidMount(){
        this.loadSingleEvent()
    }

    render() {
        console.log('Bla')

        var {event} = this.state

        return event ? (
            <div className="container single-event-container">
                <div className="mainevent-section">
                    <div className="image-section" style={{backgroundImage:'linear-gradient(165deg, rgba(0,0,0,0) 43%, #0091FF),url('+serverURL+event.photo+')'}}>
                        <i className="fas fa-arrow-left"></i>
                        <a className="entertainment" href="#">Entertainment</a>
                    </div>

                    <div className="text-contents">
                        <div className="title">
                            <h2>{event.name}</h2>
                            <div className="icons">
                                <i className="far fa-bookmark"></i>
                                <i className="fas fa-share-square"></i>
                            </div>
                        </div>

                        <div className="explanation">
                            <p>{event.description} <a href="">read more</a></p>
                        </div>

                        <div className="date-info">
                            <div className="when">
                                <h4>When</h4>
                                <p>{event.time}</p>
                            </div>
                            <div className="info where">
                                <h4>Where</h4>
                                <p>{event.location}</p>
                            </div>
                            <div className="info cost">
                                <h4>Cost</h4>
                                <p>{event.cost}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="comment-section">
                    <p className="pcomment-section">Comments</p>

                    {event.reviews.map(review=>{

                        return (
                   
                            <div className="card comment-card">
                                <div className="card-body">
                                    <p className="username">{review.user.name}</p>
                                    <h5 className="card-title title">{review.title}</h5>
                                    <p className="card-text comment">{review.comment}</p>
                                    <i onClick={this.handleTrashClick} data-reviewid={review.id} className="fas fa-trash"></i>
                                </div>

                            </div>

                        )
                    })}

                    <div className="input-group mb-3">
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                        <input type="text" name="title" id="title" className="form-control" placeholder="Add title" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <input type="text" name="comment" id="comment" className="form-control" placeholder="Add comment" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button type="submit" className="comment-button">add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                ) :null
            }
        }
        
        
export default RouteSingleEvent ;